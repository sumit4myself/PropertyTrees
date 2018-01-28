package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.common.entity.property.Property;

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
}
