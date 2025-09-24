//package com.example.backend.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.filter.CorsFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//@Configuration
//public class CorsConfig {
//
//    @Bean
//    public CorsFilter corsFilter() {
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        CorsConfiguration config = new CorsConfiguration();
//
//        config.addAllowedOrigin("http://localhost:5173"); // Vite dev server
//        config.addAllowedMethod("*"); // Allow all HTTP methods
//        config.addAllowedHeader("*"); // Allow all headers
//        config.setAllowCredentials(true); // Allow credentials (e.g., cookies)
//
//        source.registerCorsConfiguration("/**", config);
//        return new CorsFilter(source);
//    }
//}

package com.example.backend.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // Allow multiple origins for development
        config.setAllowedOrigins(List.of(
                "http://localhost:9000",  // Vite dev server
                "http://127.0.0.1:9000",  // Alternative localhost
                "http://localhost:9001",  // Vite fallback port
                "http://127.0.0.1:9001",  // Alternative localhost
                "http://localhost:3000",  // Common React dev port
                "http://127.0.0.1:3000"   // Alternative localhost
        ));

        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
        config.setAllowedHeaders(List.of("*"));
        config.setAllowCredentials(true); // Important for authentication cookies
        config.setMaxAge(3600L); // Cache preflight response for 1 hour

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
