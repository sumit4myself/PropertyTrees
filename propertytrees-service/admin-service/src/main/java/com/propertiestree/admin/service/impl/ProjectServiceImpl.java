
package com.propertiestree.admin.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.propertiestree.admin.api.model.SearchCriteria;
import com.propertiestree.admin.exception.ProjectNotFoundException;
import com.propertiestree.admin.helper.UUIDGenerator;
import com.propertiestree.admin.repository.ProjectRepository;
import com.propertiestree.admin.repository.UserRepository;
import com.propertiestree.admin.search.SearchPredicateBuilder;
import com.propertiestree.admin.service.ProjectService;
import com.propertiestree.admin.utils.SearchQueryParser;
import com.propertiestree.common.entity.Photo;
import com.propertiestree.common.entity.property.Plan;
import com.propertiestree.common.entity.property.Project;
import com.propertiestree.common.entity.property.Property;
import com.querydsl.core.types.Predicate;

@Service
public class ProjectServiceImpl implements ProjectService {

	@Autowired
	private ProjectRepository projectRepository;

	@Autowired
	private UUIDGenerator uuidGenerator;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	@Qualifier("projectSearchPredicateBuilder")
	private SearchPredicateBuilder predicateBuilder;

	@Override
	public Project getProject(String uuid) {
		return projectRepository.findByUuid(uuid).orElseThrow(() -> new ProjectNotFoundException(uuid));
	}

	@Override
	public Page<Project> searchNewProjects(String searchQuery, Pageable pageable) {
		List<SearchCriteria> criteria = SearchQueryParser.parse(searchQuery);
		Predicate searchPredicate = predicateBuilder.build(criteria);
		return projectRepository.findAll(searchPredicate, pageable);
	}

	@Override
	public Project addProject(Project project) {

		project.getBanner().setUuid(uuidGenerator.nextLargeUID());
		project.getBanner().getPhoto().setUuid(uuidGenerator.nextLargeUID());
		project.setUser(userRepository.findOne(project.getUser().getId()));
		for (Photo gallery : project.getGallery()) {
			gallery.setUuid(uuidGenerator.nextLargeUID());
		}
		
		for (Plan plan : project.getPlans()) {
			plan.getFloorPlan().setUuid(uuidGenerator.nextLargeUID());
		}
		
		for (Property prop : project.getProperties()) {
			for(Photo p :prop.getPhotos()) {
				p.setUuid(uuidGenerator.nextLargeUID());
			}
			for(Photo p : prop.getFeatures().getPhotos()) {
				p.setUuid(uuidGenerator.nextLargeUID());
			}
		}
		
		for (Property prop : project.getProperties()) {
			for(Photo p : prop.getFeatures().getPhotos()) {
				p.setUuid(uuidGenerator.nextLargeUID());
			}
		}


		return projectRepository.save(project);
	}

	@Override
	public Project updateProject(Project project) {
		project.setId(projectRepository.findByUuid(project.getUuid())
				.orElseThrow(() -> new ProjectNotFoundException(project.getUuid())).getId());
		return projectRepository.save(project);
	}

	@Override
	public void deleteProject(String uuid) {
		projectRepository.deleteByUuid(uuid);
	}

}
