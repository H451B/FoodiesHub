/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub;

import com.backend.foodieshub.controller.UserController;
import com.backend.foodieshub.model.UserCommunity.Users;
import com.backend.foodieshub.service.UsersService;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.ws.rs.core.MediaType;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 *
 * @author marshmalow
 */
@RunWith(SpringRunner.class)
@WebMvcTest(UserController.class)
public class ApiTests {
    @Autowired
    private MockMvc mvc;
    
    @Autowired
    private ObjectMapper objectMapper;
    
    @MockBean
    private UsersService userService;
    
    @Test
    void getUsers_withStatusOK() throws Exception{
        System.out.println("test");
    }
    
}
