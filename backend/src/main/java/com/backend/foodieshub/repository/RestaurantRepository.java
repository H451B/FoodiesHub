package com.backend.foodieshub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.backend.foodieshub.model.FoodRestaurant.Restaurant;
import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant, Integer> {
    @Modifying
    @Query(value = "SELECT * FROM restaurant WHERE email = ?#{[0]} and password=?#{[1]}", nativeQuery = true)
    List<Restaurant> findByEmailAndPass(String email, String password);
}
