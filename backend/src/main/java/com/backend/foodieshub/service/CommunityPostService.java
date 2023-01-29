package com.backend.foodieshub.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.backend.foodieshub.repository.CommunityPostRepository;
import com.backend.foodieshub.model.UserCommunity.*;

@Service
public class CommunityPostService {
    @Autowired
    private CommunityPostRepository communityPostRepository;

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
}
