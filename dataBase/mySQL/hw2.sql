use alexmaksto;

# 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select *
from client
where length(FirstName) < 6;

# 2.Вибрати львівські відділення банку.
select *
from department
where DepartmentCity = 'Lviv';

# 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select *
from client
where Education = 'high'
order by LastName;

# 4.Виконати сортування у зворотньому порядку над таблицею Заявка і вивести 5 останніх елементів.
select *
from application
order by idApplication desc
limit 5;

# 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select *
from client
where LastName like '%ov'
   or LastName like '%ova';

# 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select c.*, d.DepartmentCity
from client c
         join department d on c.Department_idDepartment = d.idDepartment
where d.DepartmentCity = 'Kyiv';

# 7.Знайти унікальні імена клієнтів.
select DISTINCT FirstName
from client;

# 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 гривень.
select *
from client
         join application a on client.idClient = a.Client_idClient
where a.Sum > 5000;

# 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select count(d.DepartmentCity) as CountClient
from client
         join department d on d.idDepartment = client.Department_idDepartment;

select count(d.DepartmentCity) as CountClientLviv
from client
         join department d on d.idDepartment = client.Department_idDepartment
where d.DepartmentCity = 'Lviv';


# 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
select a.*, maxSum.maxCredit
from application a
         join (select Client_idClient, max(Sum) as maxCredit
               from application
               group by Client_idClient) maxSum
              on maxSum.Client_idClient = a.Client_idClient
                  and maxSum.maxCredit = a.Sum;

# 11. Визначити кількість заявок на кредит для кожного клієнта.
select Client_idClient, count(*) as Count_Application
from application
group by Client_idClient;

# 12. Визначити найбільший та найменший кредити.
select *
from application
where Sum = (select max(Sum)
             from application);

select *
from application
where Sum = (select min(Sum)
             from application);

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(*) as count_aplication
from application a
         join client c on c.idClient = a.Client_idClient
where c.Education = 'high';

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select c.*
from client c
         join (select Client_idClient, avg(Sum) as avg_sum
               from application a
               group by Client_idClient
               order by avg_sum desc
               limit 1) avgSum
              on avgSum.Client_idClient = c.idClient;

# 15. Вивести відділення, яке видало в кредити найбільше грошей
select sum(Sum) as sum, d.*
from department d
         join client c on d.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by idDepartment
order by sum desc
limit 1;

# 16. Вивести відділення, яке видало найбільший кредит.
select max(Sum) as max_sum, d.*
from department d
         join client c on d.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by idDepartment
order by max_sum desc
limit 1;

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application a
    join client c on c.idClient = a.Client_idClient
set Sum = '6000'
where Education = 'high';

# 18. Усіх клієнтів київських відділень пересилити до Києва.
update client c
    join department d on c.Department_idDepartment = d.idDepartment
set City = 'Kyiv'
where DepartmentCity = 'Kyiv';

# 19. Видалити усі кредити, які є повернені.
delete application
from application
where CreditState = 'Returned';

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete application
from application
         join client c on c.idClient = application.Client_idClient
where LastName like '_a%'
   or LastName like '_e%'
   or LastName like '_i%'
   or LastName like '_o%'
   or LastName like '_u%';

# 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select sum(Sum), Department_idDepartment, DepartmentCity
from department d
         join client c on d.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
where DepartmentCity = 'Lviv'
group by idDepartment
having sum(Sum) > 5000;

# 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select idClient, sum(Sum), LastName, FirstName
from client
         join application a on client.idClient = a.Client_idClient
where CreditState = 'Returned'
group by idClient
having sum(Sum) > 5000;

# 23.Знайти максимальний неповернений кредит.
select *
from application
where CreditState = 'Not returned'
order by Sum desc
limit 1;

# 24.Знайти клієнта, сума кредиту якого найменша
select sum(Sum) as sum, idClient, FirstName, LastName
from client c
         join application a on c.idClient = a.Client_idClient
group by idClient
order by sum
limit 1;

# 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
select *
from application
where Sum > (select avg(Sum)
             from application);

# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
select *
from client
where City = (select City
              from client
                       join application a on client.idClient = a.Client_idClient
              group by idClient
              order by count(*) desc
              limit 1);

# 27. Місто клієнта з найбільшою кількістю кредитів
select City
from client
         join application a on client.idClient = a.Client_idClient
group by idClient
order by count(*) desc
limit 1;