package com.propertiestree.admin.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.propertiestree.admin.exception.PropertyException;
import com.propertiestree.admin.exception.PropertyNotFoundException;
import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.LocationRepository;
import com.propertiestree.admin.repository.PropertyRepository;
import com.propertiestree.admin.repository.PropertySearchRepository;
import com.propertiestree.admin.repository.PropertySpecs;
import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.common.entity.Photo;
import com.propertiestree.common.entity.property.Property;
import com.propertiestree.common.model.PropertyResult;

@Service
public class PropertyServiceImpl implements PropertyService {

	@Autowired
	private UUIDGenerator uuidGenerator;
	@Autowired
	private PropertyRepository repository;
	@Autowired
	private LocationRepository locationRepository;
	@Autowired
	private PropertySearchRepository propSearchRepository;

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
		property.getLocation().setCity(locationRepository.findOne(property.getLocation().getCity().getId()));

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
	public Page<Property> search(String searchQuery, Pageable pageable) {
		return null;
	}

	@Override
	public List<PropertyResult> filterProperty(String propertyType, String availability, String city) {
		if (StringUtils.isEmpty(propertyType) && StringUtils.isEmpty(availability) && StringUtils.isEmpty(city)) {
			return null;
		}
		
		List<Property> properties = repository.findAll(PropertySpecs.propertyWithSpecification(propertyType, availability, city));
		return copyResponseBean(properties);
	}

	@Override
	public List<PropertyResult> searchProperty(String text) {
		if (StringUtils.isEmpty(text)) {
			return null;
		}
		List<Property> props = propSearchRepository.search(text);
		List<PropertyResult> propResultList = copyResponseBean(props);
		return propResultList;
	}

	private List<PropertyResult> copyResponseBean(List<Property> props) {
		List<PropertyResult> propResultList = new ArrayList<>();
		for (Property prop : props) {
			PropertyResult propResult = new PropertyResult();
			propResult.setPropUUID(prop.getUuid());
			propResult.setAvailability(prop.getPricing().getAvailability());
			propResult.setBookingAmount(prop.getPricing().getBookingAmount());
			propResult.setCityName(prop.getLocation().getCity().getName());
			propResult.setPhotos(prop.getPhotos());
			propResult.setProjectName(prop.getLocation().getProject().getName());
			propResult.setPropertyType(prop.getType());
			propResultList.add(propResult);
		}
		return propResultList;
	}

}
