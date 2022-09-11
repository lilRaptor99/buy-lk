package com.buylk.backend.product;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ProductConfig {
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository) {
        return args -> {
            productRepository.saveAll(
                    List.of(
                            new Product(null,
                                    "Product 1",
                                    "Product 1 desc",
                                    100.0,
                                    44),
                            new Product(null,
                                    "Product 2",
                                    "Product 2 desc",
                                    200.0,
                                    5)
                    )
            );
        };
    }
}
