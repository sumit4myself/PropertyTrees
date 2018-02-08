package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.api.resources.assemblers.ArchitectResourceAssembler;
import com.propertiestree.admin.service.ArchitectService;
import com.propertiestree.common.entity.Architect;

@RestController
public class ArchitectRestController extends AbstractAdminController {

	@Autowired
	private ArchitectService service;
	@Autowired
	private ArchitectResourceAssembler assembler;

	@GetMapping(path = ARCHITECT_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity searchArchitects(@RequestParam("q") String searchQuery, Pageable pageable) {
		Page<Architect> architects = service.search(searchQuery, pageable);
		return ResponseEntity.ok(assembler.toResources(architects));
	}

}
