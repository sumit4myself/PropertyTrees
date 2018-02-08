/*
 * Copyright (c) 2017. mAdme Technologies Ltd. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited Proprietary and confidential
 */

package com.propertiestree.admin.exception;

public class InvalidSearchOperatorException extends InvalidSearchException {

    private final String field;
    private final String operator;

    public InvalidSearchOperatorException(String filed,String operator) {
        super(String.format("Unable to search using operator(%s) on filed(%s)",operator,filed ));
        this.field = filed;
        this.operator=operator;
    }

    public String getField() {
        return field;
    }

    public String getOperator() {
        return operator;
    }
}
