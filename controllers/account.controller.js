const ProductModel = require('../model/product.model');
const Joi = require('@hapi/joi');
const schema = Joi.object({
    image: Joi.string()
        .min(3)
        .max(320)
        .required(),

    title: Joi.string()
        .min(3)
        .max(80)
        .required(),

    shortDescription: Joi.string()
        .min(3)
        .max(40)
        .required(),

    price: Joi.number()
        .integer()
        .min(1)
        .required(),

    id: Joi.number()
        .integer()

});


class AccountController {

    static async getAll(req, res) {

        try {
            let payload = await ProductModel.getAll(req, res);
            res.send(payload);
        } catch(exception) {
            res.status(500).send(exception)
        }
    }

    static async getAllBackOffice(req, res) {

        try {
            let payload = await ProductModel.getAllBackOffice(req, res);
            res.send(payload);
        } catch(exception) {
            res.status(500).send(exception)
        }
    }

    static async store(req,res) {
        try {
            console.log(req.body);
            const value = await schema.validateAsync(
                {
                    image: req.body.image,
                    title: req.body.title,
                    shortDescription: req.body.shortDescription,
                    price: req.body.price
                });

            try {
                let payload = await ProductModel.store(req.body);
                res.send(payload);
            } catch(exception) {
                res.status(500).send(exception)
            }
        }
        catch (err) {
            res.status(500).send(err)
        }

    }

    static async getById(req,res) {
        try {
            let payload = await ProductModel.getById(req.params.id);
            res.send(payload);
        } catch(exception) {
            res.status(500).send(exception)
        }
    }

    static async remove(req,res) {
        try {
            let payload = await ProductModel.remove(req.params.id);
            res.send(payload);
        } catch(exception) {
            res.status(500).send(exception)
        }
    }

    static async update(req,res) {
        try {
            const value = await schema.validateAsync(
                {
                    image: req.body.image,
                    title: req.body.title,
                    shortDescription: req.body.shortDescription,
                    price: req.body.price,
                    id: req.body.id
                });
            try {
               let payload = await ProductModel.update(req.body, req.params.id);
               res.send(payload);
                // let payload = await ProductModel.getById(req.params.id);
                // res.send(payload);
            } catch(exception) {
                res.status(500).send(exception)
            }
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

}

module.exports = AccountController;
