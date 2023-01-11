/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub.controller;

import com.backend.foodieshub.model.AxiosResponse.Response;
import com.backend.foodieshub.model.UserCommunity.Users;
import com.backend.foodieshub.service.UsersService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author marshmalow
 */

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private UsersService userService;
    
    @PostMapping("/signup")
    public Response saveUser(@RequestBody Users user){
        boolean status = userService.saveUser(user);
        Response res = new Response();
        if(status)res.setMessage("Registration Successful!");
        else res.setMessage("User Already Exists or Try Again Later!");
        return res;
    }
    
    @PostMapping("/signin")
    public ResponseEntity<Object> getUser(@RequestBody Users user){
        String email = user.getEmail();
        String password = user.getPassword();
        Users login = userService.getUser(email, password);
        Response res = new Response();
        int __id = login.getId();
        if(__id>0 ){
        return new ResponseEntity(login,HttpStatus.OK);
        }
            res.setMessage("User Not Exists or Try again later!");
            return new ResponseEntity(res,HttpStatus.OK);
    } 
    
    @GetMapping("/getusers")
    public ResponseEntity<Object> getUsers(){
        List<Users> userList = userService.getUserList();
        return new ResponseEntity(userList,HttpStatus.OK);
    }
}
