package com.propertiestree.admin.rest.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("user")
public class UserRestController {

	@RequestMapping(value = "register", method = RequestMethod.POST)
	public void register() {

	}

	@RequestMapping(value = "login", method = RequestMethod.POST)
	public void login() {

	}

}
