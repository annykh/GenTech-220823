create database oe;
use oe;

--  Вывести имя, фамилию пользователей и даты их заказов(order_date).

select 
	t1.CUST_FIRST_NAME, t1.CUST_LAST_NAME, t2.ORDER_DATE
from customers t1
join orders t2
on t1.CUSTOMER_ID = t2.CUSTOMER_ID;


-- Вывести имя, фамилию пользователей, даты заказов(order_date), описание 
-- продуктов(product_description), которые они заказали и категории соответствующих 
-- продуктов (category_name).

select customers.CUST_FIRST_NAME, customers.CUST_LAST_NAME, orders.ORDER_DATE, product_information.product_description, 
	categories_tab.category_name
from customers
--  CUSTOMER_ID
join orders on customers.CUSTOMER_ID = orders.CUSTOMER_ID
--  ORDER_ID
join order_items on orders.ORDER_ID = order_items.ORDER_ID
--  PRODUCT_ID
join product_information on order_items.PRODUCT_ID = product_information.PRODUCT_ID
--  CATEGORY_ID
join categories_tab on product_information.CATEGORY_ID = categories_tab.CATEGORY_ID;

-- Вывести имя, фамилию покупателей, которые купили принтеры.
select customers.CUST_FIRST_NAME, customers.CUST_LAST_NAME, categories_tab.CATEGORY_DESCRIPTION
from customers
join orders on customers.CUSTOMER_ID = orders.CUSTOMER_ID
join order_items on orders.ORDER_ID = order_items.ORDER_ID
join product_information on order_items.PRODUCT_ID = product_information.PRODUCT_ID
join categories_tab on product_information.CATEGORY_ID = categories_tab.CATEGORY_ID
where categories_tab.CATEGORY_DESCRIPTION = 'printers';

--  Вывести названия(product_name), описания категорий(category_description) и 
-- количества(quantity) тех продуктов, у которых минимальная стоимость (min_price) больше 
-- 300. 

select product_information.product_name, categories_tab.category_description, order_items.quantity, product_information.MIN_PRICE
from product_information
join categories_tab on product_information.CATEGORY_ID = categories_tab.CATEGORY_ID
join order_items on product_information.PRODUCT_ID = order_items.PRODUCT_ID
where product_information.MIN_PRICE > 300;


-- product_information
-- -- CATEGORY_ID
-- categories_tab
-- --  PRODUCT_ID
-- order_items


--  Вывести имя и фамилию тех покупателей, у которых лимит кредита больше среднего.

select CUST_FIRST_NAME, CUST_LAST_NAME, CREDIT_LIMIT
from customers
where CREDIT_LIMIT > (
	select avg(CREDIT_LIMIT)
	from customers
);

-- Вывести сумму заказов для всех покупателей(имя, фамилию и сумму)

select customers.CUST_FIRST_NAME, customers.CUST_LAST_NAME, cust_order.sum
from customers
join(   select sum(ORDER_TOTAL) as sum, customer_id
		from orders
		group by customer_id) as cust_order
on customers.customer_id = cust_order.customer_id;


-- Вывести максимальный лимит кредита покупателей женского пола и мужского по отдельности. 
-- Вывести имя и фамилию этих покупателей. 

-- 1. Подзапрос - находим максимальный лимит кредита и группируем по признаку гендера (максимальный лимит кредита и гендер)

select max(CREDIT_LIMIT) as max_Credit, gender
from customers
group by gender;

-- 2. Основной запрос -  имя, фамилия, гендер, лимит кредита

select customers.CUST_FIRST_NAME, customers.CUST_LAST_NAME, customers.GENDER, customers.CREDIT_LIMIT
from customers
join (select max(CREDIT_LIMIT) as max_Credit, GENDER
		from customers
		group by GENDER) as gen_limit_max
on customers.GENDER = gen_limit_max.GENDER
and customers.CREDIT_LIMIT = gen_limit_max.max_Credit;

insert into product_information
values(2464, 'Notebook', 'text text text', 11, 30, '+02', 20, 'orderable', 200, 160, 'text tetxt text');

--  Найти товары с минимальным количеством, вывести имя товара и количество. 

-- 1. Поздапрос - находим минимальное кол/во

select min(QUANTITY)
from order_items;

-- 2. Основной запрос - Найти товары с минимальным количеством, вывести имя товара и количество. 

select product_information.product_name, order_items.QUANTITY
from order_items
join product_information
on order_items.product_id = product_information.product_id 
where order_items.QUANTITY = (select min(QUANTITY)
from order_items);

