# Node.js + Express.js Authentication API Boilerplate

This is a project meant to be used as a starting point for APIs that require user authentication (registration and sign in). Sign on sessions are showcased with protected routes that pass through authentication middleware.



## Project Setup

To run project locally:

- Clone repo
- `npm install` in root directory
- Add to your .env file these variables
```md
PORT=5001
CONNECTION_STRING= mongodb connection
ACCESS_TOKEN_SECRET = your JWT Secret key
```
- `npm run dev` to run nodemon in watch mode
- Use [postman](https://https://www.getpostman.com/) to test endpoints or curl if you're cool

## Overview of auth system:

1.  User registers account. Password is hashed and salted with bcrypt and is stored in database
2.  User enters credentials, server validates credentials. If valid, a random 16 byte token is generated and stored in database along with the user ID of the requesting user
3.  Protected endpoints send request through authentication middleware, which checks token received in request to exist in database. The endpoints that use the authentication in this project are the `GET/DELETE/POST/PUT` `api/contacts/` and `GET` `api/users/current`. Meant to serve as examples of how it would work




