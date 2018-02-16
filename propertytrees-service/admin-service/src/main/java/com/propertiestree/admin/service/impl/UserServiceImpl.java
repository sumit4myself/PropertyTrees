package com.propertiestree.admin.service.impl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.api.model.SearchCriteria;
import com.propertiestree.admin.exception.UserNotFoundException;
import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.search.SearchPredicateBuilder;
import com.propertiestree.admin.service.UserService;
import com.propertiestree.admin.utils.SearchQueryParser;
import com.propertiestree.common.entity.User;
import com.propertiestree.common.model.UserModel;
import com.querydsl.core.types.Predicate;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private UserRepository repository;
	@Autowired
	private UUIDGenerator uuidGenerator;
	
	@Autowired
	@Qualifier("userSearchPredicateBuilder")
	private SearchPredicateBuilder predicateBuilder;

	@Override
	public User register(UserModel registration) {
		User user = modelMapper.map(registration, User.class);
		user.setUuid(uuidGenerator.nextLargeUID());
		return repository.save(user);
	}

	@Override
	public void updateProfile(String uuid, User updatedUser) {
		updatedUser.setId(repository.findByUuid(uuid).orElseThrow(() -> new UserNotFoundException(uuid)).getId());
		repository.save(updatedUser);
	}

	@Override
	public void changePassword(String uuid, String updatedPassword) {

	}
	
	@Override
	public Page<User> search(String searchQuery, Pageable pageable) {
		List<SearchCriteria> criteria = SearchQueryParser.parse(searchQuery);
		Predicate searchPredicate = predicateBuilder.build(criteria);
		return  repository.findAll(searchPredicate, pageable);
	}

}
