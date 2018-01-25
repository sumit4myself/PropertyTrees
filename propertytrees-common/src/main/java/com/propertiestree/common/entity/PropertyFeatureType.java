package com.propertiestree.common.entity;

public enum PropertyFeatureType {

	CENTRALLY_AIR_CONDITIONED("Centrally Air Conditioned"), PRIVATE_GARDEN("Private Garden"), TERRACE(
			"Terrace"), PIPED_GAS("Piped-gas"), INTERNET(
					"Internet"), WI_FI_CONNECTIVITY("wi-fi connectivity"), WATER_PURIFIER("Water purifier");

	private String type;

	private PropertyFeatureType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}

}
