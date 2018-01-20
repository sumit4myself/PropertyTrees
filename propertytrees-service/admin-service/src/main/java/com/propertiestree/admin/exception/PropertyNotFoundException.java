package com.propertiestree.admin.exception;

public class PropertyNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 2643367532313715641L;

	private String uuid;

	public PropertyNotFoundException(String uuid) {
		super(String.format("Property not found for given uuid -%s", uuid));
		this.uuid = uuid;
	}

	public String getUuid() {
		return uuid;
	}

}
