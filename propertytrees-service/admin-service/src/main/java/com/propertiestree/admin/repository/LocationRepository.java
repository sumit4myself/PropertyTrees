package com.propertiestree.admin.repository;

import java.util.Optional;

import com.propertiestree.common.entity.Banner;
import com.propertiestree.common.entity.City;

public interface LocationRepository extends AbstractRepository<City, Long> {

    Optional<Banner> findByUuid(String uuid);
    
}
