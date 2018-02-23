package com.propertiestree.admin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.LocationRepository;
import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;
import com.propertiestree.common.entity.property.Availability;
import com.propertiestree.common.entity.property.PropertyType;
import com.propertiestree.common.model.Cities;

@Service
public class LocationServiceImpl implements LocationService {

	@Autowired
	private LocationRepository cityRepository;

	@Override
	public Page<City> getAllCities(Pageable pageable) {
		return cityRepository.findAll(pageable);
	}

	@Override
	public City findByUuid(String uuid) {
		return cityRepository.findByUuid(uuid).get();
	}

	@Override
	public List<Cities> listOfCitiesWithPropertyCount(Availability availability, PropertyType type) {
		return cityRepository.listOfCitiesWithPropertyCount(availability, type);
	}

	@Override
	public List<Cities> listOfCitiesWithDealerCount() {
		return cityRepository.listOfCitiesWithDealerCount();
	}

}
