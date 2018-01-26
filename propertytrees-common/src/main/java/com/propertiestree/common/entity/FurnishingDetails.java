package com.propertiestree.common.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class FurnishingDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	private int wardrobe;
	private int beds;
	private int fans;
	private int lights;
	private boolean modularKitchen;
	private boolean fridge;
	private boolean ac;
	private boolean geyser;
	private boolean tV;
	private boolean stove;
	private boolean washingMachine;
	private boolean waterPurifier;
	private boolean microwave;
	private boolean curtains;
	private boolean chimney;
	private boolean exhaustFan;
	private boolean sofa;
	private boolean dinningTable;
	private String others;

	public int getWardrobe() {
		return wardrobe;
	}

	public void setWardrobe(int wardrobe) {
		this.wardrobe = wardrobe;
	}

	public int getBeds() {
		return beds;
	}

	public void setBeds(int beds) {
		this.beds = beds;
	}

	public int getFans() {
		return fans;
	}

	public void setFans(int fans) {
		this.fans = fans;
	}

	public int getLights() {
		return lights;
	}

	public void setLights(int lights) {
		this.lights = lights;
	}

	public boolean isModularKitchen() {
		return modularKitchen;
	}

	public void setModularKitchen(boolean modularKitchen) {
		this.modularKitchen = modularKitchen;
	}

	public boolean isFridge() {
		return fridge;
	}

	public void setFridge(boolean fridge) {
		this.fridge = fridge;
	}

	public boolean isAc() {
		return ac;
	}

	public void setAc(boolean ac) {
		this.ac = ac;
	}

	public boolean isGeyser() {
		return geyser;
	}

	public void setGeyser(boolean geyser) {
		this.geyser = geyser;
	}

	public boolean istV() {
		return tV;
	}

	public void settV(boolean tV) {
		this.tV = tV;
	}

	public boolean isStove() {
		return stove;
	}

	public void setStove(boolean stove) {
		this.stove = stove;
	}

	public boolean isWashingMachine() {
		return washingMachine;
	}

	public void setWashingMachine(boolean washingMachine) {
		this.washingMachine = washingMachine;
	}

	public boolean isWaterPurifier() {
		return waterPurifier;
	}

	public void setWaterPurifier(boolean waterPurifier) {
		this.waterPurifier = waterPurifier;
	}

	public boolean isMicrowave() {
		return microwave;
	}

	public void setMicrowave(boolean microwave) {
		this.microwave = microwave;
	}

	public boolean isCurtains() {
		return curtains;
	}

	public void setCurtains(boolean curtains) {
		this.curtains = curtains;
	}

	public boolean isChimney() {
		return chimney;
	}

	public void setChimney(boolean chimney) {
		this.chimney = chimney;
	}

	public boolean isExhaustFan() {
		return exhaustFan;
	}

	public void setExhaustFan(boolean exhaustFan) {
		this.exhaustFan = exhaustFan;
	}

	public boolean isSofa() {
		return sofa;
	}

	public void setSofa(boolean sofa) {
		this.sofa = sofa;
	}

	public boolean isDinningTable() {
		return dinningTable;
	}

	public void setDinningTable(boolean dinningTable) {
		this.dinningTable = dinningTable;
	}

	public String getOthers() {
		return others;
	}

	public void setOthers(String others) {
		this.others = others;
	}

}
