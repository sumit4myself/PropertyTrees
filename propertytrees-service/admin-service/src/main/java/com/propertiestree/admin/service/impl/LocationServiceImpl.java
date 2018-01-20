package com.propertiestree.admin.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.LocationRepository;
import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;

@Service
public class LocationServiceImpl implements LocationService{
	
	@Autowired
	private LocationRepository cityRepository;
	
	@Override
	public List<City> getAllCity(){
		return cityRepository.findAll();
	}
	
}
