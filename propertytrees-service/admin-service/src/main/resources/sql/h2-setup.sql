INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Add','ADD','uk-icon-plus' , '1');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('View','VIEW', 'uk-icon-small uk-icon-hover uk-icon-eye md-color-indigo-500', '2');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Edit', 'EDIT', 'uk-icon-small uk-icon-hover uk-icon-edit md-color-blue-500', '3');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Delete','DELETE', 'uk-icon-small uk-icon-hover uk-icon-trash md-color-red-500', '4');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Activate','ACTIVATE', 'uk-icon-small uk-icon-hover uk-icon-check-circle md-color-cyan-500', '5');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Deactivate','DEACTIVATE', 'uk-icon-small uk-icon-hover uk-icon-times-circle md-color-pink-500', '6');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Start','START', 'uk-icon-small uk-icon-hover uk-icon-check-circle md-color-cyan-500', '7');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Close','CLOSE', 'uk-icon-small uk-icon-hover uk-icon-times-circle md-color-pink-500', '8');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Publish Result','PUBLISH_RESULT', 'uk-icon-small uk-icon-hover uk-icon-archive md-color-cyan-500', '9');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Add Result','ADD_RESULT', 'uk-icon-small uk-icon-hover uk-icon-plus-circle md-color-cyan-500', '10');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Assign Group','ASSIGN_GROUP', 'uk-icon-small uk-icon-hover uk-icon-group md-color-brown-500', '11');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Assign Role','ASSIGN_ROLE', 'uk-icon-small uk-icon-hover uk-icon-chain md-color-teal-500', '12');
INSERT INTO privilege(privilege,action,icon_class,sort_index) VALUES ('Assign','ASSIGN', 'uk-icon-small uk-icon-hover uk-icon-chain md-color-brown-500', '13');

INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE871;', null, 1, 'Dashboards', null,'A');
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.dashboards.system' , 1, 'System Health', (select id  as menu_id from menu where name = 'Dashboards'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.dashboards.system',(select id  as menu_id from menu where link = 'restricted.dashboards.system'),( select id from privilege where privilege = 'View' ));
        

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.dashboards' , 2, 'Dashboard', (select id  as menu_id from menu where name = 'Dashboards'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.dashboards',(select id  as menu_id from menu where link = 'restricted.dashboards'),( select id from privilege where privilege = 'View' ));
	
INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE32A;', null , 2, 'Users', null,'A');
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.admin.manageRole' , 1, 'Role', (select id  as menu_id from menu where name = 'Users'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.role',(select id  as menu_id from menu where link = 'restricted.admin.manageRole' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.role({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.admin.manageRole' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.role({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.admin.manageRole'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageRole'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageRole'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageRole'),( select id from privilege where privilege = 'Deactivate' ));
   				
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.admin.manageUser' , 2, 'User', (select id  as menu_id from menu where name = 'Users'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.user',(select id  as menu_id from menu where link = 'restricted.admin.manageUser' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.user({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.admin.manageUser' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.user({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.admin.manageUser'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.user({id_key : id_val , mode : ''assign-group''})',(select id  as menu_id from menu where link = 'restricted.admin.manageUser'),( select id from privilege where privilege = 'Assign Group' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.user({id_key : id_val , mode : ''assign-role''})',(select id  as menu_id from menu where link = 'restricted.admin.manageUser'),( select id from privilege where privilege = 'Assign Role' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageUser'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageUser'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageUser'),( select id from privilege where privilege = 'Deactivate' ));
			
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.admin.manageGroup' , 3, 'Group', (select id  as menu_id from menu where name = 'Users'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.group',(select id  as menu_id from menu where link = 'restricted.admin.manageGroup' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.group({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.admin.manageGroup' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.admin.group({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.admin.manageGroup'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageGroup'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageGroup'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.admin.manageGroup'),( select id from privilege where privilege = 'Deactivate' ));

INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE80C;', null , 3, 'Schools', null,'A');
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageSchool' , 1, 'School', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.school',(select id  as menu_id from menu where link = 'restricted.schools.manageSchool' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.school({id_key : id_val , mode : ''view'' })',(select id  as menu_id from menu where link = 'restricted.schools.manageSchool' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.school({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageSchool'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSchool'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSchool'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSchool'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageBranch' , 2, 'Branch', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.branch',(select id  as menu_id from menu where link = 'restricted.schools.manageBranch' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.branch({id_key : id_val , mode : ''view'' })',(select id  as menu_id from menu where link = 'restricted.schools.manageBranch' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.branch({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageBranch'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBranch'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBranch'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBranch'),( select id from privilege where privilege = 'Deactivate' ));

	 INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageSessionYear' , 3, 'Session Year', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.sessionYear',(select id  as menu_id from menu where link = 'restricted.schools.manageSessionYear' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.sessionYear({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageSessionYear'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSessionYear'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('start(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSessionYear'),( select id from privilege where privilege = 'Start' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('close(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSessionYear'),( select id from privilege where privilege = 'Close' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageTermDetails' , 4, 'Term Details', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.termDetails',(select id  as menu_id from menu where link = 'restricted.schools.manageTermDetails' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.termDetails({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageTermDetails'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageTermDetails'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('start(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageTermDetails'),( select id from privilege where privilege = 'Start' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('close(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageTermDetails'),( select id from privilege where privilege = 'Close' ));
        
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageCourse' , 5, 'Class', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.course',(select id  as menu_id from menu where link = 'restricted.schools.manageCourse' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.course({id_key : id_val , mode : ''view'' })',(select id  as menu_id from menu where link = 'restricted.schools.manageCourse' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.course({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageCourse'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageCourse'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageCourse'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageCourse'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageBatch' , 6, 'Section', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.batch',(select id  as menu_id from menu where link = 'restricted.schools.manageBatch' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.batch({id_key : id_val , mode : ''view'' })',(select id  as menu_id from menu where link = 'restricted.schools.manageBatch' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.batch({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageBatch'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBatch'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBatch'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBatch'),( select id from privilege where privilege = 'Deactivate' ));
        
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageSubject' , 7, 'Subject', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.subject',(select id  as menu_id from menu where link = 'restricted.schools.manageSubject' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.subject({id_key : id_val , mode : ''view'' })',(select id  as menu_id from menu where link = 'restricted.schools.manageSubject' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.subject({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageSubject'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSubject'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSubject'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSubject'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageSyllabus' , 8, 'Syllabus', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.syllabus',(select id  as menu_id from menu where link = 'restricted.schools.manageSyllabus' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.syllabus({id_key : id_val , mode : ''view'' })',(select id  as menu_id from menu where link = 'restricted.schools.manageSyllabus' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.syllabus({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageSyllabus'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSyllabus'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSyllabus'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageSyllabus'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.schools.manageBatchTimetable' , 9, 'Timetable', (select id  as menu_id from menu where name = 'Schools'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.batchTimetable',(select id  as menu_id from menu where link = 'restricted.schools.manageBatchTimetable' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.batchTimetable({id_key : id_val , mode : ''view'' })',(select id  as menu_id from menu where link = 'restricted.schools.manageBatchTimetable' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.schools.batchTimetable({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.schools.manageBatchTimetable'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBatchTimetable'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBatchTimetable'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.schools.manageBatchTimetable'),( select id from privilege where privilege = 'Deactivate' ));

			
INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE87C;', null , 4, 'Staffs', null,'A');
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.staffs.manageDesignation' , 1, 'Designation', (select id  as menu_id from menu where name = 'Staffs'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.designation',(select id  as menu_id from menu where link = 'restricted.staffs.manageDesignation' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.designation({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.staffs.manageDesignation' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.designation({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.staffs.manageDesignation'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageDesignation'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageDesignation'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageDesignation'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.staffs.manageDepartment' , 2, 'Department', (select id  as menu_id from menu where name = 'Staffs'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.department',(select id  as menu_id from menu where link = 'restricted.staffs.manageDepartment' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.department({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.staffs.manageDepartment' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.department({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.staffs.manageDepartment'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageDepartment'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageDepartment'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageDepartment'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.staffs.manageStaff' , 3, 'Staff', (select id  as menu_id from menu where name = 'Staffs'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.staff',(select id  as menu_id from menu where link = 'restricted.staffs.manageStaff' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.staff({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.staffs.manageStaff' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.staffs.staff({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.staffs.manageStaff'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageStaff'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageStaff'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.staffs.manageStaff'),( select id from privilege where privilege = 'Deactivate' ));

INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE53E;', null , 5, 'Fees', null,'A');
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.fees.manageFeeCategory' , 1, 'Fee Category', (select id  as menu_id from menu where name = 'Fees'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.feeCategory',(select id  as menu_id from menu where link = 'restricted.fees.manageFeeCategory' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.feeCategory({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.fees.manageFeeCategory' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.feeCategory({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.fees.manageFeeCategory'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageFeeCategory'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageFeeCategory'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageFeeCategory'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.fees.manageWaiver' , 2, 'Fee Waiver', (select id  as menu_id from menu where name = 'Fees'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.waiver',(select id  as menu_id from menu where link = 'restricted.fees.manageWaiver' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.waiver({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.fees.manageWaiver' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.waiver({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.fees.manageWaiver'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageWaiver'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageWaiver'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageWaiver'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.fees.manageFee' , 3, 'Fee Manager', (select id  as menu_id from menu where name = 'Fees'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.fee',(select id  as menu_id from menu where link = 'restricted.fees.manageFee' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.fee({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.fees.manageFee' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.fee({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.fees.manageFee'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageFee'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageFee'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageFee'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.fees.manageReceipt' , 4, 'Fee Receipt', (select id  as menu_id from menu where name = 'Fees'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.receipt',(select id  as menu_id from menu where link = 'restricted.fees.manageReceipt' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.receipt({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.fees.manageReceipt' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.fees.receipt({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.fees.manageReceipt'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageReceipt'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageReceipt'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.fees.manageReceipt'),( select id from privilege where privilege = 'Deactivate' ));

	

INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE8D3;', null , 6, 'Students', null,'A');
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.students.manageStudent' , 1, 'Student', (select id  as menu_id from menu where name = 'Students'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.student',(select id  as menu_id from menu where link = 'restricted.students.manageStudent' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.student({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.students.manageStudent' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.student({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.students.manageStudent'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageStudent'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageStudent'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageStudent'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.students.manageAdmissionQuota' , 2, 'Admission Quota', (select id  as menu_id from menu where name = 'Students'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.admissionQuota',(select id  as menu_id from menu where link = 'restricted.students.manageAdmissionQuota' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.admissionQuota({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.students.manageAdmissionQuota' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.admissionQuota({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.students.manageAdmissionQuota'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageAdmissionQuota'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageAdmissionQuota'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageAdmissionQuota'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.students.manageAdmission' , 3, 'Admission', (select id  as menu_id from menu where name = 'Students'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.admission',(select id  as menu_id from menu where link = 'restricted.students.manageAdmission' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.admission({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.students.manageAdmission' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.admission({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.students.manageAdmission'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageAdmission'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageAdmission'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.students.manageAdmission'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.students.assignElectiveSubject' , 4, 'Assign Elective Subject', (select id  as menu_id from menu where name = 'Students'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.students.assignElectiveSubject',(select id  as menu_id from menu where link = 'restricted.students.assignElectiveSubject' ),( select id from privilege where privilege = 'Assign' ));

INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE0E0;', null , 7, 'Exam & Result', null,'A');
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.exams.manageExam' , 1, 'Exam', (select id  as menu_id from menu where name = 'Exam & Result'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.exam',(select id  as menu_id from menu where link = 'restricted.exams.manageExam' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.exam({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.exams.manageExam' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.exam({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.exams.manageExam'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageExam'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageExam'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageExam'),( select id from privilege where privilege = 'Deactivate' ));
	
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.exams.manageResult' , 2, 'Result', (select id  as menu_id from menu where name = 'Exam & Result'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.result({id_key : id_val , mode : ''add''})',(select id  as menu_id from menu where link = 'restricted.exams.manageResult' ),( select id from privilege where privilege = 'Add Result' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.result({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.exams.manageResult' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.result({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.exams.manageResult'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageResult'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageResult'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageResult'),( select id from privilege where privilege = 'Deactivate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('publish(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageResult'),( select id from privilege where privilege = 'Publish Result' ));

    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.exams.assessmentRatingConfiguration' , 3, 'Assessment Rating Configuration', (select id  as menu_id from menu where name = 'Exam & Result'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.assessmentRating',(select id  as menu_id from menu where link = 'restricted.exams.assessmentRatingConfiguration' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.assessmentRating({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.exams.assessmentRatingConfiguration' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.assessmentRating({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.exams.assessmentRatingConfiguration'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.assessmentRatingConfiguration'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.assessmentRatingConfiguration'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.assessmentRatingConfiguration'),( select id from privilege where privilege = 'Deactivate' ));
   
     INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.exams.manageAssessmentConfiguration' , 4, 'Assessment Configuration', (select id  as menu_id from menu where name = 'Exam & Result'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.assessmentConfiguration',(select id  as menu_id from menu where link = 'restricted.exams.manageAssessmentConfiguration' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.assessmentConfiguration({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.exams.manageAssessmentConfiguration' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.assessmentConfiguration({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.exams.manageAssessmentConfiguration'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageAssessmentConfiguration'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageAssessmentConfiguration'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageAssessmentConfiguration'),( select id from privilege where privilege = 'Deactivate' ));
       
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.exams.manageStudentAssessment' , 5, 'Assessment', (select id  as menu_id from menu where name = 'Exam & Result'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.studentAssessment',(select id  as menu_id from menu where link = 'restricted.exams.manageStudentAssessment' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.studentAssessment({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.exams.manageStudentAssessment' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.studentAssessment({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.exams.manageStudentAssessment'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageStudentAssessment'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageStudentAssessment'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.exams.manageStudentAssessment'),( select id from privilege where privilege = 'Deactivate' ));
        
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.exams.viewExam' , 6, 'View Exam', (select id  as menu_id from menu where name = 'Exam & Result'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.viewExam',(select id  as menu_id from menu where link = 'restricted.exams.viewExam' ),( select id from privilege where privilege = 'View' ));
		    
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.exams.viewResult' , 7, 'View Result', (select id  as menu_id from menu where name = 'Exam & Result'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.exams.result.viewResult',(select id  as menu_id from menu where link = 'restricted.exams.viewResult' ),( select id from privilege where privilege = 'View' ));

INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE8D1;', null , 8, 'Inventory', null,'A');

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.inventory.manageBook' , 1, 'Books', (select id  as menu_id from menu where name = 'Inventory'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.book',(select id  as menu_id from menu where link = 'restricted.inventory.manageBook' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.book({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageBook' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.book({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageBook'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageBook'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageBook'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageBook'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.inventory.manageUniform' , 2, 'Uniform', (select id  as menu_id from menu where name = 'Inventory'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.uniform',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniform' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.uniform({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniform' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.uniform({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniform'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniform'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniform'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniform'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.inventory.manageUniformSet' , 3, 'UniformSet', (select id  as menu_id from menu where name = 'Inventory'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.uniformSet',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniformSet' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.uniformSet({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniformSet' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.uniformSet({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniformSet'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniformSet'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniformSet'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageUniformSet'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.inventory.manageBookIssue' , 4, 'BookIssue', (select id  as menu_id from menu where name = 'Inventory'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.bookIssue',(select id  as menu_id from menu where link = 'restricted.inventory.manageBookIssue' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.bookIssue({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageBookIssue' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.bookIssue({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageBookIssue'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageBookIssue'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageBookIssue'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageBookIssue'),( select id from privilege where privilege = 'Deactivate' ));

   INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.inventory.manageOrder' , 5, 'Order', (select id  as menu_id from menu where name = 'Inventory'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.order',(select id  as menu_id from menu where link = 'restricted.inventory.manageOrder' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.order({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageOrder' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.order({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.inventory.manageOrder'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageOrder'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageOrder'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.manageOrder'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.inventory.managePurchageBookBundle' , 6, 'Purchase Book Bundle', (select id  as menu_id from menu where name = 'Inventory'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.purchageBookBundle',(select id  as menu_id from menu where link = 'restricted.inventory.managePurchageBookBundle' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.purchageBookBundle({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.inventory.managePurchageBookBundle' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.inventory.purchageBookBundle({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.inventory.managePurchageBookBundle'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.managePurchageBookBundle'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.managePurchageBookBundle'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.inventory.managePurchageBookBundle'),( select id from privilege where privilege = 'Deactivate' ));

			
  INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE530;', null , 9, 'Transport', null,'A');

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.transport.manageVehicleType' , 1, 'Vehicle Type', (select id  as menu_id from menu where name = 'Transport'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vehicleType',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicleType' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vehicleType({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicleType' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vehicleType({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicleType'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicleType'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicleType'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicleType'),( select id from privilege where privilege = 'Deactivate' ));
	
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.transport.manageVendor' , 2, 'Vendor', (select id  as menu_id from menu where name = 'Transport'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vendor',(select id  as menu_id from menu where link = 'restricted.transport.manageVendor' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vendor({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.transport.manageVendor' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vendor({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.transport.manageVendor'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVendor'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVendor'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVendor'),( select id from privilege where privilege = 'Deactivate' ));
			
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.transport.manageVehicle' , 3, 'Vehicle', (select id  as menu_id from menu where name = 'Transport'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vehicle',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicle' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vehicle({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicle' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.vehicle({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicle'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicle'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicle'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageVehicle'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.transport.manageRoute' , 3, 'Route', (select id  as menu_id from menu where name = 'Transport'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.route',(select id  as menu_id from menu where link = 'restricted.transport.manageRoute' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.route({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.transport.manageRoute' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.transport.route({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.transport.manageRoute'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageRoute'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageRoute'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.transport.manageRoute'),( select id from privilege where privilege = 'Deactivate' ));


INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE7F1;', null , 10, 'Hostels', null,'A');

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.hostel.manageHostel' , 1, 'Hostel', (select id  as menu_id from menu where name = 'Hostels'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.hostel',(select id  as menu_id from menu where link = 'restricted.hostel.manageHostel' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.hostel({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageHostel' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.hostel({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageHostel'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageHostel'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageHostel'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageHostel'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.hostel.manageAssetCategory' , 2, 'Asset Category', (select id  as menu_id from menu where name = 'Hostels'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.assetCategory',(select id  as menu_id from menu where link = 'restricted.hostel.manageAssetCategory' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.assetCategory({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageAssetCategory' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.assetCategory({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageAssetCategory'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageAssetCategory'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageAssetCategory'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageAssetCategory'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.hostel.manageAsset' , 3, 'Asset', (select id  as menu_id from menu where name = 'Hostels'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.asset',(select id  as menu_id from menu where link = 'restricted.hostel.manageAsset' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.asset({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageAsset' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.asset({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageAsset'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageAsset'),( select id from privilege where privilege = 'Delete' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageAsset'),( select id from privilege where privilege = 'Activate' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageAsset'),( select id from privilege where privilege = 'Deactivate' ));


	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.hostel.manageRoomCategory' , 4, 'Room Category', (select id  as menu_id from menu where name = 'Hostels'),'A');
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.roomCategory',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomCategory' ),( select id from privilege where privilege = 'Add' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.roomCategory({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomCategory' ),( select id from privilege where privilege = 'View' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.roomCategory({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomCategory'),( select id from privilege where privilege = 'Edit' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomCategory'),( select id from privilege where privilege = 'Delete' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomCategory'),( select id from privilege where privilege = 'Activate' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomCategory'),( select id from privilege where privilege = 'Deactivate' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.hostel.manageRoom' , 5, 'Room', (select id  as menu_id from menu where name = 'Hostels'),'A');
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.room',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoom' ),( select id from privilege where privilege = 'Add' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.room({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoom' ),( select id from privilege where privilege = 'View' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.room({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoom'),( select id from privilege where privilege = 'Edit' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoom'),( select id from privilege where privilege = 'Delete' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoom'),( select id from privilege where privilege = 'Activate' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoom'),( select id from privilege where privilege = 'Deactivate' ));


INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.hostel.manageRoomAllocation' , 6, 'Room Allocation', (select id  as menu_id from menu where name = 'Hostels'),'A');
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.roomAllocation',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomAllocation' ),( select id from privilege where privilege = 'Add' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.roomAllocation({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomAllocation' ),( select id from privilege where privilege = 'View' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.hostel.roomAllocation({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomAllocation'),( select id from privilege where privilege = 'Edit' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomAllocation'),( select id from privilege where privilege = 'Delete' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomAllocation'),( select id from privilege where privilege = 'Activate' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.hostel.manageRoomAllocation'),( select id from privilege where privilege = 'Deactivate' ));


INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE7F4;', null , 11, 'Notification', null,'A');

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.notifications.manageNotification' , 1, 'Log', (select id  as menu_id from menu where name = 'Notification'),'A');
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.notifications.notification({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.notifications.manageNotification' ),( select id from privilege where privilege = 'View' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.notifications.manageTemplate' , 2, 'Template', (select id  as menu_id from menu where name = 'Notification'),'A');
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.notifications.template',(select id  as menu_id from menu where link = 'restricted.notifications.manageTemplate' ),( select id from privilege where privilege = 'Add' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.notifications.template({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.notifications.manageTemplate' ),( select id from privilege where privilege = 'View' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.notifications.template({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.notifications.manageTemplate'),( select id from privilege where privilege = 'Edit' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.notifications.manageTemplate'),( select id from privilege where privilege = 'Delete' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.notifications.manageTemplate'),( select id from privilege where privilege = 'Activate' ));
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.notifications.manageTemplate'),( select id from privilege where privilege = 'Deactivate' ));
			
	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.notifications.manageBulkNotification' , 3, 'Bulk Notification', (select id  as menu_id from menu where name = 'Notification'),'A');
		INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.notifications.bulkNotification',(select id  as menu_id from menu where link = 'restricted.notifications.manageBulkNotification' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.notifications.bulkNotification({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.notifications.manageBulkNotification' ),( select id from privilege where privilege = 'View' ));
    	INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.notifications.bulkNotification({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.notifications.manageBulkNotification'),( select id from privilege where privilege = 'Edit' ));
       	INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.notifications.manageBulkNotification'),( select id from privilege where privilege = 'Delete' ));
        
INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE14F;', null , 12, 'Attendance & Leave', null,'A');

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStudentHoliday' , 1, 'Student Holiday', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentHoliday',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentHoliday' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentHoliday({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentHoliday' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentHoliday({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentHoliday'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentHoliday'),( select id from privilege where privilege = 'Delete' ));

	INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStaffHoliday' , 2, 'Staff Holiday', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffHoliday',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffHoliday' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffHoliday({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffHoliday' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffHoliday({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffHoliday'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffHoliday'),( select id from privilege where privilege = 'Delete' ));


    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageLeaveType' , 3, 'Leave Type', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.leaveType',(select id  as menu_id from menu where link = 'restricted.attendances.manageLeaveType' ),( select id from privilege where privilege = 'Add' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.leaveType({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageLeaveType' ),( select id from privilege where privilege = 'View' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.leaveType({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageLeaveType'),( select id from privilege where privilege = 'Edit' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageLeaveType'),( select id from privilege where privilege = 'Delete' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageLeaveType'),( select id from privilege where privilege = 'Activate' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageLeaveType'),( select id from privilege where privilege = 'Deactivate' ));
	    
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStaffLeaveDefinition' , 4, 'Staff Leave Definition', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffLeaveDefinition',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveDefinition' ),( select id from privilege where privilege = 'Add' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffLeaveDefinition({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveDefinition' ),( select id from privilege where privilege = 'View' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffLeaveDefinition({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveDefinition'),( select id from privilege where privilege = 'Edit' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveDefinition'),( select id from privilege where privilege = 'Delete' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('activate(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveDefinition'),( select id from privilege where privilege = 'Activate' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('deactivate(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveDefinition'),( select id from privilege where privilege = 'Deactivate' ));
	
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStaffLeaveApply' , 5, 'Staff Leave Apply', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffLeaveApply',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveApply' ),( select id from privilege where privilege = 'Add' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffLeaveApply({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveApply' ),( select id from privilege where privilege = 'View' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffLeaveApply({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveApply'),( select id from privilege where privilege = 'Edit' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffLeaveApply'),( select id from privilege where privilege = 'Delete' ));
	   
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStaffIdentityCard' , 6, 'Staff Identity Card', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffIdentityCard',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffIdentityCard' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffIdentityCard({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffIdentityCard' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.staffIdentityCard({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffIdentityCard'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStaffIdentityCard'),( select id from privilege where privilege = 'Delete' ));

    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.markAttendance' , 7, 'Mark Attendance', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.markAttendance',(select id  as menu_id from menu where link = 'restricted.attendances.markAttendance' ),( select id from privilege where privilege = 'Add' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.markAttendance({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.markAttendance' ),( select id from privilege where privilege = 'View' ));  

    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStudentAttendance' , 8, 'Student Attendance', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentAttendance',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentAttendance' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentAttendance({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentAttendance' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentAttendance({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentAttendance'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentAttendance'),( select id from privilege where privilege = 'Delete' ));
        
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageAdhocAttendance' , 9, 'Adhoc Attendance', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.adhocAttendance',(select id  as menu_id from menu where link = 'restricted.attendances.manageAdhocAttendance' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.adhocAttendance({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageAdhocAttendance' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.adhocAttendance({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageAdhocAttendance'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageAdhocAttendance'),( select id from privilege where privilege = 'Delete' ));

    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageTransportAttendance' , 10, 'Transport Attendance', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.transportAttendance',(select id  as menu_id from menu where link = 'restricted.attendances.manageTransportAttendance' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.transportAttendance({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageTransportAttendance' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.transportAttendance({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageTransportAttendance'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageTransportAttendance'),( select id from privilege where privilege = 'Delete' ));
  
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStudentLeaveApply' , 11, 'Student Leave Apply', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentLeaveApply',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentLeaveApply' ),( select id from privilege where privilege = 'Add' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentLeaveApply({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentLeaveApply' ),( select id from privilege where privilege = 'View' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentLeaveApply({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentLeaveApply'),( select id from privilege where privilege = 'Edit' ));
	    INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentLeaveApply'),( select id from privilege where privilege = 'Delete' ));

    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.attendances.manageStudentIdentityCard' ,12 , 'Student Identity Card', (select id  as menu_id from menu where name = 'Attendance & Leave'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentIdentityCard',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentIdentityCard' ),( select id from privilege where privilege = 'Add' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentIdentityCard({id_key : id_val , mode : ''view''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentIdentityCard' ),( select id from privilege where privilege = 'View' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.attendances.studentIdentityCard({id_key : id_val , mode : ''edit''})',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentIdentityCard'),( select id from privilege where privilege = 'Edit' ));
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('delete(id_val)',(select id  as menu_id from menu where link = 'restricted.attendances.manageStudentIdentityCard'),( select id from privilege where privilege = 'Delete' ));

      

INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES ('&#xE869;', null, 14, 'Settings', null,'A');
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.settings.application' , 3, 'Application', (select id  as menu_id from menu where name = 'Settings'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.settings.application',(select id  as menu_id from menu where link = 'restricted.settings.application'),( select id from privilege where privilege = 'Edit' ));
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.settings.environment' , 2, 'Environment', (select id  as menu_id from menu where name = 'Settings'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.settings.environment',(select id  as menu_id from menu where link = 'restricted.settings.environment'),( select id from privilege where privilege = 'Edit' ));
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.settings.eventsource' , 1, 'Eventsource', (select id  as menu_id from menu where name = 'Settings'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.settings.eventsource',(select id  as menu_id from menu where link = 'restricted.settings.eventsource'),( select id from privilege where privilege = 'Edit' ));
    INSERT INTO menu(icon_class, link, sort_index, name, parent_id,status) VALUES (null, 'restricted.settings.approval' , 1, 'Approval', (select id  as menu_id from menu where name = 'Settings'),'A');
        INSERT INTO permission(link,menu_id, privilege_id) VALUES ('restricted.settings.approval',(select id  as menu_id from menu where link = 'restricted.settings.approval'),( select id from privilege where privilege = 'Edit' ));


INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('SUPER_ADMIN',0, 'A',false,1,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('ADMIN',1, 'A',false,1,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('SCHOOL_ADMIN',2, 'A',false,1,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('BRANCH_ADMIN',3, 'A',false,1,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('CHAIRMAN',4, 'A',true,10,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('PRINCIPAL',5, 'A',true,10,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('INCHARGE',6, 'A',true,10,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('TEACHER',7, 'A',true,10,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('OTHER',8, 'A',true,10,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('GUARDIAN',9, 'A',true,1,1,1);
INSERT INTO role_hierarchy(description,level, status,customizable,max_role, created_by ,updated_by) VALUES ('STUDENT',10, 'A',true,1,1,1);
			
			
--super admin role
INSERT INTO role(name,description, status,level,created_by ,updated_by,default_page,type) VALUES ('Super Admin Role','Super Admin Role', 'A',0,1,1,(select id  as menu_id from menu where link = 'restricted.dashboards.system'),0);
    INSERT INTO role_permission_ref(role_id, permission_id) SELECT (SELECT id FROM role WHERE name = 'Super Admin Role'),id FROM permission;

--admin role
INSERT INTO role(name,description, status,level,created_by ,updated_by,default_page,type) VALUES ('Admin Role','Admin Role', 'A',1,1,1,(select id  as menu_id from menu where link = 'restricted.dashboards'),0);
    INSERT INTO role_permission_ref(role_id, permission_id) SELECT (SELECT id FROM role WHERE name = 'Admin Role'),p.id FROM permission p  inner join menu m on m.id = p.menu_id where m.link not in ('restricted.dashboards.system','restricted.settings.environment','restricted.settings.eventsource');

--school admin role
INSERT INTO role(name,description, status,level,created_by ,updated_by,default_page,type) VALUES ('School Admin Role','School Admin Role', 'A',2,1,1,(select id  as menu_id from menu where link = 'restricted.dashboards'),1);
    INSERT INTO role_permission_ref(role_id, permission_id) SELECT (SELECT id FROM role WHERE name = 'School Admin Role'),p.id FROM permission p  inner join menu m on m.id = p.menu_id where m.link not in ('restricted.dashboards.system','restricted.settings.environment','restricted.settings.eventsource','restricted.schools.manageSchool');

--branch admin role
INSERT INTO role(name,description, status,level,created_by ,updated_by,default_page,type) VALUES ('Branch Admin Role','Branch Admin Role', 'A',3,1,1,(select id  as menu_id from menu where link = 'restricted.dashboards'),1);
    INSERT INTO role_permission_ref(role_id, permission_id) SELECT (SELECT id FROM role WHERE name = 'Branch Admin Role'),p.id FROM permission p  inner join menu m on m.id = p.menu_id where m.link not in ('restricted.dashboards.system','restricted.settings.environment','restricted.settings.eventsource','restricted.schools.manageSchool','restricted.schools.manageBranch');


INSERT INTO role(name,description, status,level,created_by, updated_by,default_page,type) VALUES ('Guardian Role','Guardian Role', 'A',9,1,1,(select id  as menu_id from menu where link = 'restricted.dashboards'),0);
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Guardian Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.dashboards' and pr.action in ('VIEW') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Guardian Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.exams.viewExam' and pr.action in ('VIEW') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Guardian Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.result.viewResult' and pr.action in ('VIEW') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Guardian Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.attendances.manageStudentLeave' and pr.action in ('ADD' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;

INSERT INTO role(name,description, status,level,created_by ,updated_by,default_page,type) VALUES ('Student Role','Student Role', 'A',10,1,1,(select id  as menu_id from menu where link = 'restricted.dashboards'),1);
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Student Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.dashboards' and pr.action in ('VIEW') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Student Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.exams.viewExam' and pr.action in ('VIEW') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Student Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.result.viewResult' and pr.action in ('VIEW') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Student Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.attendances.manageStudentLeave' and pr.action in ('ADD' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;

  
INSERT INTO role(name,description, status,level,created_by ,updated_by,default_page,type) VALUES ('Teacher Role','Teacher Role', 'A',7,1,1,(select id  as menu_id from menu where link = 'restricted.dashboards'),0);
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Teacher Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.dashboards' and pr.action in ('VIEW') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Teacher Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.exams.manageResult' and pr.action in ('ADD_RESULT' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Teacher Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.attendances.manageStudentAttendance' and pr.action in ('ADD' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Teacher Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.attendances.manageTransportAttendance' and pr.action in ('ADD' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Teacher Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.attendances.attendanceReport' and pr.action in ('ADD' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Teacher Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.notifications.manageBulkNotification' and pr.action in ('ADD' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;
    INSERT INTO role_permission_ref(role_id, permission_id) select * from ( SELECT r.id as role_id FROM role r WHERE name = 'Teacher Role' )  t1 , (select p.id from menu m inner join permission p on  m.id = p.menu_id inner join privilege pr on p.privilege_id = pr.id where  m.link =  'restricted.attendances.manageStaffLeave' and pr.action in ('ADD' ,'VIEW' ,'EDIT' ,'DELETE') ) t2;

INSERT INTO users(email, mobile, full_name, user_name , password, status,system_user,module, remote_id, remote_name, service , created_by ,updated_by) VALUES ('sumit4myself@gmail.com', '9891939498', 'Super Admin', 'superAdmin','superAdmin', 'A',false,'USER',-1,'Super Admin', 'ADMINSERVICE',1,1);
    INSERT INTO users_role_ref(role_id,user_id) VALUES((SELECT id FROM role WHERE name = 'Super Admin Role'),(SELECT id FROM users WHERE email = 'sumit4myself@gmail.com'));
    
INSERT INTO users(email, mobile, full_name, user_name , password, status,system_user,module, remote_id, remote_name, service, created_by ,updated_by) VALUES ('admin@educoresystems.in', '9891939498', 'Admin', 'admin','admin', 'A',false,'USER',-1,'Admin', 'ADMINSERVICE',1,1);
    INSERT INTO users_role_ref(role_id,user_id) VALUES((SELECT id FROM role WHERE name = 'Admin Role'),(SELECT id FROM users WHERE email = 'admin@educoresystems.in'));

INSERT INTO users(email, mobile, full_name, user_name , password, status,school_id,system_user,module, remote_id, remote_name, service,created_by ,updated_by) VALUES ('schooladmin@educoresystems.in', '9891939498', 'School Admin', 'schoolAdmin','schoolAdmin', 'A',1,true,'SCHOOL',1,'School Admin', 'SCHOOLSERVICE',1,1);
    INSERT INTO users_role_ref(role_id,user_id) VALUES((SELECT id FROM role WHERE name = 'School Admin Role'),(SELECT id FROM users WHERE email = 'schooladmin@educoresystems.in'));

INSERT INTO users(email, mobile, full_name, user_name , password, status,school_id,branch_id,system_user,module, remote_id, remote_name, service,created_by ,updated_by) VALUES ('branchadmin@educoresystems.in', '9891939498', 'Branch Admin', 'branchAdmin','branchAdmin', 'A',1,1,true,'BRANCH',1,'Branch Admin', 'SCHOOLSERVICE',1,1);
    INSERT INTO users_role_ref(role_id,user_id) VALUES((SELECT id FROM role WHERE name = 'Branch Admin Role'),(SELECT id FROM users WHERE email = 'branchadmin@educoresystems.in'));



