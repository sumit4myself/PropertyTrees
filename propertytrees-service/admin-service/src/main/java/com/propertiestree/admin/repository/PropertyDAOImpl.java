package com.propertiestree.admin.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.propertiestree.common.entity.Property;

@Transactional
@Repository
public class PropertyDAOImpl implements PropertyDAO{
	
	@PersistenceContext
	 private EntityManager entityManager;
	 
	 
	 @Override
	 public Property save(Property property) {
		return entityManager.merge(property); 
	 }

}
