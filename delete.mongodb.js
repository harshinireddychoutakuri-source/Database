use ('ecommerce');

//db.orders.deleteMany({status: "Delivered"});

//DELETE ANY ITEM WHICH HAS PRICE LESS THAN 20
db.products.deleteMany({price: {$lt:20}});
