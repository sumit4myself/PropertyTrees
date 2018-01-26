package com.propertiestree.admin.repository;

import java.util.Optional;

import com.propertiestree.common.entity.City;

public interface LocationRepository extends AbstractRepository<City, Integer> {

    Optional<City> findByUuid(String uuid);
    
}
