package com.propertiestree.common.entity.property;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="salable_apartment_Feature")
@PrimaryKeyJoinColumn(name="id")
public class SalableApartmentFeature extends ApartmentFeature {

	private static final long serialVersionUID = -6116154728143815783L;
	private WaterSourceType waterSource;
	private OverlookingType overlooking;

	public WaterSourceType getWaterSource() {
		return waterSource;
	}

	public void setWaterSource(WaterSourceType waterSource) {
		this.waterSource = waterSource;
	}

	public OverlookingType getOverlooking() {
		return overlooking;
	}

	public void setOverlooking(OverlookingType overlooking) {
		this.overlooking = overlooking;
	}

}
