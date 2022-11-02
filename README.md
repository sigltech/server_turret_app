# Server for Turret Testing APP

This is the server for the turret testing app. It uses express to communcate with mongoDB and the client.

## Usage

1. Clone to repo and run the following to install the dependencies
```
npm install
```
2. run the following script to start the server at port 5050
```
npm start
```
**PLEASE NOTE**
In order to run the server, you need a valid MongoDB connection. create a database on mongo ATLAS, create a `.env` file and add the following to the file:
```
PORT: 5050
MONGO_USER: <username for your admin account created in the database setup>
MONGO_USER: <password created for admin account, created in the database setup>
```

## Routes
