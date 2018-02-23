package com.propertiestree.admin.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.City;
import com.propertiestree.common.entity.property.Availability;
import com.propertiestree.common.entity.property.PropertyType;
import com.propertiestree.common.model.Cities;

public interface LocationService {

	City findByUuid(String uuid);

	Page<City> getAllCities(Pageable pageable);
	
	//List<Cities> listOfCitiesWithPropertyCount(String availability, String type);
	
	List<Cities> listOfCitiesWithDealerCount();

	List<Cities> listOfCitiesWithPropertyCount(Availability availability, PropertyType type);

}
