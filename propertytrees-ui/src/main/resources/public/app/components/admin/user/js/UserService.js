angular.module('altairApp').service('UserService', [ '$http', 'variables', function ($http, variables) {

  var service = {};
  service.save = function (data) {
    return $http.post(variables.userServiceUrl, data);
  };
  service.update = function (id, data) {
    return $http.put(variables.userServiceUrl + "/" + id, data);
  };

  service.find = function (id, viewName) {
    var url = variables.userServiceUrl + "/" + id;
    if (viewName) {
      url += "?RESPONSE_VIEW=" + viewName;
    }
    return $http.get(url);
  };

  service.isUnique = function (id, property, value) {
    var finalUrl = variables.userServiceUrl + "/isUnique?property=" + property + "&value=" + value;
    if (id) {
      finalUrl += "&id=" + id;
    }
    return $http.get(finalUrl);
  };

  service.findAll = function (page, size, sort, viewName) {
    var finalUrl = variables.userServiceUrl + "?RESPONSE_VIEW=" + viewName;
    finalUrl += "&page=" + page;
    finalUrl += "&size=" + size;
    if (sort != null && sort.length > 0) {
      $(sort).each(function () {
        finalUrl += "&sort=";
        finalUrl += this;
      });
    }
    return $http.get(finalUrl);
  };

  service.search = function (filter, viewName) {
    var url = variables.userServiceUrl + "/search";
    if (viewName) {
      url += "?RESPONSE_VIEW=" + viewName;
    }
    return $http.post(url, filter);
  };

  service.changeStatus = function (id, status) {
    return $http.patch(variables.userServiceUrl + "/" + id + "/changeStatus?status=" + status);
  };

  service.asignRole = function (id, roles) {
    return $http.patch(variables.userServiceUrl + "/" + id + "/asignRole?roles=" + roles);
  };

  service.authenticate = function (data) {
    return $http.post(variables.userServiceUrl + "/authenticate?RESPONSE_VIEW=User.AccountDetails", data);
  };

  service.forgotPassword = function (data) {
    return $http.post(variables.userServiceUrl + "/forgotPassword", data);
  };
  service.sendPassword = function (data) {
    return $http.get(variables.userServiceUrl + "/sendPassword/" + data);
  };

  service.assignGroups = function (id, groupIds) {
    return $http.patch(variables.userServiceUrl + "/" + id + "/assignGroups?groupIds=" + groupIds);
  };

  service.assignRoles = function (id, roleIds) {
    return $http.patch(variables.userServiceUrl + "/" + id + "/assignRoles?roleIds=" + roleIds);
  };

  return service;
} ]);
