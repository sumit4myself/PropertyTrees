package com.propertiestree.admin.rest.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/property")
public class PropertyRestController {

	@RequestMapping(value = "/post", method = RequestMethod.POST)
	public String postProperty() {
		return "response";
	}

	@RequestMapping(value = "/{propertyFor}", method = RequestMethod.GET)
	public ResponseEntity<?> listProperty(@PathVariable("propertyFor") String propertyFor) {
		return null;
	}
}
