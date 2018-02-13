
package com.propertiestree.admin.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.exception.ProjectNotFoundException;
import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.ProjectRepository;
import com.propertiestree.admin.service.ProjectService;
import com.propertiestree.common.entity.Photo;
import com.propertiestree.common.entity.property.Project;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	@Autowired
	private UUIDGenerator uuidGenerator;

	@Override
	public Project getProject(String uuid) {
		return projectRepository.findByUuid(uuid).orElseThrow(() -> new ProjectNotFoundException(uuid));
	}

	@Override
	public Page<Project> searchNewProjects(String searchQuery, Pageable pageable) {
		return null;
	}

	@Override
	public Project addProject(Project project) {
		
		project.getBanner().setUuid(uuidGenerator.nextLargeUID());
		project.getBanner().getPhoto().setUuid(uuidGenerator.nextLargeUID());
		
		for(Photo gallery : project.getGallery()) {
			gallery.setUuid(uuidGenerator.nextLargeUID());
		}
		
		return projectRepository.save(project);
	}

}
