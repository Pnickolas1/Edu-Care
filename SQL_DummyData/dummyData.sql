
create table Listings_Dummy
(
id int NOT NULL auto_increment,
specialty varchar(30),
category varchar(30) ,
isActive BOOLEAN,
createdAt TIMESTAMP,
updateAt TIMESTAMP, 
volunteerId Varchar(20),
PRIMARY KEY(id)
);

Insert Into Listings_Dummy 
	(specialty, category,isActive,createdAt, updateAt, VolunteerId)
Values
('engineering','computer science', true,0, 0 , 'peter@gmail.com'),
('law','legal system',false,0, 0 , 'alan@gmail.com'),
('police','legal system',true,0, 0 , 'katie@gmail.com');