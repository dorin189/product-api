
var knex = require('knex')({
    client: 'mysql',
    version: '5.7',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'Parola1!',
        database : 'product'
    }
});


class ProductModel {

    static async getAll(req, res) {

        try {
            const result = await knex.select().table('product').where('visibility', 1);
            return result;
        } catch (exception) {
            return exception;
        }
    }

    static async getAllBackOffice(req, res) {

        try {
            const result = await knex.select().table('product');
            return result;
        } catch (exception) {
            return exception;
        }
    }

    static async store(req) {
        req.created_at =  new Date();
        req.updated_at = new Date();
        try {
            const result = await knex('product').insert(
                    req
                );
            return result;
        } catch(exception) {
            return exception;
        }
    }

    static async getById(req) {
        try {
            const result = await knex('product').where('id', req);
            return result;
        } catch(exception) {
            return exception;
        }
    }

    static async remove(req) {
        try {

            const result = await knex('product').where('id', req).del();
            if(!result) {
                return "Nu exista!";
            }
            return {};
        } catch(exception) {
            return exception;
        }
    }

    static async update(body, id) {
    body.created_at = new Date(body.created_at);
    body.updated_at = new Date();
        try {
            await knex('product').update(body).where('id', id);
        } catch(exception) {
            return exception;
        }
    }

}

module.exports = ProductModel;
