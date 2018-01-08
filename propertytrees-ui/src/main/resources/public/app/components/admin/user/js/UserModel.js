function User() {
  this.id = null;
  this.fullName = null;
  this.userName = null;
  this.mobile = null;
  this.email = null;
  this.password = null;
  this.status = "A";
  this.schoolId = null;
  this.branchId = null;
  this.type = "ADMIN"
  this.roleList = new Array();
  this.groupList = new Array();
  this.tempGroupList = new Array();
  this.tempRoleList = new Array();
  this.usersServiceMap = new UsersServiceMap();
  this.systemUser = false;

  this.copyProperties = function (data) {
    var user = this;
    $.each(data, function (key, value) {
      if ("roleList" == key) {
        user.tempRoleList = new Array();
        $.each(value, function (key, role) {
          user.tempRoleList.push(role.id);
        });
      } else if ("groupList" == key) {
        user.tempGroupList = new Array();
        $.each(value, function (key, group) {
          user.tempGroupList.push(group.id);
        });
      } else {
        user[key] = value;
      }
    });
  }
  this.toJson = function () {
    var user = this;
    user.roleList = new Array();
    $.each(this.tempRoleList, function (key, val) {
      if (val != null) {
        var role = new Object();
        role.id = val;
        user.roleList.push(role);
      }
    });
    return JSON.stringify(user);
  }
}

function UsersServiceMap() {
  this.service = "ADMIN";
  this.module = "USER";
  this.remoteName = "";
  this.remoteId = -1;
}
