package com.propertiestree.common.entity;

public enum SocietyFeatureType {

	SWIMMING_POOL("Swimming Pool"), FITNESS_CENTRE("Fitness Centre / GYM"), CLUB_HOUSE(
			"Club house / Community Center"), SECURITY_PERSONNEL("Security Personnel"), WATER_SOFTENING_PLANT(
					"Water softening plant"), SHOPPING_CENTRE("Shopping Centre");

	private String type;

	private SocietyFeatureType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}

}
