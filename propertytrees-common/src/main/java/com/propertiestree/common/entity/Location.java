package com.propertiestree.common.entity;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import com.propertiestree.common.entity.City;

@Embeddable
public class Location {

	@OneToOne
	@JoinColumn(name = "citi_id")
	private City city;
	@OneToOne
	@JoinColumn(name = "project_id")
	private Project project;
	private String locality;
	private String address;

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public String getLocality() {
		return locality;
	}

	public void setLocality(String locality) {
		this.locality = locality;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

}
