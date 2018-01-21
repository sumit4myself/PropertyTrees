package com.propertiestree.admin.repository;

import java.util.Optional;

import com.propertiestree.common.entity.Photo;

public interface ImageRepository extends AbstractRepository<Photo, Long> {

    Optional<Photo> findByUuid(String uuid);
    
}
