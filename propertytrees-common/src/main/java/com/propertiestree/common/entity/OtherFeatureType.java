package com.propertiestree.common.entity;

public enum OtherFeatureType {

	WASTE_DISPOSAL("Waste Disposal"), RAIN_WATER_HARVESTING("Rain Water Harvesting"), BANK_ATTACHED_PROPERTY(
			"Bank Attached Property");

	private String type;

	private OtherFeatureType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
}
