package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.UserService;
import com.propertiestree.common.entity.Registration;

@RestController
@RequestMapping("user")
public class UserRestController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value = "register")
	public String register(@RequestBody Registration registration) {
		userService.saveUser(registration);
		return "Success";
	}

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public void login() {

	}

}
