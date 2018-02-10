package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.ask.Question;

public interface AskService {

	void saveQuestion(Question question);

	Page<Question> search(String searchQuery, Pageable pageable);

}
