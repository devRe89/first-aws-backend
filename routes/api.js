const { Router } = require('express');
const router = Router();
const ApiController = require('../controllers/ApiController');

router.get('/', 
    ApiController.getPrueba
);

router.post('/',
    ApiController.insertProduct
);

router.get('/all-products',
    ApiController.getAllProducts
);
module.exports = router;