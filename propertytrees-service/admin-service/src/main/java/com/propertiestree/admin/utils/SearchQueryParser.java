package com.propertiestree.admin.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import com.propertiestree.admin.api.model.SearchCriteria;
import com.propertiestree.admin.exception.InvalidSearchQueryException;

public class SearchQueryParser {

	private static final Pattern SEARCH_PATTERN = Pattern.compile("(\\w+?)(=|<|>|~| like )([\\w\\s]+);");
	private static final String CRITERIA_SPLITTER = ";";

	public static List<SearchCriteria> parse(String query) throws InvalidSearchQueryException {
		List<SearchCriteria> searchCriteriaList = new ArrayList<>();
		Matcher matcher = SEARCH_PATTERN.matcher(query + CRITERIA_SPLITTER);
		while (matcher.find()) {
			searchCriteriaList.add(new SearchCriteria(matcher.group(1), matcher.group(2), matcher.group(3)));
		}
		if (searchCriteriaList.size() == 0)
			throw new InvalidSearchQueryException(query);
		return searchCriteriaList;
	}
}
