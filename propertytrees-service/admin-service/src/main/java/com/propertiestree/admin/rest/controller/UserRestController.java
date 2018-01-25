package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.UserService;

@RestController
@RequestMapping("/user")
public class UserRestController {

	@Autowired
	private UserService userService;

	@RequestMapping("/profile/{uuid}")
	public void updateProfile(@RequestParam("uuid") String uuid) {

	}

	@RequestMapping("/password/{uuid}")
	public void changePassword(@RequestParam("uuid") String uuid) {

	}
}
