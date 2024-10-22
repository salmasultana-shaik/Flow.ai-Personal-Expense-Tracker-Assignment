const Category = require('../models/category');

class CategoriesController {
    static create(req, res) {
        Category.create(req.body, (err, id) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id });
        });
    }

    static findAll(req, res) {
        Category.findAll((err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    }
}

module.exports = CategoriesController;
