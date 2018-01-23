package com.propertiestree.admin.rest.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;

@RestController
@RequestMapping("/location")
public class LocationController {
	
	private static final Logger logger = LoggerFactory.getLogger(LocationController.class);
	
	@Autowired
	private LocationService locationService;


	@GetMapping(value = "/city")
	public List<City> getAllCity() {
		logger.debug("getAllCity() start");
		return locationService.getAllCity();
	}
}
