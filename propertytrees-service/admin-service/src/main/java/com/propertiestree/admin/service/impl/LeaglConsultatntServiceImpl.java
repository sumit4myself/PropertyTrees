
package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.exception.UserNotFoundException;
import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.service.LeaglConsultatntService;
import com.propertiestree.common.entity.LeaglConsultatnt;

@Service
public class LeaglConsultatntServiceImpl implements LeaglConsultatntService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public LeaglConsultatnt getLeaglConsultatnt(String uuid) {
		return (LeaglConsultatnt) userRepository.findByUuid(uuid).get();
	}

	@Override
	public Page<LeaglConsultatnt> search(String searchQuery, Pageable pageable) {
		return null;
	}

	@Override
	public void updateProfile(String uuid, LeaglConsultatnt leaglConsultatnt) {
		leaglConsultatnt.setId(userRepository.findByUuid(uuid).orElseThrow(() -> new UserNotFoundException(uuid)).getId());
		userRepository.save(leaglConsultatnt);
		
	}

}
