# 📋 Form-Base-Database
This is a **backend mini practice project** where RESTful APIs were created to interact with a database. The project focuses on learning how to build APIs and manage database operations.

# 🚀 Features
  - 🌐 **RESTful API Development**: CRUD (Create, Read, Update, Delete) operations implemented.
  -🗄️ **Database Integration**: Efficient data management with SQL-based queries.
  -🔒 **Password Verification**: Deletes a user only after password verification.
  -⚡ **Node.js & Express.js**: Fast and scalable backend framework.
  
# 🛠️ Tech Stack
  -Node.js
  -Express.js
  -MySQL

## 📦 Dependencies
Here are the npm packages used in this project:
1. **[@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker)**  
   - For generating fake data like names, emails, etc., during testing.  
     ```javascript
     const { faker } = require('@faker-js/faker');
     ```
2. **[mysql2](https://www.npmjs.com/package/mysql2)**  
   - For connecting and querying the MySQL database.  
     ```javascript
     const mysql = require('mysql2');
     ```
3. **[express](https://www.npmjs.com/package/express)**  
   - Backend framework for handling HTTP requests and creating APIs.  
     ```javascript
     const express = require("express");
     ```
4. **[path](https://nodejs.org/api/path.html)**  
   - Node.js module for working with file and directory paths.  
     ```javascript
     const path = require('path');
     ```
5. **[method-override](https://www.npmjs.com/package/method-override)**  
   - For supporting HTTP verbs like PUT and DELETE in forms.  
     ```javascript
     const methodOverride = require("method-override");
     ```
6. **[uuid](https://www.npmjs.com/package/uuid)**  
   - For generating unique IDs.  
     ```javascript
     const { v4: uuidv4 } = require('uuid');
     ```
7. **[constants](https://nodejs.org/api/constants.html)**  
   - Node.js module for predefined constants.  
     ```javascript
     const exp = require('constants');
     ```

---
# 📦 Installation and Setup
1.Clone the Repository
  git clone https://github.com/SahilBrar1/Form-Base-Database.git
  cd Form-Base-Database

2.Install Dependencies
  npm install

3.Set Up Database
-Create a database in MySQL.
-Import the SQL dump file (if provided) or manually create the required tables.

4.Start the Server
  node index.js

# 📂 Folder Structure
Form-Base-Database/
├── node_modules/         # Dependencies
├── views/                # EJS templates
├── index.js              # Main server file
├── package.json          # Project metadata
├── .gitignore            # Ignored files
└── README.md             # Project documentation

# 🌟 Highlights
-📚 Learned how to build and test RESTful APIs.
-🗄️ Gained experience in database integration with SQL.
-🛡️ Explored validation and error-handling techniques.
-⚡ Strengthened knowledge of Node.js and Express.js.
