
package com.propertiestree.admin.rest.controller;

import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/v1")
public class AbstractAdminController {

	public static final String PROPERTY_BASE_URI = "/property";

	public static final String PROPERTY_SEARCH_URI = PROPERTY_BASE_URI + "/search";

	public static final String PROPERTY_UUID_URI = PROPERTY_BASE_URI + "/{uuid}";

	public static final String PROPERTY_POST_URI = PROPERTY_BASE_URI + "/post";

	public static final String PROPERTY_GALLERY_URI = PROPERTY_BASE_URI + "/gallery";

	public static final String PROPERTY_NEW_PROJECTS_URI = PROPERTY_BASE_URI
			+ "/projects";
	public static final String PROPERTY_NEW_PROJECT_ADD_URI = PROPERTY_BASE_URI
			+ "/project";

	public static final String PROPERTY_NEW_PROJECTS_UUID_URI = PROPERTY_NEW_PROJECTS_URI
			+ "/{uuid}";

	public static final String PROPERTY_NEW_PROJECTS_SEARCH_URI = PROPERTY_NEW_PROJECTS_URI;

	public static final String PROPERTY_LOCATION_URI = "/location/city";

	public static final String USER_BASE_URI = "/user";

	public static final String USER_REGISTRATION_URI = USER_BASE_URI + "/register";
	
	public static final String USER_SEARCH_URI = USER_BASE_URI + "/search";

	public static final String USER_PROFILE_URI = USER_BASE_URI + "/profile" + "/{uuid}";

	public static final String USER_FORGET_PASSWORD_URI = USER_BASE_URI + "/password"
			+ "/{uuid}";

	public static final String DEALER_BASE_URI = "/dealer";

	public static final String DEALER_SEARCH_URI = DEALER_BASE_URI + "/search";

	public static final String DEALER_UUID_URI = DEALER_BASE_URI + "/{uuid}";

	public static final String ARCHITECT_BASE_URI = "/architect";

	public static final String ARCHITECT_SEARCH_URI = ARCHITECT_BASE_URI + "/search";

	public static final String ARCHITECT_UUID_URI = ARCHITECT_BASE_URI + "/{uuid}";

	public static final String ASTROLOGER_BASE_URI = "/astrologer";

	public static final String ASTROLOGER_SEARCH_URI = ASTROLOGER_BASE_URI + "/search";

	public static final String ASTROLOGER_UUID_URI = ASTROLOGER_BASE_URI + "/{uuid}";

	public static final String CONSULTANT_BASE_URI = "/consultant";

	public static final String CONSULTANT_SEARCH_URI = CONSULTANT_BASE_URI + "/search";

	public static final String CONSULTANT_UUID_URI = CONSULTANT_BASE_URI + "/{uuid}";

	public static final String QUESTION_BASE_URI = "/ask";

	public static final String QUESTION_SEARCH_URI = QUESTION_BASE_URI + "/search";

	public static final String QUESTION_UUID_URI = CONSULTANT_BASE_URI + "/{uuid}";
	
	public static final String AGENT_BASE_URI = "/agent";

	public static final String AGENT_SEARCH_URI = AGENT_BASE_URI + "/search";

	public static final String AGENT_UUID_URI = AGENT_BASE_URI + "/{uuid}";

}