package com.backend.foodieshub.model.UserCommunity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="community_likes")
public class Likes {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    
    @NotNull
    @ManyToOne
    @JoinColumn(name = "post_id",referencedColumnName = "id", nullable = false)
    private CommunityPost communityPost;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id", nullable = false)
    private Users user;
}
