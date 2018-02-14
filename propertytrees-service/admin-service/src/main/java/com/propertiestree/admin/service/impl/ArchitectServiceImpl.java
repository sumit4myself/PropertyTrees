package com.propertiestree.admin.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.service.ArchitectService;
import com.propertiestree.common.entity.Architect;

@Service
public class ArchitectServiceImpl implements ArchitectService{

	@Override
	public Page<Architect> search(String searchQuery, Pageable pageable) {
		return null;
	}

}
