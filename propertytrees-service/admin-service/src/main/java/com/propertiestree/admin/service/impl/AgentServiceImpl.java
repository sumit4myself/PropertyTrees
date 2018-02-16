
package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.exception.UserNotFoundException;
import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.service.AgentService;
import com.propertiestree.common.entity.Agent;

@Service
public class AgentServiceImpl implements AgentService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public Agent getAgent(String uuid) {
		return (Agent) userRepository.findByUuid(uuid).get();
	}
	
	@Override
	public void updateProfile(String uuid, Agent agent) {
		agent.setId(userRepository.findByUuid(uuid).orElseThrow(() -> new UserNotFoundException(uuid)).getId());
		userRepository.save(agent);
	}

	@Override
	public Page<Agent> search(String searchQuery, Pageable pageable) {
		return null;
	}

}
