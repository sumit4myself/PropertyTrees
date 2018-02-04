package com.propertiestree.common.model;

import java.util.Set;

import com.propertiestree.common.entity.Photo;
import com.propertiestree.common.entity.property.Availability;
import com.propertiestree.common.entity.property.PropertyType;

public class PropertyResult {
	
	private String propUUID;
	private String projectName;
	private String cityName;
	private PropertyType propertyType;
	private Availability availability;
	private Integer bookingAmount;
	private Set<Photo> photos;
	
	public String getPropUUID() {
		return propUUID;
	}
	public void setPropUUID(String propUUID) {
		this.propUUID = propUUID;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getCityName() {
		return cityName;
	}
	public void setCityName(String cityName) {
		this.cityName = cityName;
	}
	public PropertyType getPropertyType() {
		return propertyType;
	}
	public void setPropertyType(PropertyType propertyType) {
		this.propertyType = propertyType;
	}
	public Availability getAvailability() {
		return availability;
	}
	public void setAvailability(Availability availability) {
		this.availability = availability;
	}
	public Integer getBookingAmount() {
		return bookingAmount;
	}
	public void setBookingAmount(Integer bookingAmount) {
		this.bookingAmount = bookingAmount;
	}
	public Set<Photo> getPhotos() {
		return photos;
	}
	public void setPhotos(Set<Photo> photos) {
		this.photos = photos;
	}

}
