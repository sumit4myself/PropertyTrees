package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.LocationRepository;
import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;

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
		// TODO Auto-generated method stub
		return null;
	}

}
