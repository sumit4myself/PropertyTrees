
package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.Dealer;

public interface DealerService {

	Dealer getDealer(String uuid);

	Page<Dealer> search(String searchQuery, Pageable pageable);

}
