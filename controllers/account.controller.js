const ProductModel = require('../model/product.model');

class AccountController {
    // static async register(req, res) {
    //     try {
    //         let payload = await AccountStore.register(req);
    //         res.send(payload);
    //     } catch(exception) {
    //         res.status(500).send(exception)
    //     }
    // }


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
            let payload = await ProductModel.store(req.body);
            res.send(payload);
        } catch(exception) {
            res.status(500).send(exception)
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
        console.log(req.params.id);
        try {
            let payload = await ProductModel.remove(req.params.id);
            res.send(payload);
        } catch(exception) {
            res.status(500).send(exception)
        }
    }

    static async update(req,res) {
        try {
            await ProductModel.update(req.body, req.params.id);
            let payload = await ProductModel.getById(req.params.id);
            res.send(payload);
        } catch(exception) {
            res.status(500).send(exception)
        }
    }

}

module.exports = AccountController;
