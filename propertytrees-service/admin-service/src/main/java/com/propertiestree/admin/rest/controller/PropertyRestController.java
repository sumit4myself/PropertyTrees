package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.PropertyService;
import com.propertiestree.common.entity.property.Property;

@RestController
public class PropertyRestController extends AbstractAdminController {

	@Autowired
	private PropertyService propertyService;

	@PostMapping(value = PROPERTY_POST_URI, consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Void> postProperty(@RequestBody Property property) {
		propertyService.createProperty(property);
		return ResponseEntity.noContent().build();
	}

	@GetMapping(value = PROPERTY_BASE_URI, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Page<Property>> listProperties(Pageable pageable) {
		return ResponseEntity.ok(propertyService.listProperties(pageable));
	}

	@GetMapping(value=PROPERTY_SEARCH_URI,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public ResponseEntity<Page<Property>> searchProperty(@RequestParam("q")String query, Pageable pageable) {
		return ResponseEntity.ok(propertyService.searchProperties(query,pageable));
	}
}
