
package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.BannerRepository;
import com.propertiestree.admin.service.BannerService;
import com.propertiestree.common.entity.property.Banner;
import com.propertiestree.common.entity.property.BannerType;

@Transactional
@Service
public class BannerServiceImpl implements BannerService {

	@Autowired
	BannerRepository bannerRepository;

	@Autowired
	private UUIDGenerator uuidGenerator;

	@Override
	public void save(Banner banner) {
		String uuid = uuidGenerator.nextLargeUID();
		banner.setUuid(uuid);
		bannerRepository.save(banner);
	}

	@Override
	public void delete(String uuid) {
		Banner banner = bannerRepository.findByUuid(uuid).get();
		bannerRepository.delete(banner);
	}

	@Override
	public Page<Banner> findAll(BannerType bannerType, Pageable pageable) {
		return bannerRepository.findByBannerType(bannerType, pageable);
	}

}
