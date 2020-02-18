# Simple phonebook app

Keeps record of contacts in form of : Name/Surname/Phone Nr.

## Installing

- Clone to local
- Install dependencies by running `npm install` on following directories: `root` for backend, `client` for frontend.

## Running

- In the root dir, run `node server`/`nodemon server` to run the server. It should confirm the port with `Server listening on port 3001.` and the connection to the MongoDB with `Connected to the Database.`
- In `client` dir, run `npm start` to start the front-end react application. It will run on `localhost:3000` by default

PS: MongoDB queries are made with a test user I have created and gave permission to, can be found as `MONGODB_URI` in server.js

## Using

- Use search box to search through the entries
- Click on an entry to view, edit or delete the contact
- `Add new entry` for adding new contacts

### Resources

I have used https://github.com/steve981cr/mern-with-react-hooks as a boilerplate. It provided a good, clean base code to begin with.

On the backend we have `express` and `mongoose` to communicate with database(`mongoDB`).

Frontend is a `react app.` It uses `bootstrap` for simple styling. `axios` and `react router tools` for frontend route and DOM management.
