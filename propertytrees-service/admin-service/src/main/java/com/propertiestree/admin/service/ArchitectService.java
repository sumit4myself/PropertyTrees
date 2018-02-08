package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.Architect;

public interface ArchitectService {

	Page<Architect> search(String searchQuery, Pageable pageable);

}
