package com.backend.foodieshub.controller;

import com.backend.foodieshub.model.FoodRestaurant.Restaurant;
import com.backend.foodieshub.service.RestaurantService;

import com.backend.foodieshub.model.AxiosResponse.Response;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import java.util.List;

@RestController
// @CrossOrigin(origins = "localhost:5001")
@CrossOrigin
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping("/restaurant")
    public void addRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.saveRestaurant(restaurant);
    }

    @PostMapping("/rlogin")
    public ResponseEntity<Object> getRestaurantEP(@RequestBody Restaurant restaurant) {
        String email = restaurant.getEmail();
        String password = restaurant.getPassword();
        Restaurant rlogin = restaurantService.getRestaurantEP(email, password);
        Response res = new Response();
        int __id = rlogin.getId();
        if (__id > 0) {
            return new ResponseEntity(rlogin, HttpStatus.OK);
        }
        res.setMessage("No Restaurant Found!");
        return new ResponseEntity(res, HttpStatus.OK);
    }

    @RequestMapping("/restaurants")
    public List<Restaurant> findAllRestaurants() {
        return restaurantService.getAllRestaurant();
    }

    @RequestMapping("restaurants/{id}")
    public Restaurant findRestaurantById(@PathVariable int id) {
        return restaurantService.getRestaurantById(id);
    }

    @PutMapping("/update")
    public void updateRestaurant(@RequestBody Restaurant restaurant) {
        restaurantService.updateRestaurant(restaurant);
    }

    @DeleteMapping("delete/{id}")
    public void deleteRestaurant(@PathVariable int id) {
        restaurantService.deleteRestaurant(id);
    }

}
