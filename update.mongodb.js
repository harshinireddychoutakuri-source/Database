use ('ecommerce');
//db.products.updateMany({category: "Electronics"},{$inc: {price:100}});

//db.products.updateMany({category: "Electronics"},{$set: {stock:80}});

db.products.updateMany({category: "Electronics"},{$set: {category : "IT Peripherals"}});