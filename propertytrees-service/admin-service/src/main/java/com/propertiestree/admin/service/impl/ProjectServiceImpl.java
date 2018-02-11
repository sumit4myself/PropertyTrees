
package com.propertiestree.admin.service.impl;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.service.ProjectService;
import com.propertiestree.common.entity.property.Project;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Override
	public Project getProject(String uuid) {
		return null;
	}

	@Override
	public Page<Project> searchNewProjects(String searchQuery, Pageable pageable) {
		return null;
	}

}
