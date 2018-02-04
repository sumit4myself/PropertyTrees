package com.propertiestree.admin.repository;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.util.StringUtils;

import com.propertiestree.common.entity.property.Property;

import java.util.ArrayList;

import javax.persistence.criteria.Predicate;


public class PropertySpecs {
	
	public static  Specification<Property> propertyWithSpecification(final String propertyType, final String availability, final String city) {
        return (root, query, builder) -> {
            ArrayList<Predicate> predicates = new ArrayList<Predicate>();

            if (!StringUtils.isEmpty(propertyType)) {
                predicates.add(builder.equal(root.get("type").as(String.class), propertyType));
            }

            if (!StringUtils.isEmpty(availability)) {
                predicates.add(builder.equal(root.get("pricing").get("availability").as(String.class), availability));
            }

            if (!StringUtils.isEmpty(city)) {
                predicates.add(builder.equal(root.get("location").get("city").get("name"), city));
            }
            
            return builder.and(predicates.toArray(new Predicate[predicates.size()]));
        };
    }

}
