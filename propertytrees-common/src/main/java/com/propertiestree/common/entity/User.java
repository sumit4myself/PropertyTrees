package com.propertiestree.common.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;

@Entity
@Table(name = "user_account")
@Inheritance(strategy = InheritanceType.JOINED)
public class User implements Serializable {

	private static final long serialVersionUID = -468285446816535561L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Column(unique = true, nullable = false, updatable = false)
	private String uuid;
	private String name;
	private String emailId;
	private String password;
	private String city;
	private int mobile;
	private int mobile2;
	private int mobile3;
	private int landlinePhone;
	private int landlinePhone2;
	@Enumerated(EnumType.STRING)
	private UserType type;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getMobile() {
		return mobile;
	}

	public void setMobile(int mobile) {
		this.mobile = mobile;
	}

	public int getMobile2() {
		return mobile2;
	}

	public void setMobile2(int mobile2) {
		this.mobile2 = mobile2;
	}

	public int getMobile3() {
		return mobile3;
	}

	public void setMobile3(int mobile3) {
		this.mobile3 = mobile3;
	}

	public int getLandlinePhone() {
		return landlinePhone;
	}

	public void setLandlinePhone(int landlinePhone) {
		this.landlinePhone = landlinePhone;
	}

	public int getLandlinePhone2() {
		return landlinePhone2;
	}

	public void setLandlinePhone2(int landlinePhone2) {
		this.landlinePhone2 = landlinePhone2;
	}

	public UserType getType() {
		return type;
	}

	public void setType(UserType type) {
		this.type = type;
	}

}
