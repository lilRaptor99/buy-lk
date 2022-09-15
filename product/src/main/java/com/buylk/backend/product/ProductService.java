package com.buylk.backend.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public void addNewProduct(Product product) {
        productRepository.save(product);
    }

    @Transactional
    public void updateProduct(long productId, String name,
                              double price,String productType, long quantity) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Product" + " with id " + productId + " does not exist"
                ));
        product.setName(name);
        product.setPrice(price);
        product.setProductType(productType);
        product.setQuantity(quantity);
    }

    public List<Product> getProductByType(String productType) {
        return productRepository.findByProductType(productType);
    }
}
