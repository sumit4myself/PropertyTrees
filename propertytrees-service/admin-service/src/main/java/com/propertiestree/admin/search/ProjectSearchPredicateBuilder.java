package com.propertiestree.admin.search;

import java.util.List;

import org.springframework.stereotype.Component;

import com.propertiestree.admin.api.model.SearchCriteria;
import com.propertiestree.admin.exception.InvalidSearchFieldException;
import com.propertiestree.admin.exception.InvalidSearchOperatorException;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.StringPath;

import static com.propertiestree.common.entity.QArchitect.architect;

@Component
public class ProjectSearchPredicateBuilder extends SearchPredicateBuilder {

	@Override
	public Predicate build(List<SearchCriteria> criterias)
			throws InvalidSearchFieldException, InvalidSearchOperatorException {

		Predicate cityExpression = null;

		for (SearchCriteria criteria : criterias) {
			switch (criteria.getField()) {
			case "city": {
				cityExpression = applyCityOperator(cityExpression, architect.city, criteria);
				break;
			}
			default: {
				throw new InvalidSearchFieldException(criteria.getField());
			}
			}
		}
		return ExpressionUtils.allOf(cityExpression);
	}

	private Predicate applyCityOperator(Predicate expression, StringPath path, SearchCriteria criteria)
			throws InvalidSearchOperatorException {
		return ExpressionUtils.anyOf(applyStringOperator(path, criteria), expression);
	}
}