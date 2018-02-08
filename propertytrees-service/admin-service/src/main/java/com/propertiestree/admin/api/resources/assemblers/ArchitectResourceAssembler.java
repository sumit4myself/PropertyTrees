package com.propertiestree.admin.api.resources.assemblers;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static com.propertiestree.admin.rest.controller.AbstractAdminController.ARCHITECT_BASE_URI;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.mvc.ResourceAssemblerSupport;
import org.springframework.stereotype.Component;

import com.propertiestree.admin.rest.controller.ArchitectRestController;
import com.propertiestree.common.entity.Architect;

@SuppressWarnings("rawtypes")
@Component
public class ArchitectResourceAssembler extends ResourceAssemblerSupport<Architect, Resource> {

	public ArchitectResourceAssembler() {
		super(ArchitectRestController.class, Resource.class);
	}

	@Override
	public Resource<Architect> toResource(Architect architect) {
		return new Resource<>(architect, linkTo(ArchitectRestController.class).slash(ARCHITECT_BASE_URI)
				.slash(architect.getUuid()).withSelfRel());
	}
}
