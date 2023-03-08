package com.backend.foodieshub.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.foodieshub.repository.*;
import com.backend.foodieshub.model.UserCommunity.*;

@Service
public class CommunityPostService {
    @Autowired
    private CommunityPostRepository communityPostRepository;

    @Autowired
    private CommunityLikesRepository communityLikestRepository;

    // @Autowired
    // private CommunityCommentsRepository communityCommentstRepository;

    //POST GET, ADD, UPDATE, DELETE
    public List<CommunityPost> getAllPost(){
        return communityPostRepository.findAll();
    }

    public CommunityPost getPostById(int id){
        return communityPostRepository.findById(id).orElse(null);
    }

    public CommunityPost createPost(CommunityPost communityPost){
        return communityPostRepository.save(communityPost);
    }

    public CommunityPost updatePost(int id,CommunityPost communityPost){
        CommunityPost existing = communityPostRepository.findById(id).orElse(null);
        if(existing==null){return null;}
        existing.setPostText(communityPost.getPostText());
        return communityPostRepository.save(existing);
    }

    public boolean deletePost(int id){
        CommunityPost post = communityPostRepository.findById(id).orElse(null);
        if(post==null){return false;}
        communityPostRepository.delete(post);
        return true;
    }

    //LIKES GET(by post ID), ADD(userid,postid), DELETE(likesID)
    public List<CommunityLikes> getLikesByPostId(Integer id){
        return communityLikestRepository.findByPostId(id);
    }

    //Comments GET, ADD, DELETE

}
