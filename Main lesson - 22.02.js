// cls - Очищает скрипт/консоль
// show collections - Показывает все коллекции в БД
// show databases - Показывает все БД
// db.createCollection() - Создаем пустую коллекцию
// db.collection_name.insertOne() - Вставляет один обьект в коллекцию
// db.collection_name.insertMany() - Вставляет несколько иньектов в коллекцию. Добавляем через массив из обьектов.
// db.test.find() - Select * from ... Выводим все данные из коллекции
// db.test.deleteOne({Условие}) - удалит первую запись соответтувующий запросу
// db.test.deleteMany({Условие}) - удалит все записи соответтувующие запросу
// db.test.drop() - Удалит коллекцию
// db.dropDatabase() - Удалит бд


// Операторы сравнения:

// $eq - = equal
// $ne - != not equal
// $gt - > greater then
// $lt - < less then
// $lte - <= less than/equal
// $gte - >= greater than/equal 
// $in - проверка IN со списком


// Логические операторы

//  $and - and, и .., и...
//  $or - or, или..., или..
//  $not - not, не..
//  $nor - nor, не (и.. , и...) 

// Задания
// Создать БД 'GT220823'
// use GT220823 

// Создать коллекцию users  и заполнить документами со следующими свойствами: id, first_name, last_name, age, gender. Используйте следующие данные:
	
// 1 Анатолий Ушанов 28 m
// 2 Светлана Демидова 25 f
// 3 Никита Иванов 33 m
// 4 Ольга Петрова 22 f

db.users.insertMany([
    {
        _id: 1,
        firstname: 'Анатолий',
        lastname: 'Ушанов',
        age: 28,
        gender: 'm'
    },
    {
        _id: 2,
        firstname: 'Светлана',
        lastname: 'Демидова',
        age: 25,
        gender: 'f'
    },
    {
        _id: 3,
        firstname: 'Никита',
        lastname: 'Иванов',
        age: 3,
        gender: 'm'
    },
    {
        _id: 4,
        firstname: 'Ольга',
        lastname: 'Петрова',
        age: 22,
        gender: 'f'
    }
])


// Создать коллекцию fruits и заполнить документами со следующими свойствами: id, title, price, count. Используйте следующие данные:
	
// 1 Apple 280 4
// 2 Lemon 300 8
// 3 Lime 500 3
// 4 Orange 200 8



db.fruits.insertMany(
    [
        {
            _id: 1,
            title: 'Apple',
            price: 280,
            count: 4
        },  
        {
            _id: 2,
            title: 'Lemon',
            price: 300,
            count: 8
        }, 
        {
            _id: 3,
            title: 'Lime',
            price: 500,
            count: 3
        }, 
        {
            _id: 4,
            title: 'Orange',
            price: 200,
            count: 8
        }  
    ]
)

// Используя коллекцию users
// Вывести данные о всех представительницах женского пола

db.users.find({gender: 'f'})
db.users.find({gender: {$eq: 'f'}})

// Вывести всех пользователей, у которых имя входит в список (Анатолий, Дмитрий, Ольга, Семен)

db.users.find({firstname: {$in: ['Анатолий', 'Дмитрий', 'Ольга', 'Семен']}})


// Найти пользователей, чей возраст находится в диапазоне от 25 до 30(вкл. концы)

// between 25 and 30

db.users.find(
    {
        $and: [
            {age: {$gte: 25}},
            {age: {$lte: 30}}
        ]
    }
)

db.users.find(
    {
        age: {$gte: 25, $lte: 30}
    }
)

// Найти пользователей, которым больше 20, либо у которых имя в списке ['Анатолий', 'Семен']

db.users.find(
    {
        $or: [
                {age: {$gt: 20}},
                {firstname: {$in: ['Анатолий', 'Семен']}}
            ]
    }
)

// Вывести данные о всех представительницах женского пола и людях старше 30 лет(или..или)

db.users.find(
    {
        $or: [
            {gender: 'f'},
            {age: {$gt: 30}}
        ]
    }
)

// Из коллекции fruits вывести фрукты цена которых не меньше 300, а количество больше 5.

db.fruits.find(
    {
        $and: [
            {price: {$gte: 300}},
            {count: {$gt: 5}}
        ]
    }
)

db.fruits.find(
    {
        price: {$gte: 300},
        count: {$gt: 5}
    }
)


// Из коллекции fruits вывести фрукты где цена в диапазоне от 300 до 500(вкл. концы), где кол/во меньше 4.

db.fruits.find(
    {
        price: {$gte: 300, $lte:500},
        count: {$lt: 4}
    }
)