package com.propertiestree.admin.exception;

public class ProjectNotFoundException  extends RuntimeException {

	private static final long serialVersionUID = 6807446112466560063L;
	
	private String uuid;

	public ProjectNotFoundException(String uuid) {
		super(String.format("Project not found for given uuid -%s", uuid));
		this.uuid = uuid;
	}

	public String getUuid() {
		return uuid;
	}

}
