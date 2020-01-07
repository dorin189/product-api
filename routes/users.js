var express = require('express');
const AccountCtrl = require('../controllers/account.controller');
var router = express.Router();


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router
    .get('/', AccountCtrl.getAll)
    .get('/product', AccountCtrl.getAllBackOffice)
    .post('/product', AccountCtrl.store)
    .get('/product/:id', AccountCtrl.getById)
    .delete('/product/:id', AccountCtrl.remove)
    .put('/product/:id', AccountCtrl.update);



module.exports = router;
