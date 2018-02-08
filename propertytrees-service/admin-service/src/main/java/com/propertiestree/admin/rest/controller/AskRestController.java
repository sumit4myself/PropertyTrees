package com.propertiestree.admin.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.AskService;
import com.propertiestree.common.entity.ask.Question;

@RestController
@RequestMapping("/ask")
public class AskRestController {
	
	@Autowired
	private AskService askService;
	
	
	@PostMapping("/q")
	public void postQuestion(@RequestBody Question question) {
		askService.saveQuestion(question);
	}
	
	@GetMapping("/q/{uuid}")
	public List<Question> listQuestion(@PathVariable("uuid") String uuid) {
		return askService.findQuestionByUserUUId(uuid);
	}
	
	@PostMapping("/ans/{uuid}")
	public List<Question> postAnswer() {
		//TODO: need implement
		return null;
	}
	
	

}
