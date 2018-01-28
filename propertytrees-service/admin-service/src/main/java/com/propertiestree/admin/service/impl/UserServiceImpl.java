package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.service.UserService;
import com.propertiestree.common.entity.User;
import com.propertiestree.common.model.UserModel;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;

	@Override
	public void register(UserModel registration) {

	}

	@Override
	public void updateProfile(String uuid, User updatedUser) {

	}

	@Override
	public void changePassword(String uuid, String updatedPassword) {

	}

}
