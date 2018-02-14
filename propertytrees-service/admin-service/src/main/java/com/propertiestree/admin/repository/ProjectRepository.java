package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.property.Project;

@Repository
public interface ProjectRepository extends AbstractRepository<Project, Long> {

    Optional<Project> findByUuid(String uuid);
    
    long deleteByUuid(String uuid);
    
}
