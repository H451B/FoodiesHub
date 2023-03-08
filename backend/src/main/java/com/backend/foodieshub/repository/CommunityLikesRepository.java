package com.backend.foodieshub.repository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.backend.foodieshub.model.UserCommunity.CommunityLikes;

@Repository
public interface CommunityLikesRepository extends JpaRepository<CommunityLikes,Integer> {

    @Query("SELECT cl FROM CommunityLikes cl WHERE cl.communityPost.id = :postId")
    List<CommunityLikes> findByPostId(@Param("postId") Integer postId);
    // System.out.println()

    // List<Likes> findByUserId(Integer userId);
    // Optional<Likes> findByIdAndUserIdAndPostId(Integer id, Integer userId, Integer postId);
}
