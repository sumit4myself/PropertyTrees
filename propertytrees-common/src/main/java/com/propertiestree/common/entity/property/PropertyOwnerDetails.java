package com.propertiestree.common.entity.property;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.propertiestree.common.entity.City;

@Entity
public class PropertyOwnerDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	private long id;
	private City city;
	private int mobile;
	private int mobile2;
	private int mobile3;
	private int landlinePhone1;
	private int landlinePhone2;
	
	public City getCity() {
		return city;
	}
	public void setCity(City city) {
		this.city = city;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public int getMobile2() {
		return mobile2;
	}
	public void setMobile2(int mobile2) {
		this.mobile2 = mobile2;
	}
	public int getMobile3() {
		return mobile3;
	}
	public void setMobile3(int mobile3) {
		this.mobile3 = mobile3;
	}
	public int getLandlinePhone1() {
		return landlinePhone1;
	}
	public void setLandlinePhone1(int landlinePhone1) {
		this.landlinePhone1 = landlinePhone1;
	}
	public int getLandlinePhone2() {
		return landlinePhone2;
	}
	public void setLandlinePhone2(int landlinePhone2) {
		this.landlinePhone2 = landlinePhone2;
	}
}
