/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub.repository;

import com.backend.foodieshub.model.UserCommunity.Users;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author marshmalow
 */
public interface UsersRepository extends JpaRepository<Users,Integer>{
    @Modifying
    @Query("update Users set name=:#{#user.name},password=:#{#user.password},email=:#{#user.email},phone=:#{#user.phone} where id=:#{#user.id}")
    void updateUserById(@Param("user")Users user);
    
    @Modifying
    @Query("update Users set picture=?#{[0]} where id=?#{[1]}")
    void updateUserPictureById(String name,int id);
    
    @Modifying
    @Query("select u from Users u where u.email=?#{[0]} ")
    List<Users> findByEmail(String email);
    
    @Modifying
    @Query("select u from Users u where u.email=?#{[0]} AND u.password=?#{[1]}")
    List<Users> findByEmailPassword(String email,String password);
    
}
