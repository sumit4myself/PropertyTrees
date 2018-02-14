package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.AskRepository;
import com.propertiestree.admin.service.AskService;
import com.propertiestree.common.entity.ask.Question;

@Service
public class AskServiceImpl implements AskService{

	@Autowired
	AskRepository askRepository; 
	@Autowired
	private UUIDGenerator uuidGenerator;
	
	@Override
	public void saveQuestion(Question question) {
		question.setUuid(uuidGenerator.nextLargeUID());
		askRepository.save(question);
	}

	@Override
	public Page<Question> search(String searchQuery, Pageable pageable) {
		return null;
	}
	
}
