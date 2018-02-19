
package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.property.Banner;
import com.propertiestree.common.entity.property.BannerType;

public interface BannerService {

	void save(Banner banner);

	void delete(String uuid);

	Page<Banner> findAll(BannerType bannerType, Pageable pageable);

}
