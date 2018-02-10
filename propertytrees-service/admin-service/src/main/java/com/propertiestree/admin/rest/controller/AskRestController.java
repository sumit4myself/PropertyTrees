package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.AskService;
import com.propertiestree.common.entity.ask.Question;

@RestController
public class AskRestController extends AbstractAdminController {

	@Autowired
	private AskService askService;

	@PostMapping(value = QUESTION_BASE_URI)
	public ResponseEntity<Void> postQuestion(@RequestBody Question question) {
		askService.saveQuestion(question);
		return ResponseEntity.ok().build();
	}

	@GetMapping(value = QUESTION_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<Question>> searchQuestions(@RequestParam("q") String searchQuery, Pageable pageable) {
		return ResponseEntity.ok(askService.search(searchQuery, pageable));
	}

}
