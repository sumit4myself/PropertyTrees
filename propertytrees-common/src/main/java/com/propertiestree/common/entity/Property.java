package com.propertiestree.common.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity
public class Property implements Serializable {

	private static final long serialVersionUID = 3560556939132795407L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Column(unique = true, nullable = false, updatable = false)
	private String uuid;
	@Enumerated(EnumType.STRING)
	private PropertyType type;
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "property_details_id")
	private PropertyDetails details;
	@OneToOne(cascade = {CascadeType.ALL})
	@JoinColumn(name = "property_features_id")
	private Feature features;
	@OneToMany(mappedBy="property")
	private Set<Photo> photos;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public PropertyType getType() {
		return type;
	}

	public void setType(PropertyType type) {
		this.type = type;
	}

	public PropertyDetails getDetails() {
		return details;
	}

	public void setDetails(PropertyDetails details) {
		this.details = details;
	}

	public Feature getFeatures() {
		return features;
	}

	public void setFeatures(Feature features) {
		this.features = features;
	}

	public Set<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(Set<Photo> photos) {
		this.photos = photos;
	}

}
