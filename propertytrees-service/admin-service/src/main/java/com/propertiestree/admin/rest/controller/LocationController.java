package com.propertiestree.admin.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;

@RestController
@RequestMapping("/location")
public class LocationController {

	@Autowired
	private LocationService locationService;

	@GetMapping(value = "/cities")
	public List<City> getAllCities() {
		return locationService.getAllCities();
	}	
}
