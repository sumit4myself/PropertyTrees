package com.propertiestree.common.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Amenities implements Serializable {

	private static final long serialVersionUID = 4950888826586299717L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Enumerated(EnumType.STRING)
	private AmenitiesType amenitiesType;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public AmenitiesType getAmenitiesType() {
		return amenitiesType;
	}

	public void setAmenitiesType(AmenitiesType amenitiesType) {
		this.amenitiesType = amenitiesType;
	}

}
