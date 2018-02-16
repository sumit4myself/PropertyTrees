package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.Agent;

public interface AgentService {

	Agent getAgent(String uuid);

	Page<Agent> search(String searchQuery, Pageable pageable);

	void updateProfile(String uuid, Agent agent);

}
