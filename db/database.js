const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run(`CREATE TABLE categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        type TEXT
    )`);
    db.run(`CREATE TABLE transactions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        category INTEGER,
        amount REAL,
        date TEXT,
        description TEXT,
        FOREIGN KEY (category) REFERENCES categories(id)
    )`);
});

module.exports = db;
