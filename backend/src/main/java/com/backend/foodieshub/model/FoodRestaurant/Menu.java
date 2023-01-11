package com.backend.foodieshub.model.FoodRestaurant;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "menu")
public class Menu {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;

    private double price;
    private String description;
    private String photo;

    // @OneToOne(cascade = CascadeType.ALL)
    @ManyToOne
    @JoinColumn(name = "type_id")
    private FoodType foodType;

    // @OneToOne(cascade = CascadeType.ALL)
    @ManyToOne
    @JoinColumn(name = "cat_id")
    private FoodCategory foodCategory;
}
