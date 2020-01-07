
var faker = require('faker');

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('product').insert({

        image: faker.image.fashion(),
        title: faker.commerce.productName(),
        shortDescription: faker.lorem.words(),
        price: faker.commerce.price(),
        description: faker.lorem.paragraphs(),
        visibility: true,
        created_at: new Date(),
        updated_at: new Date()
    });
};
