
package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.LeaglConsultatnt;

public interface LeaglConsultatntService {

	LeaglConsultatnt getLeaglConsultatnt(String uuid);

	Page<LeaglConsultatnt> search(String searchQuery, Pageable pageable);

}
