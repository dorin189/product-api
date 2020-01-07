
exports.up = function(knex, Promise) {
    return knex.schema.createTable('product', table => {
        table.increments('id')
        table.string('image')
        table.string('title')
        table.string('shortDescription')
        table.float('price')
        table.text('description')
        table.boolean('visibility')
        table.timestamps()
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('product')
};
