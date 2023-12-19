-- Онлайн MySQL
-- https://onecompiler.com/mysql
-- https://www.mycompiler.io/new/mysql


-- 1.	Создать таблицу employees;

-- 		employee_id целое число первичный ключ автоинкремент,
--   	first_name строка,
--   	last_name строка,
--   	email строка,
-- 		salary целое число,
--   	department строка.

-- use gt220823;
drop table employees;
create table employees(
	employee_id int primary key auto_increment,
    first_name varchar(128),
    last_name varchar(128),
    email varchar(128),
    salary int,
    department varchar(128)
);

-- 2. Заполнить таблицу (employees.txt)
-- https://github.com/annykh/GenTech-220823/blob/main/employees.txt

insert into employees(first_name, last_name, email, salary, department) values("Steven","King",	"SKING", 24000, "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Neena" , "Kochhar" , "NKOCHHAR" , 17000 , "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Lex" , "De Haan" , "LDEHAAN" , 17000 , "Sales");
insert into employees(first_name, last_name, email, salary, department) values("Alexander" , "Hunold" , "AHUNOLD" , 9000 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Bruce" , "Ernst" , "BERNST" , 6000 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Valli" , "Pataballa" , "VPATABAL" , 4800 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Diana" , "Lorentz" , "DIANALO" , 8800 , "Finance");
insert into employees(first_name, last_name, email, salary, department) values("Nancy" , "Greenberg" , "NGREENBE" , 12008 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Daniel" , "Faviet" , "DFAVIET" , 9000 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Jose Manuel" , "Urman" , "JMURMAN" , 7800 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Luis" , "Popp" , "LPOPP" , 6900 , "Shipping");
insert into employees(first_name, last_name, email, salary, department) values("Den" , "Raphaely" , "DRAPHEAL" , 11000 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Alexander" , "Khoo" , "AKHOO" , 3100 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Shelli" , "Baida" , "SBAIDA" , 2900 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Sigal" , "Tobias" , "STOBIAS" , 2800 , "Marketing");
insert into employees(first_name, last_name, email, salary, department) values("Matthew" , "Weiss" , "MWEISS" , 8000 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Fripp" , "AFRIPP" , 8200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Payam" , "Kaufling" , "PKAUFLIN" , 7900 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Shanta" , "Vollman" , "SVOLLMAN" , 6500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Kevin" , "Mourgos" , "KMOURGOS" , 5800 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Julia" , "Nayer" , "JNAYER" , 3200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Markle" , "SMARKLE" , 2200 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Laura" , "Bissot" , "LBISSOT" , 3300 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Mozhe" , "Atkinson" , "MATKINSO" , 2800 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Joshua" , "Patel" , "JPATEL" , 2500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Trenna" , "Rajs" , "TRAJS" , 3500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("John" , "Russell" , "JRUSSEL" , 14000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Karen" , "Partners" , "KPARTNER" , 13500 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Alberto" , "Errazuriz" , "AERRAZUR" , 12000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Gerald" , "Cambrault" , "GCAMBRAU" , 11000 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Eleni" , "Zlotkey" , "EZLOTKEY" , 10500 , "IT");
insert into employees(first_name, last_name, email, salary, department) values("Adam" , "Vargas" , "PVARGAS" , 2500 , "Human Resources");
insert into employees(first_name, last_name, email, salary, department) values("Laura" , "Errazuriz" , "AERRAZUR" , 12000 , "IT");

select * from employees;

-- Найти всех ИТ работников с зарплатой выше 12000
select * from employees
where department = 'IT' and salary > 12000;


set sql_safe_updates = 0;

-- Повысить зарплату работников отдела Human Resources в 5 раз
update employees
set salary = salary * 5
where department = 'Human Resources';

-- У руководителя родились близнецы Лаура и Адам, в честь праздника он решил повысить зарплату 
-- работников с именами Лаура(Laura) и Адам(Adam) в 2 раза.
update employees
set salary = salary * 2
where first_name = 'Laura' or first_name = 'Adam';
-- where first_name in ('Laura', 'Adam');

-- Всех работников отдела sales уволили. Удалите работников sales из таблицы.
delete from employees
where department = 'Sales';

-- John Russell перевели в отдел Marketing и повысили зарплату на 5000. Измените данные для работника John Russell.
update employees
set department = 'Marketing', salary = salary + 5000
where first_name = 'John' and  last_name = 'Russell';

-- (not) between min and max
-- (not) in ( , , )
-- not 
-- (not) like
-- is null
-- is not null

select * from employees
where first_name like 'S%';
-- Выбирает записи, где значение в столбце first_name начинается с буквы "S".

where first_name like '_s%';
-- Выбирает записи, где второй символ в значении столбца first_name равен "s".

where first_name like '____';
-- Выбирает записи, где значение в столбце first_name состоит ровно из четырех символов.

where first_name like '%s%';
-- Выбирает записи, где значение в столбце first_name содержит символ "s" в любом месте.

where first_name like '_%s_';
-- Выбирает записи, где значение в столбце first_name содержит "s", причем это значение имеет минимум три символа, где "s" находится вторым символом.

where first_name like 'Tom';
-- Выбирает записи, где значение в столбце first_name точно равно "Tom".



-- Найти работников, у которых фамилия состоит из 4 символов.
select * from employees
where last_name like '____';

-- Найти работников, у которых email состоит из 5 символов, где первый символ 'A', а последний 'O'.
select * from employees
where email like 'A___O';

-- Найти работников, у которых имя не начинается на "A"
select * from employees
where first_name not like 'A%';