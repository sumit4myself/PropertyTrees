
package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.Astrologer;

public interface AstrologerService {

	Astrologer getAstrologer(String uuid);

	Page<Astrologer> search(String searchQuery, Pageable pageable);

	void updateProfile(String uuid, Astrologer astrologer);

}
