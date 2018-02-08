package com.propertiestree.admin.exception;

public class InvalidSearchFieldException extends InvalidSearchException {

	private static final long serialVersionUID = 8841681827993737392L;
	private final String invalidField;

    public InvalidSearchFieldException(String invalidField) {
        super("Unable to search using field: " + invalidField);
        this.invalidField = invalidField;
    }

    public String getInvalidField() {
        return invalidField;
    }
}
