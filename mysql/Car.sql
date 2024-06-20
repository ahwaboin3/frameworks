create database car
default character set utf8 
collate utf8_general_ci;

use car;
select * from car;

insert into car(brand,model,color,register_number,year,price) 
values('Shelby','Cobra','White','SC-5467',1953,65000);
insert into car(id,brand,model,color,register_number,year,price)
values(LAST_INSERT_ID(),'Shelby','Cobra','White','SC-5467',1953,65000);
insert into car(id,brand,model,color,register_number,year,price)
values(LAST_INSERT_ID()+1,'Shelby','Cobra','White','SC-5467',1953,65000);

commit;