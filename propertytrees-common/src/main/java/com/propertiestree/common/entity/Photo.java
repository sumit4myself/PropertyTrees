package com.propertiestree.common.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Photo implements Serializable {

	private static final long serialVersionUID = -8740831958514756900L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	@Column(name="photo_id")
	private int id;
	@Column(unique = true, nullable = false, updatable = false)
	private String uuid;
	private String tag;
	private String url;
	
	@ManyToOne
	@JoinColumn(name="id", nullable=false)
	private Property property;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}
}
