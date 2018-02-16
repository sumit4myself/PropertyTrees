package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.UserService;
import com.propertiestree.common.entity.User;
import com.propertiestree.common.model.UserModel;

@RestController
public class UserRestController extends AbstractAdminController {

	@Autowired
	private UserService service;

	@PostMapping(value = USER_REGISTRATION_URI, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<User> register(@RequestBody UserModel user) {
		return ResponseEntity.ok(service.register(user));
	}

	@PutMapping(value = USER_PROFILE_URI, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> updateProfile(@RequestParam("uuid") String uuid, @RequestBody User updatedUser) {
		service.updateProfile(uuid, updatedUser);
		return ResponseEntity.ok().build();
	}

	@PutMapping(value = USER_FORGET_PASSWORD_URI)
	public ResponseEntity<Void> changePassword(@RequestParam("uuid") String uuid, String updatedPassword) {
		service.changePassword(uuid, updatedPassword);
		return ResponseEntity.ok().build();
	}
	
	@GetMapping(path = USER_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<User>> searchAgents(@RequestParam("q") String searchQuery, Pageable pageable) {
		return ResponseEntity.ok(service.search(searchQuery, pageable));
	}
}
