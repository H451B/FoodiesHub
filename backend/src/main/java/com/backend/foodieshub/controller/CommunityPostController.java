package com.backend.foodieshub.controller;

import java.net.http.HttpResponse;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.foodieshub.model.UserCommunity.CommunityPost;
import com.backend.foodieshub.service.CommunityPostService;

@RestController
@RequestMapping("/feed")
public class CommunityPostController {
    @Autowired
    private CommunityPostService communityPostService;

    @GetMapping
    ResponseEntity<List<CommunityPost>> getAllPost(){
        List<CommunityPost> posts= communityPostService.getAllPost();
        return new ResponseEntity<>(posts,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<CommunityPost> getPostById(@PathVariable int id){
        CommunityPost post = communityPostService.getPostById(id);
        if(post==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(post,HttpStatus.OK);
    }

    @PostMapping
    ResponseEntity<CommunityPost> createPost(@RequestBody CommunityPost compost){
        CommunityPost createdPost = communityPostService.createPost(compost);
        return new ResponseEntity<>(createdPost, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    ResponseEntity<CommunityPost> updatePost(@PathVariable int id, @RequestBody CommunityPost compost){
        CommunityPost updatepost = communityPostService.updatePost(id,compost);
        if(updatepost==null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);    
        }
        return new ResponseEntity<>(updatepost, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> updatePost(@PathVariable int id){
        boolean deletepost = communityPostService.deletePost(id);
        if(!deletepost){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);    
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
