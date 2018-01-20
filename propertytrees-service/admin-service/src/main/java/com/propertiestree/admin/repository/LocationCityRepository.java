package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.Banner;
import com.propertiestree.common.entity.City;

@Repository
public interface LocationCityRepository extends JpaRepository<City, Long> {

    Optional<Banner> findByUuid(String uuid);
    
}
