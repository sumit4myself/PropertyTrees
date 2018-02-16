
package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.AgentService;
import com.propertiestree.common.entity.Agent;

@RestController
public class AgentRestController extends AbstractAdminController {

	@Autowired
	private AgentService service;

	@GetMapping(path = AGENT_UUID_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Agent> getAgent(@PathVariable("uuid") String uuid) {
		return ResponseEntity.ok(service.getAgent(uuid));
	}

	@GetMapping(path = AGENT_SEARCH_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<Agent>> searchAgents(@RequestParam("q") String searchQuery, Pageable pageable) {
		//TODO:
		return ResponseEntity.ok(service.search(searchQuery, pageable));
	}

	@PutMapping(value = AGENT_BASE_URI, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> updateProfile(@RequestBody Agent agent) {
		service.updateProfile(agent.getUuid(), agent);
		return ResponseEntity.ok("Success");
	}

}
