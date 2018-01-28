package com.propertiestree.common.entity;

import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;

@Entity
@PrimaryKeyJoinColumn(referencedColumnName = "id")
public class Agent extends User {

	private static final long serialVersionUID = -178674728060008802L;
	private String companyName;
	private String companyUrl;
	private String companyAddress;
	private String addressLine2;
	private String companyProfile;

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getCompanyUrl() {
		return companyUrl;
	}

	public void setCompanyUrl(String companyUrl) {
		this.companyUrl = companyUrl;
	}

	public String getCompanyAddress() {
		return companyAddress;
	}

	public void setCompanyAddress(String companyAddress) {
		this.companyAddress = companyAddress;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getCompanyProfile() {
		return companyProfile;
	}

	public void setCompanyProfile(String companyProfile) {
		this.companyProfile = companyProfile;
	}

}
