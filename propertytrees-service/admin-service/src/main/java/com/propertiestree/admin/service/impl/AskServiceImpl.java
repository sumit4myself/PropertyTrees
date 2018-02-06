package com.propertiestree.admin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.AskRepository;
import com.propertiestree.admin.service.AskService;
import com.propertiestree.common.entity.ask.Question;

@Transactional
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
	public List<Question> findQuestionByUserUUId(String uuid) {
		return askRepository.findAllQuestionByUserUUId(uuid);
	}
}
