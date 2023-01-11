/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.backend.foodieshub.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalTime;
import java.util.Date;
import org.apache.tomcat.jni.Time;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author marshmalow
 */
public class FileUploadHandler {
    
    private String basePath = "";
    private final String uploadPath = "src/main/resources/uploads/";
    private final String resourcePath = "uploads/";
    
    FileUploadHandler() throws IOException{
        this.basePath = new FileSystemResource("").getURI().resolve(uploadPath).getRawPath();
        this.basePath = this.basePath.substring(1);

    }
    
    
    public String uploadFile(MultipartFile file,String name) throws IOException{
        String originalName = file.getOriginalFilename();
        int time = LocalTime.now().getNano();
        String timeString = String.valueOf(time);
        String fileName = name.concat("_").concat(timeString).concat("_").concat(originalName);
        byte[] fileSource = file.getBytes();
        Path path = Paths.get(this.basePath.concat(fileName));
        Path classPath = Paths.get((new ClassPathResource("").getURI().getRawPath()).substring(1).concat(this.resourcePath).concat(fileName));
        if(!Files.exists(path) || !Files.exists(classPath)){
            Files.write(path,fileSource);
            Files.write(classPath, fileSource);
            System.out.println(path.toString());
            System.out.println(classPath.toString());
            return fileName;
        }else{
            return fileName;
        }
    }
    
    
}
