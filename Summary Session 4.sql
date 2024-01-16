--  Агрегатные функции

-- count кол/во
-- avg среднее
-- sum сумма
-- min наименьшее
-- max наибольшее

-- Группировка

-- select
-- from
-- where
-- group by
-- having
-- order by

select * from jobs;
select * from employees;
select * from departments;
select * from locations;
select * from countries;
select * from regions;

-- Вывести количество сотрудников в каждом департаменте. (имя департамента и кол/во сотрудников) 
select t2.department_name, count(*) as emp_count
from employees t1
join departments t2 on t1.department_id = t2.department_id
group by t1.department_id;

-- Вывести среднюю зарплату по департаментам. (имя департамента и средняя зарплата) 
select t2.department_name, avg(salary) as avg_salary
from employees t1
join departments t2 on t1.department_id = t2.department_id
group by t2.department_name;

-- Вывести общее количество сотрудников в каждом городе.
select city, count(*) as emp_count
from employees t1
join departments t2 on t1.department_id = t2.department_id
join locations t3 on t2.location_id = t3.location_id
group by t3.city;

-- Найти департаменты с более чем 5 сотрудниками.(имя департамента, кол/во сотрудников) 
select t2.department_name, count(*) as emp_count
from employees t1
join departments t2 on t1.department_id = t2.department_id
group by t1.department_id
having count(*) > 5;

-- Найти страны, в которых количество сотрудников превышает 20. (country_name и кол/во сотрудников)
select t4.country_name, count(*) as emp_count
from employees t1
join departments t2 on t2.department_id = t1.department_id
join locations t3 on t2.location_id = t3.location_id
join countries t4 on t3.country_id = t4.country_id
group by t4.country_name
having count(*) > 20;

-- Вывести среднюю зарплату по каждой должности.
-- Вывести максимальную зарплату в каждом департаменте. 
-- Найти департаменты, в которых средняя зарплата превышает 10000.
-- Найти максимальное количество сотрудников в одном городе.