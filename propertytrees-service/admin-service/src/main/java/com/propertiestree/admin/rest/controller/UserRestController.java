package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.UserService;
import com.propertiestree.common.entity.User;
import com.propertiestree.common.model.UserModel;

@RestController
@RequestMapping("/user")
public class UserRestController {

	@Autowired
	private UserService service;

	@PostMapping(value = "/register")
	public void register(@RequestBody UserModel user) {
		service.register(user);
	}

	@RequestMapping("/profile/{uuid}")
	public void updateProfile(@RequestParam("uuid") String uuid, @RequestBody User updatedUser) {
		service.updateProfile(uuid, updatedUser);
	}

	@RequestMapping("/password/{uuid}")
	public void changePassword(@RequestParam("uuid") String uuid, String updatedPassword) {
		service.changePassword(uuid, updatedPassword);
	}
}
