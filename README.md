# Recipe Connect App

Welcome to the Recipe Connect App!

This repo contains the Frontend and Backend of the Recipe Connect App. The frontend consists of one Single Page Application (SPA) that interacts with a Rails API backend that uses Active Record for this project to perform CREATE, READ, UPDATE, DELETE (CRUD) operations.

The Backend consists of five models: Users, Recipes, RecipeTags, Tags, and Comments. Each User has many Recipes and Comments. Each Recipe has many RecipeTags and Comments. Each Recipe can have many Tags through RecipeTags. Each Comment belongs to one User and one Recipe. 

### Create
We can create new Users through POST requests.
We can create new Recipes through POST requests.
We can create new Comments through POST requests.

### Read
We can read all the Recipes in the database through GET requests.
We can read all of the Comments for each Recipe through GET requests.
The application will verify that a User exists by looking through all Users in the database.

### Update
We can update the information from our Recipes to change the ingredients and directions.

### Delete
Users can delete their Recipes from the database.
Users can delete their Comments from the database.

## Installation Instructions
- Fork and Clone this repository
- Prior to running commands, make sure you have Ruby, Rails, and PostgreSQL installed on your computer.
- Run 'bundle install' on your terminal to install dependencies.
- Run 'sudo service postgresql start' to begin PostgreSQL.
- Run 'rails server' or 'rails s' to begin running the server.
- Run 'npm install --prefix client' on your terminal to install dependencies.
- Run 'npm start --prefix client' on your terminal to open the SPA.

## Credits
- Pexels at https://www.pexels.com/ for images



