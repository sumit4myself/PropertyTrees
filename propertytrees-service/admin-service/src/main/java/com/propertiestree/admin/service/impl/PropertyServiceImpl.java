package com.propertiestree.admin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.api.model.SearchCriteria;
import com.propertiestree.admin.exception.PropertyException;
import com.propertiestree.admin.exception.PropertyNotFoundException;
import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.PropertyRepository;
import com.propertiestree.admin.search.SearchPredicateBuilder;
import com.propertiestree.admin.service.LocationService;
import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.admin.utils.SearchQueryParser;
import com.propertiestree.common.entity.Photo;
import com.propertiestree.common.entity.property.Property;
import com.querydsl.core.types.Predicate;

@Service
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	private UUIDGenerator uuidGenerator;
	@Autowired
	private PropertyRepository repository;
	@Autowired
	private LocationService locationService;
	@Autowired
	@Qualifier("propertySearchPredicateBuilder")
	private SearchPredicateBuilder predicateBuilder;

	@Override
	public Property getProperty(String uuid) throws PropertyNotFoundException {
		return repository.findByUuid(uuid).orElseThrow(() -> new PropertyNotFoundException(uuid));
	}

	@Override
	public Property createProperty(Property property) throws PropertyException {
		property.setUuid(uuidGenerator.nextLargeUID());
		property.getLocation().setCity(locationService.findByUuid(property.getLocation().getCity().getUuid()));
		property.getLocation().getProject().setUuid(uuidGenerator.nextLargeUID());
		for (Photo photo : property.getPhotos()) {
			photo.setUuid(uuidGenerator.nextLargeUID());
		}
		for (Photo photo : property.getFeatures().getPhotos()) {
			photo.setUuid(uuidGenerator.nextLargeUID());
		}
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
	public Page<Property> listProperties(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Override
	public Page<Property> searchProperties(String searchQuery, Pageable pageable) {
		List<SearchCriteria> criteria = SearchQueryParser.parse(searchQuery);
		Predicate searchPredicate = predicateBuilder.build(criteria);
		return repository.findAll(searchPredicate, pageable);
	}

}
