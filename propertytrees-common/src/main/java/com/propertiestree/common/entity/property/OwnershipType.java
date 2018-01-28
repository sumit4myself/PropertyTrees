package com.propertiestree.common.entity.property;

public enum OwnershipType {

	FREEHOLD("Freehold"), LEASEHOLD("Leasehold"), CO_OPRATIVE_SOCIETY("Co-oprative Ssociety"), POWER_OF_ATTORNEY(
			"Power of attorney");

	private String type;

	private OwnershipType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}

}
