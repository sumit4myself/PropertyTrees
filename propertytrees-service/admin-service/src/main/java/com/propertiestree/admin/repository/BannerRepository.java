package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.property.Banner;

@Repository
public interface BannerRepository extends AbstractRepository<Banner, Long> {

    Optional<Banner> findByUuid(String uuid);
    
}
