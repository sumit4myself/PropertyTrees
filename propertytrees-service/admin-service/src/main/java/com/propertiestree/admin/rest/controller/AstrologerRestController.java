
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

import com.propertiestree.admin.service.AstrologerService;
import com.propertiestree.common.entity.Astrologer;

@RestController
public class AstrologerRestController extends AbstractAdminController {

	@Autowired
	private AstrologerService service;

	@GetMapping(path = ASTROLOGER_UUID_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Astrologer> getAstrologer(@PathVariable("uuid") String uuid) {
		return ResponseEntity.ok(service.getAstrologer(uuid));
	}

	@GetMapping(path = ASTROLOGER_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<Astrologer>> searchAstrologers(
			@RequestParam("q") String searchQuery, Pageable pageable) {
		return ResponseEntity.ok(service.search(searchQuery, pageable));
	}

}
