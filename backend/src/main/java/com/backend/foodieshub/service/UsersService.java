/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub.service;

import com.backend.foodieshub.model.UserCommunity.Users;
import com.backend.foodieshub.repository.UsersRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author marshmalow
 */
@Service
@Transactional
public class UsersService{
    @Autowired
    private UsersRepository usersRepo;
    
    public boolean saveUser(Users user){
        System.out.println(usersRepo.findByEmail(user.getEmail()));
        int found = usersRepo.findByEmail(user.getEmail()).size();
        System.out.println(found);
        if(found>0){
            return false;
        }
        else{
            usersRepo.save(user);
            return true;
        }
    }
    
    public Users getUser(String email,String password){
        List<Users> usersList = usersRepo.findByEmailPassword(email, password);
//        System.out.println(usersList);
        Users nouser = new Users();
        if(usersList.size()>0)
        return usersList.get(0);
        else return nouser;
    }
    
    public void updateUser(Users user){
        usersRepo.updateUserById(user);
    }
    
    public void updatePicture(String name,int id){
        usersRepo.updateUserPictureById(name, id);
    }
    
    public List<Users> getUserList(){
        return usersRepo.findAll();
    }
    
}
