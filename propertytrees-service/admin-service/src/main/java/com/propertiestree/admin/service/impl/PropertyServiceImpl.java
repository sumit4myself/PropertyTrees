package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.exception.PropertyException;
import com.propertiestree.admin.exception.PropertyNotFoundException;
import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.PropertyRepository;
import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.common.entity.Property;

@Service
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	private UUIDGenerator uuidGenerator;
	@Autowired
	private PropertyRepository repository;

	@Override
	public Page<Property> listProperty(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Override
	public Property getProperty(String uuid) throws PropertyNotFoundException {
		return repository.findByUuid(uuid).orElseThrow(() -> new PropertyNotFoundException(uuid));
	}

	@Override
	public Property createProperty(Property property) throws PropertyException {
		property.setUuid(uuidGenerator.nextLargeUID());
		return repository.save(property);
	}

	@Override
	public Property updateProperty(Property existingProperty, Property updatedProperty) {
		return null;
	}

	@Override
	public void deleteProperty(String uuid) throws PropertyException {
		repository.deleteByUuid(uuid);
	}

	@Override
	public Page<Property> search(String searchQuery, Pageable pageable) {
		return null;
	}

}
