package com.propertiestree.common.entity;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "property_feature")
@Inheritance(strategy=InheritanceType.JOINED)
public class PropertyFeature implements Serializable {

	private static final long serialVersionUID = 8990478229114919319L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	private String powerBackup;
	private String facig;
	private int widthOfFacingRoad;
	@Enumerated(EnumType.STRING)
	private AreaUnitType widthOfFacingUnit;
	private String typeOfFlooring;
	private boolean gatedSociety;
	private boolean cornerProperty;
	private String Description;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "amenities_id")
	private Set<Amenities> amenities;
	@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
	@JoinColumn(name = "prop_feature_photo_id")
	private Set<Photo> photos;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPowerBackup() {
		return powerBackup;
	}

	public void setPowerBackup(String powerBackup) {
		this.powerBackup = powerBackup;
	}

	public String getFacig() {
		return facig;
	}

	public void setFacig(String facig) {
		this.facig = facig;
	}

	public int getWidthOfFacingRoad() {
		return widthOfFacingRoad;
	}

	public void setWidthOfFacingRoad(int widthOfFacingRoad) {
		this.widthOfFacingRoad = widthOfFacingRoad;
	}

	public AreaUnitType getWidthOfFacingUnit() {
		return widthOfFacingUnit;
	}

	public void setWidthOfFacingUnit(AreaUnitType widthOfFacingUnit) {
		this.widthOfFacingUnit = widthOfFacingUnit;
	}

	public String getTypeOfFlooring() {
		return typeOfFlooring;
	}

	public void setTypeOfFlooring(String typeOfFlooring) {
		this.typeOfFlooring = typeOfFlooring;
	}

	public boolean isGatedSociety() {
		return gatedSociety;
	}

	public void setGatedSociety(boolean gatedSociety) {
		this.gatedSociety = gatedSociety;
	}

	public boolean isCornerProperty() {
		return cornerProperty;
	}

	public void setCornerProperty(boolean cornerProperty) {
		this.cornerProperty = cornerProperty;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}


	public Set<Amenities> getAmenities() {
		return amenities;
	}

	public void setAmenities(Set<Amenities> amenities) {
		this.amenities = amenities;
	}

	public Set<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(Set<Photo> photos) {
		this.photos = photos;
	}

}
