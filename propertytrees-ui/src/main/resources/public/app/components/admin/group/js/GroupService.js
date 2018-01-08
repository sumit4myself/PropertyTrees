angular.module('altairApp').service('GroupService', [ '$http', 'variables', function ($http, variables) {
  var service = {};
  service.save = function (data) {
    return $http.post(variables.groupServiceUrl, data);
  };
  service.update = function (id, data) {
    return $http.put(variables.groupServiceUrl + id, data);
  };

  service.find = function (id, viewName) {
    var url = variables.groupServiceUrl + "/" + id;
    if (viewName) {
      url += "?RESPONSE_VIEW=" + viewName;
    }
    return $http.get(url);
  };

  service.findAll = function (page, size, sort, viewName) {
    var finalUrl = variables.groupServiceUrl + "?RESPONSE_VIEW=" + viewName;
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

  service.findByIds = function (ids, viewName) {
    return $http.get(variables.groupServiceUrl + "/findByIds/" + ids + "?RESPONSE_VIEW=" + viewName);
  };

  service.findAssignedGroup = function (userId, viewName) {
    return $http.get(variables.groupServiceUrl + "/findAssignedGroup/"+userId+"?RESPONSE_VIEW=" + viewName);
  };

  service.search = function (filter, viewName) {
    var url = variables.groupServiceUrl + "/search";
    if (viewName) {
      url += "?RESPONSE_VIEW=" + viewName;
    }
    return $http.post(url, filter);
  };

  service.changeStatus = function (id, status) {
    return $http.patch(variables.groupServiceUrl + id + "/changeStatus?status=" + status);
  }
  return service;
} ]);
