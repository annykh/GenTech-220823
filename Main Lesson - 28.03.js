// MongoDB

// Создание и использование бд
use db_name;

// Создание коллекции
createCollection()

// Создание и заполнение коллекции
collection_name.insertOne()
collection_name.insertMany()

// Удаление документов
collection_name.deleteOne({Условие})
collection_name.deleteMany({Условие})

// Удаление коллекци
collection_name.drop()

// Удаление бд
db.dropDatabase()

// Выборка
collection_name.find({Условие}, {Проекция})

// Операторы сравнения:

$eq - = equal
$ne - != not equal
$gt - > greater then
$lt - < less then
$lte - <= less than/equal
$gte - >= greater than/equal 
$in - проверка IN со списком


// Логические операторы

 $and - and, и .., и...
 $or - or, или..., или..
 $not - not, не..
 $nor - nor, не (и.. , и...) 


//  collection_name.find(
//     {
//         $or: [
//             {Условие1},
//             {Условие2}
//         ]
//     }
//  )

//  collection_name.find({Условие1, Условие2}) //$and

// Пагинации
.limit(N) //Ограничение кол/во записей 
.skip(N) //Кол/во записей которое нужно пропустить
.sort(-1/1) //Сортировка (1 - по возр. -1 - по убыв.)
.slice: limit, .slice: [skip, limit] //Пагинация массива

// Обновление данных 

.replaceOne - Заменяет весь документ другим 
.updateOne - Обновляем записи документа
.updateMany - Обновляем записи документов
$set - обновляем поле/создаем
$inc - увеличивает/уменьшает значение числового поля
$unset - удаляет поле

$push - добавить значение в массив
$each - добавить несколько значений в массив
$addToSet - добавить значение в массив(если их нет)
$pull - удаляет элемент из массива
$pullAll - удаляет несколько элементов из массива
$pop - удаляет первое или последнее значение массива

// Агрегации
collection_name.countDocuments({Условие})//кол/во документов в коллекции
find().count()//кол/во документов в коллекции


// $sum - найти сумму поля
// $avg - найти среднее значение поля
// $min - найти минимальное значение поля
// $max - найти максимальное значение поля

// $project - выбырает указанные поля из коллекции
// $match - выполняет фильтрацию
// $group - группировка, агрегирование
// $sort - сортирует документ
// $skip - пропустить документы
// $limit - ограничить кол/во дукументов

// ПРАКТИКА

// 1. Создать пустую коллекцию orders
db.createCollection('orders')

// 2. Заполнить коллекцию
db.orders.insertMany([
    {
      orderId: 1,
      customerFirstName: "John",
      customerLastName: "Doe",
      items: [
        { name: "Laptop", price: 1200 },
        { name: "Mouse", price: 30 },
        { name: "Keyboard", price: 100 }
      ],
      totalAmount: 1330,
      status: "pending",
      deliveryAddress: "123 Main St, City, Country",
      orderDate: ISODate("2023-02-15T10:30:00Z")
    },
    {
      orderId: 2,
      customerFirstName: "Alice",
      customerLastName: "Smith",
      items: [
        { name: "Smartphone", price: 800 },
        { name: "Headphones", price: 50 }
      ],
      totalAmount: 850,
      status: "delivered",
      deliveryAddress: "456 Elm St, City, Country",
      orderDate: ISODate("2023-03-05T14:45:00Z")
    },
    {
      orderId: 3,
      customerFirstName: "Emily",
      customerLastName: "Johnson",
      items: [
        { name: "Tablet", price: 400 },
        { name: "Charger", price: 20 }
      ],
      totalAmount: 420,
      status: "pending",
      deliveryAddress: "789 Oak St, City, Country",
      orderDate: ISODate("2023-03-10T11:00:00Z")
    },
    {
      orderId: 4,
      customerFirstName: "Michael",
      customerLastName: "Williams",
      items: [
        { name: "Smartwatch", price: 300 },
        { name: "Power Bank", price: 40 }
      ],
      totalAmount: 340,
      status: "delivered",
      deliveryAddress: "101 Pine St, City, Country",
      orderDate: ISODate("2023-03-12T09:20:00Z")
    },
    {
      orderId: 5,
      customerFirstName: "Emma",
      customerLastName: "Brown",
      items: [
        { name: "Printer", price: 200 },
        { name: "Scanner", price: 150 }
      ],
      totalAmount: 350,
      status: "pending",
      deliveryAddress: "222 Maple St, City, Country",
      orderDate: ISODate("2023-03-14T16:30:00Z")
    },
    {
      orderId: 6,
      customerFirstName: "James",
      customerLastName: "Jones",
      items: [
        { name: "Camera", price: 700 },
        { name: "Tripod", price: 80 }
      ],
      totalAmount: 780,
      status: "delivered",
      deliveryAddress: "333 Cedar St, City, Country",
      orderDate: ISODate("2023-03-17T10:15:00Z")
    },
    {
      orderId: 7,
      customerFirstName: "Sophia",
      customerLastName: "Wilson",
      items: [
        { name: "Monitor", price: 200 },
        { name: "Keyboard", price: 100 }
      ],
      totalAmount: 300,
      status: "pending",
      deliveryAddress: "444 Birch St, City, Country",
      orderDate: ISODate("2023-03-20T13:45:00Z")
    },
    {
      orderId: 8,
      customerFirstName: "Alexander",
      customerLastName: "Taylor",
      items: [
        { name: "External Hard Drive", price: 120 },
        { name: "USB Flash Drive", price: 15 }
      ],
      totalAmount: 135,
      status: "delivered",
      deliveryAddress: "555 Walnut St, City, Country",
      orderDate: ISODate("2023-03-22T15:00:00Z")
    },
    {
      orderId: 9,
      customerFirstName: "Mia",
      customerLastName: "Martinez",
      items: [
        { name: "Printer", price: 200 },
        { name: "Ink Cartridge", price: 30 }
      ],
      totalAmount: 230,
      status: "pending",
      deliveryAddress: "666 Ash St, City, Country",
      orderDate: ISODate("2023-03-25T09:00:00Z")
    },
    {
      orderId: 10,
      customerFirstName: "Alice",
      customerLastName: "Smith",
      items: [
        { name: "Wireless Earbuds", price: 100 },
        { name: "Bluetooth Speaker", price: 80 }
      ],
      totalAmount: 180,
      status: "delivered",
      deliveryAddress: "777 Pine St, City, Country",
      orderDate: ISODate("2023-03-28T12:30:00Z")
    },
    {
      orderId: 11,
      customerFirstName: "Charlotte",
      customerLastName: "Anderson",
      items: [
        { name: "Tablet", price: 400 },
        { name: "Case", price: 25 }
      ],
      totalAmount: 425,
      status: "pending",
      deliveryAddress: "888 Elm St, City, Country",
      orderDate: ISODate("2023-03-30T14:20:00Z")
    },
    {
      orderId: 12,
      customerFirstName: "Benjamin",
      customerLastName: "Thomas",
      items: [
        { name: "External SSD", price: 150 },
        { name: "USB-C Cable", price: 10 }
      ],
      totalAmount: 160,
      status: "delivered",
      deliveryAddress: "999 Oak St, City, Country",
      orderDate: ISODate("2023-04-01T16:00:00Z")
    }
  ])

