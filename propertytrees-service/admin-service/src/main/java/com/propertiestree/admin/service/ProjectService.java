
package com.propertiestree.admin.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.propertiestree.common.entity.property.Project;

public interface ProjectService {

	Project getProject(String uuid);

	Page<Project> searchNewProjects(String searchQuery, Pageable pageable);

}
