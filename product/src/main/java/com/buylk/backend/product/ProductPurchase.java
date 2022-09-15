package com.buylk.backend.product;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@AllArgsConstructor
@NoArgsConstructor

public @Data class ProductPurchase {
    private long productId;
    private long quantity;
}
