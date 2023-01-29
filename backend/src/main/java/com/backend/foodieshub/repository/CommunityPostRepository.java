package com.backend.foodieshub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.foodieshub.model.UserCommunity.CommunityPost;

// @Repository
public interface CommunityPostRepository extends JpaRepository<CommunityPost,Integer> {
    
}
