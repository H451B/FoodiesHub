package com.backend.foodieshub.repository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.foodieshub.model.UserCommunity.CommunityComments;

@Repository
public interface CommunityCommentsRepository extends JpaRepository<CommunityComments,Integer> {
    // List<Comments> findByPostId(Integer postId); 
    // List<Comments> findByUserId(Integer userId);
    // Optional<Comments> findByIdAndUserIdAndPostId(Integer id, Integer userId, Integer postId);
}
