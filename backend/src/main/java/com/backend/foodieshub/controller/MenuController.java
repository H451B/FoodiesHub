package com.backend.foodieshub.controller;

import com.backend.foodieshub.model.FoodRestaurant.FoodCategory;
import com.backend.foodieshub.model.FoodRestaurant.FoodType;
import com.backend.foodieshub.model.FoodRestaurant.Menu;
import com.backend.foodieshub.service.MenuService;

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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
// @CrossOrigin(origins = "localhost:5001")
@CrossOrigin
public class MenuController {
    @Autowired
    private MenuService menuService;

//    Menu Controllers
    @PostMapping("/menu")
    public ResponseEntity<Object> addMenu(@RequestBody Menu menu) {
        menuService.saveMenu(menu);
        return new ResponseEntity("Menu Added\n"+menu,HttpStatus.OK);
    }

    @RequestMapping("/menu")
    public List<Menu> findAllMenu() {
        return menuService.getAllMenu();
    }

    @PutMapping("/menuupdate")
    public void updateMenu(@RequestBody Menu menu) {
        menuService.updateMenu(menu);
    }

    @DeleteMapping("menudelete/{id}")
    public void deleteMenu(@PathVariable int id) {
        menuService.deleteMenu(id);
    }
    
    
//    Food Category & Food Type Controlers
    
    @PostMapping("foodcategory")
    public ResponseEntity<Object> sendFoodCategory(@RequestBody FoodCategory foodCategory){
        menuService.saveFoodCategory(foodCategory);
        return new ResponseEntity("Food Category updated\n"+foodCategory,HttpStatus.OK);
    }  
    @PostMapping("foodtype")
    public ResponseEntity<Object> sendFoodType(@RequestBody FoodType foodType){
        menuService.saveFoodType(foodType);
        return new ResponseEntity("Food Category updated\n"+foodType,HttpStatus.OK);
    }  
    
    @GetMapping("foodtype")
    public List<FoodType> receiveFoodType(){
        return menuService.getFoodType();
    }
    @GetMapping("foodcategory")
    public List<FoodCategory> receiveFoodCategory(){
        return menuService.getFoodCategory();
    }
    
    
}
