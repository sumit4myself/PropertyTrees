package com.propertiestree.admin.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.common.entity.property.Property;
import com.propertiestree.common.model.PropertyResult;

@RestController
@RequestMapping("/property")
public class PropertyRestController {

	@Autowired
	private PropertyService propertyService;

	@RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public String postProperty(@RequestBody Property property) {
		propertyService.createProperty(property);
		return "Success";
	}

	@RequestMapping(value = "/{propertyFor}", method = RequestMethod.GET)
	public ResponseEntity<?> listProperty(@PathVariable("propertyFor") String propertyFor) {
		return null;
	}
	
	@GetMapping("/filter")
	public List<PropertyResult> filterProperty(
			@RequestParam(name = "propertyType", required = false) String propertyType,
			@RequestParam(name = "availability", required = false) String availability,
			@RequestParam(name = "city", required = false) String city) {
		return propertyService.filterProperty(propertyType, availability, city);
	}
	
	@GetMapping("/search")
	public List<PropertyResult> searchProperty(	@RequestParam(name = "text") String text) {
		return propertyService.searchProperty(text);
	}
}
