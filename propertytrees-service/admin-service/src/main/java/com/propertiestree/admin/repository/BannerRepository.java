
package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.property.Banner;
import com.propertiestree.common.entity.property.BannerType;

@Repository
public interface BannerRepository extends AbstractRepository<Banner, Long> {

	Optional<Banner> findByUuid(String uuid);

	Page<Banner> findByBannerType(BannerType bannerType, Pageable pageable);

}
