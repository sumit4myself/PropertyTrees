package com.propertiestree.admin.api.model;

public class SearchCriteria {

    private String field;
    private String operator;
    private String expression;


    public SearchCriteria(String field, String operator, String expression ) {
        this.field = field;
        this.operator = operator;
        this.expression = expression;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getOperator() {
        return operator;
    }

    public void setOperator(String operator) {
        this.operator = operator;
    }

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SearchCriteria that = (SearchCriteria) o;

        if (!field.equals(that.field)) return false;
        if (!operator.equals(that.operator)) return false;
        return expression.equals(that.expression);
    }

    @Override
    public int hashCode() {
        int result = field.hashCode();
        result = 31 * result + operator.hashCode();
        result = 31 * result + expression.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "SearchCriteria{" +
                "field='" + field + '\'' +
                ", operator='" + operator + '\'' +
                ", expression='" + expression + '\'' +
                '}';
    }
}
