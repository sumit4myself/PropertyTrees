package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.service.UserService;
import com.propertiestree.common.entity.Registration;
import com.propertiestree.common.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Override
	public User saveUser(User user) {
		return null;
	}
}
