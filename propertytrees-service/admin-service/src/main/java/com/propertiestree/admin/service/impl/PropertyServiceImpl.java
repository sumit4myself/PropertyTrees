package com.propertiestree.admin.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.admin.exception.PropertyException;
import com.propertiestree.admin.exception.PropertyNotFoundException;
import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.common.entity.Property;

public class PropertyServiceImpl implements PropertyService{

	@Override
	public Page<Property> listProperty(Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Property getProperty(String uuid) throws PropertyNotFoundException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Property createProperty(Property property) throws PropertyException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Property updateProperty(Property existingProperty, Property updatedProperty) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteProperty(String uuid) throws PropertyException {
		// TODO Auto-generated method stub
		
	}

	@Override
	public Page<Property> search(String searchQuery, Pageable pageable) {
		// TODO Auto-generated method stub
		return null;
	}

}
