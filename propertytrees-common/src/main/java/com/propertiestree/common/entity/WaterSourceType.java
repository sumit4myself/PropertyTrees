package com.propertiestree.common.entity;

public enum WaterSourceType {

	MUNICIPAL_CORPORATION("Municipal Corporation"), BOREWELL("Borewell/Tank");

	private String type;

	private WaterSourceType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
}
