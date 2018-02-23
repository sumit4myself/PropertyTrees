package com.propertiestree.common.model;

public class Cities {

	private String uuid;
	private String cityName;
	private Long count;

	public Cities() {
	}

	public Cities(String uuid, String cityName, Long count) {
		super();
		this.uuid = uuid;
		this.cityName = cityName;
		this.count = count;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getcityName() {
		return cityName;
	}

	public void setcityName(String cityName) {
		this.cityName = cityName;
	}

	public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
	}
}
