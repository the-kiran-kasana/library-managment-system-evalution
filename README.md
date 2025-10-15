 // Build a Library Management System using Node.js, Express, MongoDB, and Mongoose, following the MVC architecture.
 

// file format  

            library-api/
            ├── config/
            │   └── db.js
            ├── controllers/
            │   ├── authorController.js
            │   └── bookController.js
            ├── models/
            │   ├── authorModel.js
            │   └── bookModel.js
            ├── routes/
            │   ├── authorRoutes.js
            │   └── bookRoutes.js
            ├── middlewares/
            │   └── logger.js
            ├── logs/
            │   └── request.log
            ├── app.js
            └── server.js

// connected to mongodb 

          config/db.js

// Schemas

            name: String (required, unique)
            email: String (required, unique)
            bio: String
            books: Array of ObjectIds referencing Book model
            Add timestamps and validation for email format.

// crud opperation

            POST 
            GET 
            GET /:id → Get author by ID
            PUT 
            DELETE 

// APIs

// push into git hub 


