# Personal Expense Tracker

## Overview
This project is a RESTful API for managing personal financial records. Users can record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Tools and Technologies
- **Backend Framework:** Node.js with Express.js
- **Database:** SQLite (for simplicity)

## Requirements
1. **Database Setup**
    - **SQLite**: The database has the following tables:
        - `transactions`: id, type (income or expense), category, amount, date, description
        - `categories`: id, name, type (income or expense)
   
2. **API Endpoints**
    - `POST /transactions`: Adds a new transaction (income or expense).
    - `GET /transactions`: Retrieves all transactions.
    - `GET /transactions/:id`: Retrieves a transaction by ID.
    - `PUT /transactions/:id`: Updates a transaction by ID.
    - `DELETE /transactions/:id`: Deletes a transaction by ID.
    - `GET /summary`: Retrieves a summary of transactions, such as total income, total expenses, and balance. Optionally, this can be filtered by date range or category.

3. **Functionality**
    - Implement route handlers for each endpoint.
    - Provide error handling to manage common issues like invalid transaction IDs, invalid inputs, etc.
    - Optionally add user authentication to protect the routes and associate transactions with specific users.

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/salmasultana-shaik/Flow.ai-Personal-Expense-Tracker-Assignment.git
cd personal-expense-tracker

Install Dependencies
bash
npm install

Run the Server
bash
node server.js

This server will start on port 3000. You can access the API at http://localhost:3000.

API Documentation
