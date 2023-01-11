package com.backend.foodieshub.service;

import com.backend.foodieshub.repository.RestaurantRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.foodieshub.model.FoodRestaurant.Restaurant;

import java.util.List;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    // GET METHOD------------------------------
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantEP(String email, String password) {
        List<Restaurant> restaurateurList = restaurantRepository.findByEmailAndPass(email, password);
        System.out.println(restaurateurList);
        Restaurant nouser = new Restaurant();
        if (restaurateurList.size() > 0) {
            return restaurateurList.get(0);
        } else {
            return nouser;
        }
    }

    public Restaurant getRestaurantById(int id) {
        return restaurantRepository.findById(id).orElse(null);
    }

    // POST METHOD------------------------------------------
    public void saveRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }

    // DELETE METHOD---------------------
    public void deleteRestaurant(int id) {
        restaurantRepository.deleteById(id);
    }

    // UPDATE METHOD----------------
    public void updateRestaurant(Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }
}
