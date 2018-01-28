package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.property.Property;

@Repository
public interface PropertyRepository extends AbstractRepository<Property, Long> {

    Optional<Property> findByUuid(String uuid);
    
    void deleteByUuid(String uuid);
}
