package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.UserDAO;
import com.propertiestree.admin.service.UserService;
import com.propertiestree.common.entity.Registration;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserDAO userRepository;
	
	@Override
	public Registration saveUser(Registration registration) {
		return userRepository.save(registration);
	}
}
