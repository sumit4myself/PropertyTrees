package com.propertiestree.admin.exception;

public class ImageNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 9118292523366283476L;
	private String uuid;

	public ImageNotFoundException(String uuid) {
		super(String.format("Image not found for given uuid -%s", uuid));
		this.uuid = uuid;
	}

	public String getUuid() {
		return uuid;
	}

}
