package com.propertiestree.common.entity;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="apartment_feature")
@PrimaryKeyJoinColumn(name="id")
public class ApartmentFeature extends PropertyFeature {

	private static final long serialVersionUID = 3161326869936918756L;
	private SocietyFeatureType societyFeature;
	private PropertyFeatureType propertyFeature;
	private OtherFeatureType otherFeature;

	public SocietyFeatureType getSocietyFeature() {
		return societyFeature;
	}

	public void setSocietyFeature(SocietyFeatureType societyFeature) {
		this.societyFeature = societyFeature;
	}

	public PropertyFeatureType getPropertyFeature() {
		return propertyFeature;
	}

	public void setPropertyFeature(PropertyFeatureType propertyFeature) {
		this.propertyFeature = propertyFeature;
	}

	public OtherFeatureType getOtherFeature() {
		return otherFeature;
	}

	public void setOtherFeature(OtherFeatureType otherFeature) {
		this.otherFeature = otherFeature;
	}

}
