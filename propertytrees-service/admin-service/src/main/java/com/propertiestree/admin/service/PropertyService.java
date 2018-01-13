package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.admin.exception.PropertyException;
import com.propertiestree.admin.exception.PropertyNotFoundException;
import com.propertiestree.common.entity.Property;

public interface PropertyService {

	Page<Property> listProperty(Pageable pageable);

	Property getProperty(String uuid) throws PropertyNotFoundException;

	Property createProperty(Property property) throws PropertyException;

	Property updateProperty(Property existingProperty, Property updatedProperty);

	void deleteProperty(String uuid) throws PropertyException;

	Page<Property> search(String searchQuery, Pageable pageable);

}
