## Product Inventory API
## What This Project Is
A backend REST API built with Node.js and Express that lets users manage a product catalog in MongoDB. It handles full CRUD operations, validates data rules, and supports filtering, sorting, and pagination.

### Steps Taken to Build It
Setup & Config: Initialized the Node project, organized folders into routes, models, and db config, and set up a .env file to protect the database credentials.

Database Connection: Connected the server to MongoDB Atlas using Mongoose.

Data Schema & Rules: Created a Product model requiring name, category, and a price strictly between 0 and 100, plus an array of tags and automatic timestamps.

### API Routes:

Handled CRUD operations (Create, Read One, Update, Delete).

Built an advanced GET route that dynamically filters by category, sets min/max price ranges, sorts results, and paginates responses.

Testing: Verified all endpoints, status codes, and edge cases using Postman.

Dependencies Used
Express: Runs the server and routes incoming HTTP requests.

Mongoose: Connects to MongoDB, enforces the schema, and runs queries.

Dotenv: Loads environment variables safely from .env.

Nodemon: Auto-restarts the local server on file saves for faster testing.

### How the Data Flows
Request: A client (like Postman or a frontend app) sends an HTTP request (GET, POST, PUT, DELETE).

Middleware: Express parses the incoming JSON body.

Routing: Express matches the URL path and hands the request to the product router.

Database: Mongoose checks validation rules and performs the query on MongoDB.

Response: The server sends back the result or error with the proper HTTP status code (200, 201, 400, 404).
