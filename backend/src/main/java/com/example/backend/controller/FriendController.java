package com.example.backend.controller;

import com.example.backend.model.Friend;
import com.example.backend.model.User;
import com.example.backend.repository.FriendRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.util.FileUploadUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/friends")
@RequiredArgsConstructor
public class FriendController {

    private final FriendRepository friendRepository;
    private final UserRepository userRepository;
    private final FileUploadUtil fileUploadUtil;

    @GetMapping("/{username}")
    public ResponseEntity<?> listFriends(@PathVariable String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Friend> friends = friendRepository.findByUser(user);
        return ResponseEntity.ok(friends);
    }

    @PostMapping(path = "/{username}", consumes = org.springframework.http.MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> addFriend(@PathVariable String username, @RequestBody Friend payload) {
        if (payload.getName() == null || payload.getName().isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Friend name is required");
        }
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Friend f = new Friend();
        f.setName(payload.getName());
        f.setBalance(payload.getBalance() == null ? BigDecimal.ZERO : payload.getBalance());
        f.setImageFileName(payload.getImageFileName());
        f.setUser(user);
        Friend saved = friendRepository.save(f);
        return ResponseEntity.ok(saved);
    }

    // Multipart variant: allow uploading a profile image when adding a friend
    @PostMapping(path = "/{username}", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addFriendWithImage(
            @PathVariable String username,
            @RequestParam("name") String name,
            @RequestPart(value = "profileImage", required = false) org.springframework.web.multipart.MultipartFile profileImage
    ) {
        if (name == null || name.isBlank()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Friend name is required");
        }
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        Friend f = new Friend();
        f.setName(name);
        f.setBalance(BigDecimal.ZERO);
        if (profileImage != null && !profileImage.isEmpty()) {
            try {
                String fileName = fileUploadUtil.uploadFileAndSaveToDatabase(profileImage);
                f.setImageFileName(fileName);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(java.util.Map.of("message", "Failed to upload friend image", "error", e.getMessage()));
            }
        }
        f.setUser(user);
        Friend saved = friendRepository.save(f);
        return ResponseEntity.ok(saved);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteFriend(@PathVariable Long id) {
        friendRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Update friend's image
    @PostMapping(path = "/{id}/profileImage", consumes = org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> updateFriendImage(
            @PathVariable Long id,
            @RequestPart("profileImage") org.springframework.web.multipart.MultipartFile profileImage
    ) {
        try {
            Friend f = friendRepository.findById(id).orElse(null);
            if (f == null) return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Friend not found");
            if (profileImage == null || profileImage.isEmpty()) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("No profile image provided");
            }
            String fileName = fileUploadUtil.uploadFileAndSaveToDatabase(profileImage);
            f.setImageFileName(fileName);
            Friend saved = friendRepository.save(f);
            return ResponseEntity.ok(saved);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(java.util.Map.of("message", "Failed to update friend image", "error", e.getMessage()));
        }
    }

    @PutMapping("/{id}/balance")
    public ResponseEntity<?> updateBalance(
            @PathVariable Long id,
            @RequestParam(value = "delta", required = false) BigDecimal delta,
            @RequestBody(required = false) java.util.Map<String, Object> body
    ) {
        try {
            log.info("Updating friend balance: id={}, delta(param)={} body={}", id, delta, body);

            // Try to read delta from body if not provided as query param
            if (delta == null && body != null && body.containsKey("delta")) {
                Object raw = body.get("delta");
                if (raw != null) {
                    try {
                        delta = new BigDecimal(raw.toString());
                    } catch (NumberFormatException nfe) {
                        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                                .body("Invalid delta value");
                    }
                }
            }

            if (delta == null) delta = BigDecimal.ZERO;

            Friend f = friendRepository.findById(id).orElse(null);
            if (f == null) {
                log.warn("Friend not found for id={}", id);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Friend not found");
            }

            BigDecimal current = f.getBalance() == null ? BigDecimal.ZERO : f.getBalance();
            f.setBalance(current.add(delta));
            friendRepository.save(f);
            log.info("Updated friend id={} newBalance={}", id, f.getBalance());
            return ResponseEntity.ok(f);
        } catch (Exception e) {
            log.error("Failed to update balance for friend id={}: {}", id, e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(java.util.Map.of("message", "Failed to update balance", "error", e.getMessage()));
        }
    }
}
