// For initial data seeding
const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MONGO CONNECTION OPEN');
    })
    .catch(err => {
        console.log('MONGO CONNECTION ERROR');
        console.log(err);
    });

// const p = new Product({
//     name: 'Grape Fruit',
//     price: 1.99,
//     category: 'Fruit'
// });

// p.save().then(p => {
//     console.log('SEEDED DATA:');
//     console.log(p)
// })
// .catch(err => {
//     console.log(err);
// });

const seedProducts = [
    {
        name: 'Ampalaya',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Sweet Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Soya Milk',
        price: 3.99,
        category: 'dairy'
    }
];

Product.insertMany(seedProducts)
.then(res => {
    console.log('SEEDED DATA:');
    console.log(res);
})
.catch(err => {
    console.log(err);
});