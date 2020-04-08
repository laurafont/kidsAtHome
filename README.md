# Kids at Home

This app is a free online community to share activity ideas for kids who have to stay at home.

## Setup

### Dependencies
- Run `yarn` in project directory to install `express`. `yarn start`to run servers on port 5000.
- `cd client`and run `yarn` to install React. `yarn start`to run servers on port 3000.

### Database
- Access MySQL in your terminal by running `mysql -u root -p`.
- Create new database called mvp_resources: `create database mvp_resources`.
- Add a `.env` file to root folder containing the MySQL authentication information for MySQL user.
- Run `npm run migrate` in the root folder, in a new terminal window. This will create 3 different tables in your database: `resources`, `category` and `age`.

## Database Schema
![alt text](/img/db_schema.png "DB schema")

## User flow diagram
![alt text](/img/user_flow.png "User flow diagram")

## API routes plan
![alt text](/img/api_routes1.png "API routes")
![alt text](/img/api_routes2.png "API routes")

_This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._