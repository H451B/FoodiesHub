/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub.controller;

import com.backend.foodieshub.model.UserCommunity.Users;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author marshmalow
 */
@RestController
@CrossOrigin
public class FileController  {
    
    private String basePath = "";
    private final String uploadPath = "src/main/resources/uploads/";
    private final String resourcePath = "uploads/";
    
    FileController() throws IOException{
        this.basePath = new FileSystemResource("").getURI().resolve(uploadPath).getRawPath();
        this.basePath = this.basePath.substring(1);
        Path path = Paths.get(this.basePath);
        Path classPath = Paths.get((new ClassPathResource("").getURI().getRawPath()).substring(1).concat(this.resourcePath));
        if(!Files.exists(path)){
            Files.createDirectories(path);
            Files.createDirectories(classPath);
            System.out.println("Directory Created: "+path);
            System.out.println("Directory Created: "+classPath);
        }else{
            System.out.println("Directory Exist: "+this.basePath);
            
        }
        
    }
    
    @GetMapping("fileupload/{name}")
    public Resource getFile(@PathVariable String name){
//        System.out.println(basePath);        
        Resource resource = new ClassPathResource(this.resourcePath.concat(name));
        return resource;
    }
    
    
    
    @GetMapping("testdirectory")
    public String fileTest() throws IOException{
        String fileSrc = new ClassPathResource("uploads/").getURI().normalize().toString();
        return fileSrc;
    }
    
    @PostMapping("addfile")
    public ResponseEntity<Object> addUser(@ModelAttribute FormData formData,@RequestParam("picture") MultipartFile file ) throws IOException{
        FileUploadHandler fuh = new FileUploadHandler();
        String Filename = fuh.uploadFile(file,formData.getName());
        
        formData.setName(Filename);
        
        return new ResponseEntity(formData,HttpStatus.OK);
    }
}
