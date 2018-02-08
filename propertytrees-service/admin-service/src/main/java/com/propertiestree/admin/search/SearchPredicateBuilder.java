package com.propertiestree.admin.search;

import java.util.List;

import com.propertiestree.admin.api.model.SearchCriteria;
import com.propertiestree.admin.exception.InvalidSearchOperatorException;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.core.types.dsl.EnumPath;
import com.querydsl.core.types.dsl.StringPath;

public abstract class SearchPredicateBuilder {

	public abstract Predicate build(List<SearchCriteria> criterias);

	protected <T extends Enum<T>> BooleanExpression applyEnumOperator(EnumPath<T> enumPath, SearchCriteria criteria,
			Class<T> c) throws InvalidSearchOperatorException {

		switch (criteria.getOperator()) {
		case "=": {
			return enumPath.eq(Enum.valueOf(c, criteria.getExpression()));
		}
		default: {
			throw new InvalidSearchOperatorException(criteria.getField(), criteria.getOperator());
		}
		}
	}

	protected BooleanExpression applyStringOperator(StringPath path, SearchCriteria criteria)
			throws InvalidSearchOperatorException {

		switch (criteria.getOperator()) {
		case "=": {
			return path.equalsIgnoreCase(criteria.getExpression());
		}
		case " like ": {
			return path.likeIgnoreCase(criteria.getExpression());
		}
		case "~": {
			return path.containsIgnoreCase(criteria.getExpression());
		}
		default: {
			throw new InvalidSearchOperatorException(criteria.getField(), criteria.getOperator());
		}
		}
	}

}
