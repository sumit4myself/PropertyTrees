package com.propertiestree.common.entity;

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
