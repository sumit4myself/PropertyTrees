package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import com.propertiestree.admin.exception.PropertyException;
import com.propertiestree.admin.exception.PropertyNotFoundException;
import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.PropertyDAO;
import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.common.entity.Photo;
import com.propertiestree.common.entity.Property;

@Service
public class PropertyServiceImpl implements PropertyService{
	
	@Autowired
	private PropertyDAO propertyRepository;
	@Autowired
	private UUIDGenerator uuidGenerator;
	
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
		String uuid = uuidGenerator.nextLargeUID();
		if(property!=null) {
			property.setUuid(uuid);
			
			if(property.getDetails() != null) {
				property.getDetails().setUuid(uuid);
			}
			
			if(property.getFeatures() != null) {
				property.getFeatures().setUuid(uuid);
			}
			
			if(!CollectionUtils.isEmpty(property.getPhotos())) {
				for(Photo photo : property.getPhotos()) {
					photo.setUuid(uuid);
				}
			}
		}
		
		return propertyRepository.save(property);
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
