package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.AuthenticationService;

@RestController
public class AuthenticationRestController {

	@Autowired
	private AuthenticationService service;

	@RequestMapping("/login")
	public void login() {

	}

	@RequestMapping("/forgetPassword")
	public void forgetPassword(@RequestParam(name = "username", required = false) String username,
			@RequestParam(name = "email", required = false) String emailId) {

	}

}
