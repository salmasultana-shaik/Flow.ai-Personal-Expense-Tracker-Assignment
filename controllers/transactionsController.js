const Transaction = require('../models/transaction');

class TransactionsController {
    static create(req, res) {
        Transaction.create(req.body, (err, id) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ id });
        });
    }

    static findAll(req, res) {
        Transaction.findAll((err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    }

    static findById(req, res) {
        Transaction.findById(req.params.id, (err, row) => {
            if (err) return res.status(500).json({ error: err.message });
            if (!row) return res.status(404).json({ error: 'Transaction not found' });
            res.json(row);
        });
    }

    static updateById(req, res) {
        Transaction.updateById(req.params.id, req.body, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(204).end();
        });
    }

    static deleteById(req, res) {
        Transaction.deleteById(req.params.id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(204).end();
        });
    }
}

module.exports = TransactionsController;
