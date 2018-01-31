package com.propertiestree.admin.service.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.service.UserService;
import com.propertiestree.common.entity.User;
import com.propertiestree.common.model.UserModel;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository repository;
	@Autowired
	private UUIDGenerator uuidGenerator;

	@Override
	public void register(UserModel registration) {
		User user = new User();
		BeanUtils.copyProperties(registration, user);
		user.setUuid(uuidGenerator.nextLargeUID());
		repository.save(user);
	}

	@Override
	public void updateProfile(String uuid, User updatedUser) {

	}

	@Override
	public void changePassword(String uuid, String updatedPassword) {

	}

}
