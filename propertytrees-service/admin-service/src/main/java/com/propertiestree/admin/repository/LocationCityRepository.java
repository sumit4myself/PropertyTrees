package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.propertiestree.common.entity.Banner;
import com.propertiestree.common.entity.City;

public interface LocationCityRepository extends JpaRepository<City, Long> {

    Optional<Banner> findByUuid(String uuid);
    
}
