package com.propertiestree.admin.exception;

public class UserNotFoundException  extends RuntimeException {

	private static final long serialVersionUID = -8120401137224523886L;
	
	private String uuid;

	public UserNotFoundException(String uuid) {
		super(String.format("User not found for given uuid -%s", uuid));
		this.uuid = uuid;
	}

	public String getUuid() {
		return uuid;
	}

}
