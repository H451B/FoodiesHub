package com.backend.foodieshub.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.foodieshub.model.FoodRestaurant.FoodType;

public interface FoodTypeRepository extends JpaRepository<FoodType,Integer>{
    
}
