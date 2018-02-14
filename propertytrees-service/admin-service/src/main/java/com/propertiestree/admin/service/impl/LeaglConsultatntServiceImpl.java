
package com.propertiestree.admin.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.service.LeaglConsultatntService;
import com.propertiestree.common.entity.LeaglConsultatnt;

@Service
public class LeaglConsultatntServiceImpl implements LeaglConsultatntService {

	@Override
	public LeaglConsultatnt getLeaglConsultatnt(String uuid) {
		return null;
	}

	@Override
	public Page<LeaglConsultatnt> search(String searchQuery, Pageable pageable) {
		return null;
	}

}
