const express = require('express');
const TransactionsController = require('../controllers/transactionsController');
const router = express.Router();

router.post('/', TransactionsController.create);
router.get('/', TransactionsController.findAll);
router.get('/:id', TransactionsController.findById);
router.put('/:id', TransactionsController.updateById);
router.delete('/:id', TransactionsController.deleteById);

module.exports = router;
