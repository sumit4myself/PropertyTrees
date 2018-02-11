
package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.LeaglConsultatntService;
import com.propertiestree.common.entity.LeaglConsultatnt;

@RestController
public class LeaglConsultatntRestController extends AbstractAdminController {

	@Autowired
	private LeaglConsultatntService service;

	@GetMapping(path = CONSULTANT_UUID_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LeaglConsultatnt> getLeaglConsultatnt(
			@PathVariable("uuid") String uuid) {
		return ResponseEntity.ok(service.getLeaglConsultatnt(uuid));
	}

	@GetMapping(path = CONSULTANT_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<LeaglConsultatnt>> searchLeaglConsultatnts(
			@RequestParam("q") String searchQuery, Pageable pageable) {
		return ResponseEntity.ok(service.search(searchQuery, pageable));
	}
}
