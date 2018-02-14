
package com.propertiestree.admin.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.propertiestree.admin.service.ProjectService;
import com.propertiestree.common.entity.property.Project;

@RestController
public class ProjectRestController extends AbstractAdminController {

	@Autowired
	private ProjectService service;
	
	@PostMapping(path = PROPERTY_NEW_PROJECT_ADD_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Project> addProject(@RequestBody Project project) {
		return ResponseEntity.ok(service.addProject(project));
	}
	
	@PutMapping(path = PROPERTY_NEW_PROJECT_ADD_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Project> updateProject(@RequestBody Project project) {
		return ResponseEntity.ok(service.updateProject(project));
	}

	@GetMapping(path = PROPERTY_NEW_PROJECTS_UUID_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Project> getProject(@PathVariable("uuid") String uuid) {
		return ResponseEntity.ok(service.getProject(uuid));
	}
	
	@DeleteMapping(path = PROPERTY_NEW_PROJECTS_UUID_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> deleteProject(@PathVariable("uuid") String uuid) {
		service.deleteProject(uuid);
		return ResponseEntity.ok("Success");
	}

	@GetMapping(path = PROPERTY_NEW_PROJECTS_URI, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Page<Project>> searchNewProjects(
			@RequestParam("q") String searchQuery, Pageable pageable) {
		return ResponseEntity.ok(service.searchNewProjects(searchQuery, pageable));
	}
}
