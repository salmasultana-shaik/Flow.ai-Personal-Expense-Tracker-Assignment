const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/database');
const transactionsRouter = require('./routes/transactions');
const categoriesRouter = require('./routes/categories');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/transactions', transactionsRouter);
app.use('/categories', categoriesRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
