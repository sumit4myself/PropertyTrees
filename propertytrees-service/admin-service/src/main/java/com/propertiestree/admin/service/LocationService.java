package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.City;

public interface LocationService {

	City findByUuid(String uuid);

	Page<City> getAllCities(Pageable pageable);

}
