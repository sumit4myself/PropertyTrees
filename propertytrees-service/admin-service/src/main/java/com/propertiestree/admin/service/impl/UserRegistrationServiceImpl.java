package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.repository.UserRegistrationRepository;
import com.propertiestree.admin.service.UserRegistrationService;
import com.propertiestree.common.entity.Registration;

@Service
public class UserRegistrationServiceImpl implements UserRegistrationService {

	@Autowired
	private UserRegistrationRepository repository;

	@Override
	public Registration register(Registration registration) {
		return repository.save(registration);
	}

}
