package com.propertiestree.admin.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.LocationCityRepository;
import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;

@Service
public class LocationServiceImpl implements LocationService{
	private static final Logger logger = LoggerFactory.getLogger(LocationServiceImpl.class);
	@Autowired
	private LocationCityRepository cityRepository;
	
	@Override
	public List<City> getAllCity(){
		logger.debug("getAllCity() start");
		return cityRepository.findAll();
	}
	
}
