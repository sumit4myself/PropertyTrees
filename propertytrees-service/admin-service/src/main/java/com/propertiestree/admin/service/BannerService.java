package com.propertiestree.admin.service;

import com.propertiestree.common.entity.Banner;

public interface BannerService {

	void save(Banner banner);

	void remove(String uuid);

}