// Выборка

// Найти все заказы, где общая сумма больше 1000.
db.orders.find({totalAmount: {$gt: 1000}})

// Найти заказы, сделанные клиентом по имени "Mia".
db.orders.find({customerFirstName: 'Mia'})

// Найти заказы, сделанные в феврале 2023 года.
db.orders.find({orderDate: {$gte: ISODate('2023-02-01'), $lt: ISODate('2023-03-01')}})

// Найти заказы, где статус "pending" и сумма заказа больше 200.
db.orders.find({orderDate: {$gte: ISODate('2023-02-01'), $lt: ISODate('2023-03-01')}})

// Найти заказы, где в списке товаров есть "Printer".
db.orders.find({'items.name': 'Printer'})

// Найти заказы, сделанные после 1 марта 2023 года, и вывести только поля orderId и totalAmount.
db.orders.find({orderDate: {$gt: ISODate('2023-03-01')}}, {orderId: 1, totalAmount: 1, _id: 0})

// Найти первые 5 заказов, отсортированные по дате заказа по убыванию.
db.orders.find().sort({orderDate: -1}).limit(5)

// Найти заказы, где сумма заказа находится в диапазоне от 100 до 500, отсортировать их по возрастанию суммы и пропустить первую запись.
db.orders.find({totalAmount: {$gte: 100, $lte: 500}}).sort({totalAmount: 1}).skip(1)

// Найти самый дорогой заказ.
db.orders.find().sort({totalAmount: -1}).limit(1)

// ОБНОВЛЕНИЕ ДАННЫХ

// Изменить статус заказа с orderId 2 на "shipped".
db.orders.updateOne({orderId: 2}, {$set: {status: 'shipped'}})

// Добавить новый товар "Tablet" с ценой 300 в заказ с orderId 3.
db.orders.updateOne({orderId: 3}, {$push: {items: {name: 'Tablet', price: 300}}})

// Изменить адрес доставки во всех заказах, сделанных клиентом "Alice Smith" на "789 Maple St, City, Country".
db.orders.updateMany({customerFirstName: 'Alice', customerLastName: 'Smith'}, {$set: {deliveryAddress: '789 Maple St, City, Country'}})

// Установить поле shippingMethod в каждом заказе на "Courier" для тех заказов, где общая сумма заказа больше 400.
db.orders.updateMany({totalAmount: {$gt: 400}}, {$set: {shippingMethod: 'Courier'}})

// АГРЕГАЦИИ

// Найдите общее количество заказов.
db.orders.find().count()
db.orders.countDocuments()

// Используя агрегацию, найдите среднюю общую сумму заказов.
db.orders.aggregate([
    {$group: {_id: null, avgTotal: {$avg: '$totalAmount'}}}
  ])



// Используя агрегацию, найдите заказы, где общая сумма заказа больше средней суммы всех заказов.
// Для решения задачи без js(там как раз можно хранить среднее значение в переменной, поэтому все работало), нужно будет дополнительно использовать lookup, чтобы сделать self-join и хранить среднее значение в переменной, для сравнения. Вот пример решения:

  db.orders.aggregate([
    {
      $group: {
        _id: null,
        avgTotal: { $avg: "$totalAmount" }
      }
    },
    {
      $lookup: {
        from: "orders",
        let: { avgTotal: "$avgTotal" },
        pipeline: [
          {
            $match: {
              $expr: { $gt: ["$totalAmount", "$$avgTotal"] }
            }
          }
        ],
        as: "ordersAboveAvg"
      }
    }
  ])  

// Сначала мы вычисляем среднюю сумму всех заказов с помощью $group.
// Затем мы используем $lookup для объединения коллекции с самой собой (self-join). Мы передаем среднее значение как переменную avgTotalAmount.
// В пайплайне $match мы сравниваем сумму каждого заказа с avgTotalAmount, чтобы найти заказы, сумма которых больше средней.