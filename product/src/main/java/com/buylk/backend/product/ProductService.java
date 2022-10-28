package com.buylk.backend.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import javax.transaction.Transactional;
import java.util.List;
@Service
public class ProductService {

    private final ProductRepository productRepository;

    private SessionFactory hibernateFactory;
    //save example - without transaction

    @Autowired
    public ProductService(ProductRepository productRepository,EntityManagerFactory factory) {
        this.productRepository = productRepository;
        this.hibernateFactory = factory.unwrap(SessionFactory.class);
    }

    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public void addNewProduct(Product product) {
        productRepository.save(product);
    }

    @Transactional
    public void updateProduct(long productId, String name,
                              double price, String productType, long quantity) {
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

    public void updateQuantity(List<ProductPurchase> productPurchase) {
        Session session=hibernateFactory.openSession();
        productPurchase.forEach((n) -> {
                    Product product = productRepository.findById(n.getProductId())
                            .orElseThrow(() -> new IllegalArgumentException(
                                    "Product" + " with id " + n.getProductId() + " does not exist"
                            ));
                    long quantity = product.getQuantity();
                    long newQuantity = quantity - n.getQuantity();
                    System.out.println(newQuantity);
                    product.setQuantity(newQuantity);
                    session.update(product);

                }
        );
    }

    public void deleteItem(Long id) {
        productRepository.findById(id);
        boolean exists=productRepository.existsById(id);
        if(!exists){
            throw new IllegalStateException("product "+id+"does not exists");
        }else{
            productRepository.deleteById(id);
        }
    }
}
