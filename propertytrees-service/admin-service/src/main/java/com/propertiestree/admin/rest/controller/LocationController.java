package com.propertiestree.admin.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.LocationService;
import com.propertiestree.common.entity.City;
import com.propertiestree.common.entity.property.Availability;
import com.propertiestree.common.entity.property.PropertyType;
import com.propertiestree.common.model.Cities;

@RestController
public class LocationController extends AbstractAdminController {

	@Autowired
	private LocationService locationService;

	@GetMapping(value = PROPERTY_LOCATION_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public Page<City> getAllCities(Pageable pageable) {
		return locationService.getAllCities(pageable);
	}
	
	@GetMapping(value = PROPERTY_LOCATION_WITH_COUNT_PROP_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Cities>> listOfCitiesWithPropertyCount(@RequestParam("availability")Availability availability, @RequestParam("type")PropertyType type) {
		 return ResponseEntity.ok(locationService.listOfCitiesWithPropertyCount(availability, type));
	}
	
	@GetMapping(value = PROPERTY_LOCATION_WITH_COUNT_DEALER_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Cities>> listOfCitiesWithDealerCount() {
		 return ResponseEntity.ok(locationService.listOfCitiesWithDealerCount());
	}
}
