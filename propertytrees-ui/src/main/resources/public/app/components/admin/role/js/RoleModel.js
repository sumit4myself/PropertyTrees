function Role() {
	this.id = null;
	this.name = null;
	this.description = null;
	this.status = "A";
	this.permissions = new Array();
	this.defaultPage = null
	this.copyProperties = function(data) {
		var role = this;
		$.each(data, function(key, value) {
			role[key] = value;
		});
	}
	this.setPermissions = function(tempPermissions) {
		var role = this;
		role.permissions = new Array();
		$.each(tempPermissions, function(key, val) {
			if (val != null) {
				role.permissions.push({
					"id" : val
				});
			}
		});
	}
	this.getPermissions = function() {
		var tempPermissions = new Array();
		$.each(this.permissions, function(key, permission) {
			tempPermissions[permission.id] = permission.id;
		});
		return tempPermissions;
	}
	this.toJson = function() {
		var role = this;
		$.each(this.tempPermissions, function(key, val) {
			if (val != null) {
				var permission = new Object();
				permission.id = val;
				role.permissions.push(permission);
			}
		});
		return JSON.stringify(role);
	}
}