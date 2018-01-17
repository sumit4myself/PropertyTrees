package com.propertiestree.admin.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.BannerRepository;
import com.propertiestree.admin.service.BannerService;
import com.propertiestree.common.entity.Banner;

@Transactional
@Service
public class BannerServiceImpl implements BannerService {
	
	 private static final Logger logger = LoggerFactory.getLogger(BannerServiceImpl.class);
	
	@Autowired
	BannerRepository bannerRepository; 
	
	@Autowired
	private UUIDGenerator uuidGenerator;
	
	@Override
	public void save(Banner banner) {
		logger.debug("start of save() ");
		
		String uuid = uuidGenerator.nextLargeUID();
		logger.info("Banner uuid :: "+uuid);
		banner.setUuid(uuid);
		Banner bnr = bannerRepository.save(banner);
		
		logger.debug("end of save() ");
	}
	
	@Override
	public void remove(String uuid) {
		logger.debug("start of remove() ");
		Banner banner = bannerRepository.findByUuid(uuid).get();
		bannerRepository.delete(banner);
		logger.debug("end of remove() ");
	}
}
