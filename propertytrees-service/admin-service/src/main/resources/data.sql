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