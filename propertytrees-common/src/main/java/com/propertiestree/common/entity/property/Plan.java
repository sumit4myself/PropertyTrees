package com.propertiestree.common.entity.property;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.propertiestree.common.entity.Photo;

@Entity
public class Plan implements Serializable{

	private static final long serialVersionUID = 6717330594854083814L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	private String type;
	private String area;
	private long basePrice;
	
	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "floor_plan_id")
	private Photo floorPlan;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public long getBasePrice() {
		return basePrice;
	}

	public void setBasePrice(long basePrice) {
		this.basePrice = basePrice;
	}

	public Photo getFloorPlan() {
		return floorPlan;
	}

	public void setFloorPlan(Photo floorPlan) {
		this.floorPlan = floorPlan;
	}

}
