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
                                    100.0,
                                    "kids",
                                    44),
                            new Product(null,
                                    "Product 2",
                                    200.0,
                                    "gents",
                                    5),
                            new Product(null,
                                    "Product 3",
                                    200.0,
                                    "gents",
                                    5),
                            new Product(null,
                                    "Product 4",
                                    200.0,
                                    "kids",
                                    5),
                            new Product(null,
                                    "Product 5",
                                    200.0,
                                    "women",
                                    5)

                    )
            );
        };
    }
}
