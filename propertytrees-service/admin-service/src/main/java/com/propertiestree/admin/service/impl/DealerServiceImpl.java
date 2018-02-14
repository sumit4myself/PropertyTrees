
package com.propertiestree.admin.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.service.DealerService;
import com.propertiestree.common.entity.Dealer;

@Service
public class DealerServiceImpl implements DealerService {

	@Override
	public Dealer getDealer(String uuid) {
		return null;
	}

	@Override
	public Page<Dealer> search(String searchQuery, Pageable pageable) {
		return null;
	}

}
