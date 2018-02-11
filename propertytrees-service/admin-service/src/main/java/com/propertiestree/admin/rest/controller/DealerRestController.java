
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

import com.propertiestree.admin.service.DealerService;
import com.propertiestree.common.entity.Dealer;

@RestController
public class DealerRestController extends AbstractAdminController {

	@Autowired
	private DealerService service;

	@GetMapping(path = DEALER_UUID_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Dealer> getDealer(@PathVariable("uuid") String uuid) {
		return ResponseEntity.ok(service.getDealer(uuid));
	}

	@GetMapping(path = DEALER_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<Dealer>> searchDealers(
			@RequestParam("q") String searchQuery, Pageable pageable) {
		return ResponseEntity.ok(service.search(searchQuery, pageable));
	}

}
