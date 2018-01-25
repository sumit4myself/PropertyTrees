package com.propertiestree.common.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PropertyDetails implements Serializable {

	private static final long serialVersionUID = -8276470892004078810L;
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	@Enumerated(EnumType.STRING)
	private AreaUnitType unitType;
	private int superBuiltUpArea;
	private int builtUpArea;
	private int bedrooms;
	private int bathrooms;
	private int balconies;
	private boolean poojaRoom;
	private boolean studyRoom;
	private boolean servantRoom;
	private boolean others;
	private int propertyOnFloor;
	private int totalFloors;
	@Enumerated(EnumType.STRING)
	private ParkingType parkingType;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public AreaUnitType getUnitType() {
		return unitType;
	}

	public void setUnitType(AreaUnitType unitType) {
		this.unitType = unitType;
	}

	public int getSuperBuiltUpArea() {
		return superBuiltUpArea;
	}

	public void setSuperBuiltUpArea(int superBuiltUpArea) {
		this.superBuiltUpArea = superBuiltUpArea;
	}

	public int getBuiltUpArea() {
		return builtUpArea;
	}

	public void setBuiltUpArea(int builtUpArea) {
		this.builtUpArea = builtUpArea;
	}

	public int getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(int bedrooms) {
		this.bedrooms = bedrooms;
	}

	public int getBathrooms() {
		return bathrooms;
	}

	public void setBathrooms(int bathrooms) {
		this.bathrooms = bathrooms;
	}

	public int getBalconies() {
		return balconies;
	}

	public void setBalconies(int balconies) {
		this.balconies = balconies;
	}

	public boolean isPoojaRoom() {
		return poojaRoom;
	}

	public void setPoojaRoom(boolean poojaRoom) {
		this.poojaRoom = poojaRoom;
	}

	public boolean isStudyRoom() {
		return studyRoom;
	}

	public void setStudyRoom(boolean studyRoom) {
		this.studyRoom = studyRoom;
	}

	public boolean isServantRoom() {
		return servantRoom;
	}

	public void setServantRoom(boolean servantRoom) {
		this.servantRoom = servantRoom;
	}

	public boolean isOthers() {
		return others;
	}

	public void setOthers(boolean others) {
		this.others = others;
	}

	public int getPropertyOnFloor() {
		return propertyOnFloor;
	}

	public void setPropertyOnFloor(int propertyOnFloor) {
		this.propertyOnFloor = propertyOnFloor;
	}

	public int getTotalFloors() {
		return totalFloors;
	}

	public void setTotalFloors(int totalFloors) {
		this.totalFloors = totalFloors;
	}

	public ParkingType getParkingType() {
		return parkingType;
	}

	public void setParkingType(ParkingType parkingType) {
		this.parkingType = parkingType;
	}

}
