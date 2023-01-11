package com.backend.foodieshub.model.FoodRestaurant;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FoodRating {
    private int id;

    private int menuId;

    private double foodRatings;
    private String foodReviews;
}
