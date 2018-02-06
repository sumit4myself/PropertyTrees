package com.propertiestree.admin.service;

import java.util.List;

import com.propertiestree.common.entity.ask.Question;

public interface AskService {

	void saveQuestion(Question question);

	List<Question> findQuestionByUserUUId(String uuid);

}
