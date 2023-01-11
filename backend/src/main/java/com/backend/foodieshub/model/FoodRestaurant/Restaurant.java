package com.backend.foodieshub.model.FoodRestaurant;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "restaurant")
public class Restaurant implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String description;
    private String phone;
    private String email;
    private String password;
    private String address;
    private String latLongitude;
    private String picture;

<<<<<<< HEAD
    @ManyToOne
    @JoinColumn(name = "rating_id")
=======
    @OneToOne
    @JoinColumn(name = "restaurant_id")
>>>>>>> a0137ad78291b8969e529cc9a68a9a5a9292f4ee
    private RestaurantRating restaurantRatingId;

    // //CONSTRUCTOR
    // public Restaurant(){ }

    // public Restaurant(int id, String name, String description,String phone,String
    // email, String address, String latLongitude){
    // super();
    // this.id = id;
    // this.name = name;
    // this.description = description;
    // this.phone = phone;
    // this.email = email;
    // this.address = address;
    // this.latLongitude = latLongitude;
    // }

    // // GETTER & SETTER
    // public int getId() {return id;}
    // public void setId(int id) {this.id = id;}

    // public String getName() {return name;}
    // public void setName(String name) {this.name = name;}

    // public String getDescription() {return description;}
    // public void setDescription(String description) {this.description =
    // description;}

    // public String getPhone() {return phone;}
    // public void setPhone(String phone) {this.phone = phone;}

    // public String getEmail() {return email;}
    // public void setEmail(String email) {this.email = email;}

    // public String getAddress() {return address;}
    // public void setAddress(String address) {this.address = address;}

    // public String getLatLongitude() {return latLongitude;}
    // public void setLatLongitude(String latLongitude) {this.latLongitude =
    // latLongitude;}
}
