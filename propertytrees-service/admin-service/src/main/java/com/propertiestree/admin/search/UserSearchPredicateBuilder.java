
package com.propertiestree.admin.search;

import static com.propertiestree.common.entity.QUser.user;

import java.util.List;

import org.springframework.stereotype.Component;

import com.propertiestree.admin.api.model.SearchCriteria;
import com.propertiestree.admin.exception.InvalidSearchFieldException;
import com.propertiestree.admin.exception.InvalidSearchOperatorException;
import com.propertiestree.common.entity.UserType;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.EnumPath;
import com.querydsl.core.types.dsl.StringPath;

@Component
public class UserSearchPredicateBuilder extends SearchPredicateBuilder {

	@Override
	public Predicate build(List<SearchCriteria> criterias)
			throws InvalidSearchFieldException, InvalidSearchOperatorException {

		Predicate cityExpression = null;
		Predicate userTypeExpression = null;

		for (SearchCriteria criteria : criterias) {
			switch (criteria.getField()) {
				case "city": {
					cityExpression = applyCityOperator(cityExpression, user.city.name,
							criteria);
					break;
				}
				case "userType": {
					userTypeExpression = applyUserTypeOperator(cityExpression, user.type,
							criteria);
					break;
				}
				default: {
					throw new InvalidSearchFieldException(criteria.getField());
				}
			}
		}
		return ExpressionUtils.allOf(cityExpression,userTypeExpression);
	}

	private Predicate applyCityOperator(Predicate expression, StringPath path,
			SearchCriteria criteria) throws InvalidSearchOperatorException {
		return ExpressionUtils.anyOf(applyStringOperator(path, criteria), expression);
	}
	
	private Predicate applyUserTypeOperator(Predicate expression, EnumPath<UserType> enumPath,
			SearchCriteria criteria) throws InvalidSearchOperatorException {
		
		return ExpressionUtils.anyOf(applyEnumOperator(enumPath, criteria, UserType.class), expression);
	}
}
