package com.backend.foodieshub.model.FoodRestaurant;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
 @Entity
 @Table(name="food")
public class Food implements Serializable {
     @Id
     @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private int restaurantId;
    private int menuId;
}
