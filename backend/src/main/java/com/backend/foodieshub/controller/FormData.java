/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub.controller;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author marshmalow
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class FormData{
    private String name;
    private MultipartFile file;
    
}
