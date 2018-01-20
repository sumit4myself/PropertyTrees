package com.propertiestree.admin.repository;

import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.Registration;

@Repository
public interface UserRegistrationRepository extends AbstractRepository<Registration,Long> {

}
