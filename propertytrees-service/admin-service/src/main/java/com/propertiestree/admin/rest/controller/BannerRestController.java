package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;import org.springframework.data.domain.Page;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.BannerService;
import com.propertiestree.common.entity.property.Banner;

@RestController
@RequestMapping("/banner")
public class BannerRestController {

	@Autowired
	private BannerService service;
	
	@PostMapping(consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
	public void save(@RequestBody Banner banner) {
		service.save(banner);
	}
	
	@GetMapping()
	public ResponseEntity<Page<Banner>> listBaners() {
		return service.findAll();
	}

	@DeleteMapping(path = "/{uuid}")
	public void delete(@PathVariable("uuid") String uuid) {
		service.delete(uuid);
	}
}
