package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;

@RestController
public class LocationController extends AbstractAdminController {

	@Autowired
	private LocationService locationService;

	@GetMapping(value = PROPERTY_LOCATION_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public Page<City> getAllCities(Pageable pageable) {
		return locationService.getAllCities(pageable);
	}
}
