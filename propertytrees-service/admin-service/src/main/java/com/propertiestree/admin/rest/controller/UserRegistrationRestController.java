package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.UserRegistrationService;
import com.propertiestree.common.entity.Registration;

@RestController
@RequestMapping("/user")
public class UserRegistrationRestController {

	@Autowired
	private UserRegistrationService service;

	@PostMapping(value = "/register")
	public String register(@RequestBody Registration registration) {
		service.register(registration);
		return "Success";
	}
}
