package com.example.backend.service;

import com.example.backend.model.PasswordResetToken;
import com.example.backend.model.User;
import com.example.backend.repository.PasswordResetTokenRepository;
import com.example.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
public class PasswordResetService {

    private final PasswordResetTokenRepository tokenRepository;
    private final UserRepository userRepository;
    private final JavaMailSender mailSender;

    @Value("${app.frontend.base-url:http://localhost:9000}")
    private String frontendBaseUrl;

    @Value("${app.password-reset.dev-log-links:true}")
    private boolean devLogLinks;

    @Value("${spring.mail.host:}")
    private String mailHost;

    public Optional<String> createResetTokenAndSendEmail(String email) {
        Optional<User> userOpt = userRepository.findByUsername(email);
        if (userOpt.isEmpty()) {
            // Also try by email field
            userOpt = userRepository.findAll().stream().filter(u -> email.equalsIgnoreCase(u.getEmail())).findFirst();
        }
        if (userOpt.isEmpty()) {
            // Don't reveal user existence
            log.info("Password reset requested for non-existent email: {}", email);
            return Optional.empty();
        }
        User user = userOpt.get();

        // Invalidate any previous tokens for this user
        tokenRepository.deleteByUser(user);

        String token = UUID.randomUUID().toString();
        PasswordResetToken prt = new PasswordResetToken();
        prt.setToken(token);
        prt.setUser(user);
        prt.setExpiresAt(LocalDateTime.now().plusMinutes(30));
        prt.setUsed(false);
        tokenRepository.save(prt);

        String link = frontendBaseUrl + "/reset-password?token=" + token;

        if (!StringUtils.hasText(mailHost) || devLogLinks) {
            // Dev mode: log the link (and return it so caller may surface it in response)
            log.warn("DEV MODE: Password reset link for {} -> {}", email, link);
            return Optional.of(link);
        }

        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(user.getEmail());
            message.setSubject("Reset your password");
            message.setText("Click the link to reset your password: " + link + "\nThis link expires in 30 minutes.");
            mailSender.send(message);
            return Optional.of(link);
        } catch (Exception e) {
            log.error("Failed to send password reset email: {}", e.getMessage(), e);
            return Optional.of(link); // Still return link in dev/testing
        }
    }

    public boolean resetPassword(String token, String newPassword, org.springframework.security.crypto.password.PasswordEncoder passwordEncoder) {
        Optional<PasswordResetToken> tokenOpt = tokenRepository.findByToken(token);
        if (tokenOpt.isEmpty()) return false;
        PasswordResetToken prt = tokenOpt.get();
        if (prt.isUsed() || prt.getExpiresAt().isBefore(LocalDateTime.now())) return false;

        User user = prt.getUser();
        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        prt.setUsed(true);
        tokenRepository.save(prt);
        return true;
    }
}
