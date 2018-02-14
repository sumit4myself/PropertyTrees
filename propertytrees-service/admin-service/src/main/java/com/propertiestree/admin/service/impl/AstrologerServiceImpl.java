
package com.propertiestree.admin.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.service.AstrologerService;
import com.propertiestree.common.entity.Astrologer;

@Service
public class AstrologerServiceImpl implements AstrologerService {

	@Override
	public Astrologer getAstrologer(String uuid) {
		return null;
	}

	@Override
	public Page<Astrologer> search(String searchQuery, Pageable pageable) {
		return null;
	}

}
