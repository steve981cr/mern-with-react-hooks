## Simple phonebook app

Keeps record of contacts in form of : Name/Surname/Phone Nr.

### Using

- Use search box to search through the entries
- Click on an entry to view, edit or delete the contact
- `Add new entry` for adding new contacts

### Installing

- Clone to local
- Install dependencies by running `npm install` on following directories: `root` for backend, `client` for frontend.

### Running

- In the root dir, run `node server` to run the server (or nodemon, if present). It should confirm the port with `Server listening on port 3001.` and the connection to the MongoDB with `Connected to the Database.`
- In `client` dir, run `npm start` to start the front-end react application. It will run on `localhost:3000` by default

PS: MongoDB queries are made with a test user I have created and gave permission to, can be found as `MONGODB_URI` in server.js
