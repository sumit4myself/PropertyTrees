package com.propertiestree.admin.repository;

import org.springframework.stereotype.Repository;

import com.propertiestree.common.entity.User;

@Repository
public interface UserRepository extends AbstractRepository<User,Long> {

}
