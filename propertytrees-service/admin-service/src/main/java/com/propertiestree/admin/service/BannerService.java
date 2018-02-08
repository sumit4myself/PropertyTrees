package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;

import com.propertiestree.common.entity.property.Banner;

public interface BannerService {

	void save(Banner banner);

	void delete(String uuid);

	ResponseEntity<Page<Banner>> findAll();

}
