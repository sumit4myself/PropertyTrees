package com.propertiestree.admin.exception;

public class InvalidSearchQueryException extends InvalidSearchException {

	private static final long serialVersionUID = 1052870007470765071L;
	private final String invalidQuery;

	public InvalidSearchQueryException(String invalidQuery) {
		super("Unable to search using query: " + invalidQuery);
		this.invalidQuery = invalidQuery;
	}

	public String getInvalidQuery() {
		return invalidQuery;
	}
}
