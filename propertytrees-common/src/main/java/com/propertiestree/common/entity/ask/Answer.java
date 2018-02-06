package com.propertiestree.common.entity.ask;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.propertiestree.common.entity.User;

@Entity
public class Answer implements Serializable{
	
	private static final long serialVersionUID = 8512698093534146463L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private Long id;
	@Column(unique = true, nullable = false, updatable = false)
	private String uuid;
	private String content;
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "user_id")
	private User userId;
	private Date createdOn;
	private Integer likes;
	private Integer disLikes;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public User getUserId() {
		return userId;
	}
	public void setUserId(User userId) {
		this.userId = userId;
	}
	public Date getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(Date createdOn) {
		this.createdOn = createdOn;
	}
	public Integer getLikes() {
		return likes;
	}
	public void setLikes(Integer likes) {
		this.likes = likes;
	}
	public Integer getDisLikes() {
		return disLikes;
	}
	public void setDisLikes(Integer disLikes) {
		this.disLikes = disLikes;
	}

}
