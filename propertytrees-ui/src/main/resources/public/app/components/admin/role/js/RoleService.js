angular.module('altairApp').service(
	'RoleService',
	[
		'$http',
		'variables',
		function($http, variables) {
			var service = {};

			service.save = function(data) {
				return $http.post(variables.roleServiceUrl, data);
			};

			service.update = function(id, data) {
				return $http.put(variables.roleServiceUrl + id, data);
			};

			service.find = function(id, viewName) {
				var url = variables.roleServiceUrl + "/" + id;
				if (viewName) {
					url += "?RESPONSE_VIEW=" + viewName;
				}
				return $http.get(url);
			};

			service.findByLevel = function(level, viewName) {
				var url = variables.roleServiceUrl + "/findByLevel/" + level;
				if (viewName) {
					url += "?RESPONSE_VIEW=" + viewName;
				}
				return $http.get(url);
			};
			
			service.findByType = function(type,viewName) {
				var url = variables.roleServiceUrl + "/findByType/" +type;
				if (viewName) {
					url += "?RESPONSE_VIEW=" + viewName;
				}
				return $http.get(url);
			};
			

			service.findAllSubordinate = function(level, viewName) {
				var url = variables.roleServiceUrl + "/findAllSubordinate/"
					+ level;
				if (viewName) {
					url += "?RESPONSE_VIEW=" + viewName;
				}
				return $http.get(url);
			};

			service.findAll = function(page, size, sort, viewName) {
				var finalUrl = variables.roleServiceUrl + "?RESPONSE_VIEW="
					+ viewName;
				finalUrl += "&page=" + page;
				finalUrl += "&size=" + size;
				if (sort != null && sort.length > 0) {
					$(sort).each(function() {
						finalUrl += "&sort=";
						finalUrl += this;
					});
				}
				return $http.get(finalUrl);
			};

			service.search = function(filter, viewName) {
				var url = variables.roleServiceUrl + "/search";
				if (viewName) {
					url += "?RESPONSE_VIEW=" + viewName;
				}
				return $http.post(url, filter);
			};

			service.changeStatus = function(id, status) {
				return $http.patch(variables.roleServiceUrl + id
					+ "/changeStatus?status=" + status);
			}

			return service;
		}]);