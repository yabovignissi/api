# PLI-API

# PLI-API

### Introduction
In this project, you will find a REST API that returns several routes.

### Characteristics
  * The dog must be authenticated in order to make requests.
  * You will need to have set the env variable in a .env file to run it. Go see the example in the file .env.example

### Installation Guide
  * Run ``npm install`` to install all dependencies
  * Create an .env file in your project root folder and add your variables. See .env.sample for assistance.

### Use
  * Run ```npm run dev``` to start the application.
  * Connect to the API using Postman on port 3000.  

### API Endpoints

###### users Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /users/ | To return all users|
| GET | /users/:id | To return the searched user |
| POST | /users/register/ | To return a token |
| POST | /users/auth/ | To returns nothing | 
| PUT | /users/:id | To returns the updated user |
| PUT | /users/:id/password/:id | To returns a message indicating that the password users has been updated |
| DELETE | /users/:id | To returns a message indicating that the user has been deleted | 

###### trips Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /trips/ | To return all trips|
| GET | /trips/:id | To return the searched trip|
| POST | /trips/ | To return a nothing |
| PUT | /trips/:id | To returns the updated trip |
| DELETE | /trips/:id | To returns a message indicating that the trips has been deleted | 

###### Steps Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /steps/ | To return all steps|
| GET | /steps/:id | To return the searched step|
| POST | /steps/ | To return a nothing |
| PUT | /steps/:id | To returns the updated step |
| DELETE | /steps/:id | To returns a message indicating that the steps has been deleted | 

###### Photos Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /photos/ | To return all photos|
| GET | /photos/:id | To return the searched photos|
| POST | /photos/ | To return a nothing |
| PUT | /photos/:id | To returns the updated photos |
| DELETE | /photos/:id | To returns a message indicating that the photos has been deleted | 


###### Comments Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /comments/ | To return all comments|
| GET | /comments/:id | To return the searched comments|
| POST | /comments/ | To return a nothing |
| PUT | /comments/:id | To returns the updated comments |
| DELETE | /comments/:id | To returns a message indicating that the comments has been deleted | 


### Technologies Used
  * NodeJS, This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for   installation and managing of dependencies and communication with databases.
  * ExpressJS, This is a NodeJS web application framework.
  * Prisma is an ORM (Object-Relational Mapping) tool that simplifies the interaction between an application and its database.