# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project.
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` , and then execute 
`npx sequelize db:migrate`

- Once the above steps are done, execute `npm start` to start the server.

## DB Design
The DB design is as follows:
- There are 4 tables, `Airplanes` , `Airports` , `Cities` and `Flights`
- <img src='./assets//Flight_Search_Database.png' />

### Sequilize-cli commands
1. City Model
    - `npx sequelize model:generate --name City --attributes name:string`