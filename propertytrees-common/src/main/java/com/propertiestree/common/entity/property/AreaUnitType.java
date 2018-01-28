package com.propertiestree.common.entity.property;

public enum AreaUnitType {
	
	SQ_FT("Sq.Ft.");
	
	private String type;

	private AreaUnitType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
}
