package com.propertiestree.common.entity;

public enum OverlookingType {

	PArk("Park/Garden"), MAIN_ROAD("Main Road"), CLUB("Club"), POOL("Pool"), OTHERS("Others");

	private String type;

	private OverlookingType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
}
