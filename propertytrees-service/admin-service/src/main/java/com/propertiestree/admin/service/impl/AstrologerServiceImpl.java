
package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.exception.UserNotFoundException;
import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.service.AstrologerService;
import com.propertiestree.common.entity.Astrologer;

@Service
public class AstrologerServiceImpl implements AstrologerService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public Astrologer getAstrologer(String uuid) {
		return (Astrologer) userRepository.findByUuid(uuid).get();
	}
	
	@Override
	public void updateProfile(String uuid, Astrologer astrologer) {
		astrologer.setId(userRepository.findByUuid(uuid).orElseThrow(() -> new UserNotFoundException(uuid)).getId());
		userRepository.save(astrologer);
	}

	@Override
	public Page<Astrologer> search(String searchQuery, Pageable pageable) {
		return null;
	}

}
