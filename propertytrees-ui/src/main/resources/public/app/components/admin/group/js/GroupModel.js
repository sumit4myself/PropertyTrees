function Group() {
  this.id = null;
  this.name = null;
  this.description = null;
  this.status = "A";
  this.groupMembers = new Array();

  this.copyProperties = function(data) {
    var group = this;
    $.each(data, function(key, value) {
      group[key] = value;
    });
  }
  this.toJson = function() {
    return JSON.stringify(this);
  }

  this.addMembers = function(members) {
    var ignored = [];
    var $this = this;
    angular.forEach(members, function(member , key){
      var found = false;
      angular.forEach($this.groupMembers, function(value , key){
        if(value.memberId == member.memberId && value.memberType == member.memberType && value.groupType == member.groupType){
          found = true;
        }
      });
      if(found){
        ignored.push((member.groupType + " => " + member.memberType + " => " + member.memberName));
      }else{
        $this.groupMembers.push(member);
      }
    });
    return ignored;
  }
}

function GroupMember() {
  this.id = null;
  this.memberId = null;
  this.memberType = null;
  this.groupType = null;
  this.memberName = null;
}
