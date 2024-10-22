const express = require('express');
const CategoriesController = require('../controllers/categoriesController');
const router = express.Router();

router.post('/', CategoriesController.create);
router.get('/', CategoriesController.findAll);

module.exports = router;
