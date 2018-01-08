angular.module('altairApp').service('RoleHierarchyeService', [ '$http', 'variables', function($http, variables) {
	var service = {};

	service.findByLevel = function(level) {
		return $http.get(variables.roleHierarchyServiceUrl + "/findByLevel/" + level);
	};

	service.findAllSubordinate = function(level) {
		return $http.get(variables.roleHierarchyServiceUrl + "/findAllSubordinate/" + level);
	};

	return service;
} ]);