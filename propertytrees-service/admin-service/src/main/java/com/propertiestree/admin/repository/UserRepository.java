package com.propertiestree.admin.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.User;

@Repository
public interface UserRepository extends AbstractRepository<User,Long> {
	
	Optional<User> findByUuid(String uuid);
    
    void deleteByUuid(String uuid);
    
}
