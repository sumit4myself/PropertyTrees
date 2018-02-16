
package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.ArchitectService;
import com.propertiestree.common.entity.Architect;

@RestController
public class ArchitectRestController extends AbstractAdminController {

	@Autowired
	private ArchitectService service;
	
	@GetMapping(path = ARCHITECT_UUID_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Architect> getArchitect(@PathVariable("uuid") String uuid) {
		return ResponseEntity.ok(service.getArchitect(uuid));
	}

	@PutMapping(value = ARCHITECT_BASE_URI, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> updateProfile(@RequestBody Architect architect) {
		service.updateProfile(architect.getUuid(), architect);
		return ResponseEntity.ok("Success");
	}
	
	@GetMapping(path = ARCHITECT_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<Architect>> searchArchitects(
			@RequestParam("q") String searchQuery, Pageable pageable) {
		return ResponseEntity.ok(service.search(searchQuery, pageable));
	}

}
