package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.exception.UserNotFoundException;
import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.service.ArchitectService;
import com.propertiestree.common.entity.Architect;

@Service
public class ArchitectServiceImpl implements ArchitectService{
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public Page<Architect> search(String searchQuery, Pageable pageable) {
		return null;
	}

	@Override
	public Architect getArchitect(String uuid) {
		
		return (Architect) userRepository.findByUuid(uuid).get();
	}

	@Override
	public void updateProfile(String uuid, Architect architect) {
		architect.setId(userRepository.findByUuid(uuid).orElseThrow(() -> new UserNotFoundException(uuid)).getId());
		userRepository.save(architect);
		
	}

}
