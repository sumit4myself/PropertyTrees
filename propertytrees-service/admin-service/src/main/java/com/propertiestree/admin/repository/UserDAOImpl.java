package com.propertiestree.admin.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.propertiestree.common.entity.Registration;

@Transactional
@Repository
public class UserDAOImpl implements UserDAO{
	
	@PersistenceContext
	 private EntityManager entityManager;
	 
	 
	 @Override
	 public Registration save(Registration registration) {
		return entityManager.merge(registration); 
	 }

}
