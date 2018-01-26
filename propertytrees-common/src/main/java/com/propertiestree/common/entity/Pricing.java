package com.propertiestree.common.entity;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pricing {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private long id;
	private int bookingAmount;
	private boolean priceNegotiable;
	@Enumerated(EnumType.STRING)
	private Availability availability;
	@Enumerated(EnumType.STRING)
	private TransactionType transactionType;
	@Enumerated(EnumType.STRING)
	private OwnershipType ownershipType;
	
	public int getBookingAmount() {
		return bookingAmount;
	}
	public void setBookingAmount(int bookingAmount) {
		this.bookingAmount = bookingAmount;
	}
	public boolean isPriceNegotiable() {
		return priceNegotiable;
	}
	public void setPriceNegotiable(boolean priceNegotiable) {
		this.priceNegotiable = priceNegotiable;
	}
	public Availability getAvailability() {
		return availability;
	}
	public void setAvailability(Availability availability) {
		this.availability = availability;
	}
	public TransactionType getTransactionType() {
		return transactionType;
	}
	public void setTransactionType(TransactionType transactionType) {
		this.transactionType = transactionType;
	}
	public OwnershipType getOwnershipType() {
		return ownershipType;
	}
	public void setOwnershipType(OwnershipType ownershipType) {
		this.ownershipType = ownershipType;
	}
}
