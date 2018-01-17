package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.propertiestree.common.entity.Banner;

public interface BannerRepository extends JpaRepository<Banner, Long> {

    Optional<Banner> findByUuid(String uuid);
    
}
