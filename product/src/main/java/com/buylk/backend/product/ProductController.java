package com.buylk.backend.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping(path="{productType}")
    public List<Product> getProductByType(@PathVariable String productType) {
        return productService.getProductByType(productType);
    }
    @PostMapping(path="add")
    public void addNewProduct(@RequestBody Product product) {
        productService.addNewProduct(product);
    }

    @PutMapping(path = "{productId}")
    public void updateProduct(@PathVariable long productId, @RequestBody Product product
    ) {
        productService.updateProduct(
                productId,
                product.getName(),
                product.getPrice(),
                product.getProductType(),
                product.getQuantity()
        );
    }

    @PutMapping(path = "updateQuantity")
    public void updateQuantity(@RequestBody List<ProductPurchase> productPurchase){
        productService.updateQuantity(productPurchase);
    }
}
