package com.propertiestree.admin.repository;

import java.util.Optional;

import com.propertiestree.common.entity.Property;

public interface PropertyRepository extends AbstractRepository<Property, Long> {

    Optional<Property> findByUuid(String uuid);
    
}
