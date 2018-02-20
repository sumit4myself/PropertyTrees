insert into country values (101,'India', 'UUID001C');
insert into state values (201,'Delhi NCR','UUID001S',101);

insert into CITY values 
(1,'Delhi Dwarka','UUID001CT1',201),  
(2,'Delhi East','UUID001CT2',201), 
(3,'Delhi North','UUID001CT3',201), 
(4,'Delhi South','UUID001CT4',201),
(5,'Delhi West','UUID001CT5',201), 
(6,'Faridabad','UUID001CT6',201),
(7,'Ghaziabad','UUID001CT7',201), 
(8,'Greater Noida','UUID001CT8',201), 
(9,'Gurgaon','UUID001CT9',201), 
(10,'Noida','UUID001CT10',201), 
(11,'Delhi East','UUID001CT11',201);

insert into user_account
(city, email_id, landline_phone, landline_phone2, mobile, mobile2, mobile3, name, password, type, uuid, id) 
values
('Noida', 'abc.xyz@mail.com', '', '', '9999999999', '', '', 'Test User', 'My@pass', 'BUYER', 'UUIDDUMY001', '10');

insert into photo ( id,uuid, url) values ( 1,'uuid1','/assets/images/property-gallery/ls_banner.gif');
insert into photo ( id,uuid, url) values ( 2,'uuid2','/assets/images/property-gallery/ls_banner1.gif');
insert into photo ( id,uuid, url) values ( 3,'uuid3','/assets/images/property-gallery/ls_banner2.gif');
insert into photo ( id,uuid, url) values ( 4,'uuid4','/assets/images/property-gallery/ls_banner3.gif');
insert into photo ( id,uuid, url) values ( 5,'uuid5','/assets/images/property-gallery/ls_banner3.gif');
insert into photo ( id,uuid, url) values ( 6,'uuid6','/assets/images/projects/slider1.png');
insert into photo ( id,uuid, url) values ( 7,'uuid7','/assets/images/projects/slider2.png');
insert into photo ( id,uuid, url) values ( 8,'uuid8','/assets/images/projects/slider3.png');
insert into photo ( id,uuid, url) values ( 9,'uuid9','/assets/images/projects/slider4.png');
insert into photo ( id,uuid, url) values ( 10,'uuid10','/assets/images/projects/slider5.png');
insert into photo ( id,uuid, url) values ( 11,'uuid11','/assets/images/projects/slider6.png');
insert into photo ( id,uuid, url) values ( 12,'uuid12','/assets/images/projects/slider7.png');
insert into photo ( id,uuid, url) values ( 13,'uuid13','/assets/images/projects/slider8.png');
insert into photo ( id,uuid, url) values ( 14,'uuid14','/assets/images/projects/slider9.png');
insert into photo ( id,uuid, url) values ( 15,'uuid15','/assets/images/projects/slider10.png');
insert into photo ( id,uuid, url) values ( 16,'uuid16','/assets/images/projects/slider11.png');
insert into photo ( id,uuid, url) values ( 17,'uuid17','/assets/images/projects/slider12.png');
insert into photo ( id,uuid, url) values ( 18,'uuid18','/assets/images/projects/slider13.png');


insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 1,'uuid1','SIDE','www.propertytrees.com',1) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 2,'uuid2','SIDE','www.propertytrees.com',2) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 3,'uuid3','SIDE','www.propertytrees.com',3) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 4,'uuid4','SIDE','www.propertytrees.com',4) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 5,'uuid5','SIDE','www.propertytrees.com',5) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 6,'uuid6','STRIP','www.propertytrees.com',6) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 7,'uuid7','STRIP','www.propertytrees.com',7) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 8,'uuid8','STRIP','www.propertytrees.com',8) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 9,'uuid9','STRIP','www.propertytrees.com',9) ;
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 10,'uuid10','STRIP','www.propertytrees.com',10);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 11,'uuid11','STRIP','www.propertytrees.com',11);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 12,'uuid12','STRIP','www.propertytrees.com',12);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 13,'uuid13','STRIP','www.propertytrees.com',13);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 14,'uuid14','STRIP','www.propertytrees.com',14);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 15,'uuid15','STRIP','www.propertytrees.com',15);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 16,'uuid16','STRIP','www.propertytrees.com',16);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 17,'uuid17','STRIP','www.propertytrees.com',17);
insert into banner ( id , uuid ,banner_type,website ,photo_id ) values ( 18,'uuid18','STRIP','www.propertytrees.com',18);

