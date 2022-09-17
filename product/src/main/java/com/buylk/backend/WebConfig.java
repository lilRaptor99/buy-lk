package com.buylk.backend;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        CorsRegistration corsRegistration = registry.addMapping("/**");
        corsRegistration.allowedOrigins("http://localhost:3000");
        corsRegistration.allowedHeaders("GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD");
        corsRegistration.allowedHeaders("Authorization", "content-type", "Accept");
    }
}