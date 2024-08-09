# Fitness Buddy

## Video link 
<!-- Add a video link of the deployed website here -->

## Images
<!-- Add images here -->

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description
This application helps user track their workouts, workout durration, calories burned, and shows a progress bar on the user dashboard that shows how close/far the user is from their goal weight. Users can track each workout they perform: showing what exercises they did and how many calories that were burned. If the user has an apple watch they will be able to link their activity up to their account for more accurate calories burned.

## Installation
1. CLone the repository:
git clone https://github.com/drew-andersen/fitness-buddy.git

2. Open VS Code. If you do not have VS Code you must install it.

3. Using the terminal, install node.js.

4. Once node.js is installed, in the terminal, utilize the command npm i to install all the packages needed for this application.

5. Create a .env file within the root directory of the repository, within which you will pass your enviornmental variables specifying the database name, you PostgreSQL username and password. This will need to be completed before running the application, and will allow the connection.js file to utilize your environmental variables keeping your sensitive information protected.

6. If you do not have a PostgreSQL account, you will need to create one (see https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/).

7. Once all dependancies are installed, you will need to create the database. To do thus you will need to naviget to the directory of the database by right clicking on schema.sql in the db folder and opening an integrated termainal. Once there you can type in psql -U postgres, then follow the prompts and enter your password. Then you will need to type in \i schema.sql to create the database.

8. Next you will need to seed that database. To do this you will need to open a new integrated terminal by right clicking on server.js (in the root of the directory) and opening an integrated terminal. There you will type in npm seed. 

9. Once the database has been seeded, you will then be able to run the command npm start from the integrated file in the root of the repository to spin up the server. With nodemon installed, you will also be able to utilize the command npm run watch, to keep the server spun up between code edits.

10. From there, you can utilize applications such as Insomnia to test the functionality of the routes within the program and make edits to both the front-end and back-end of the code base.

## Usage
<!-- Add how to use the application -->

## License
![MIT License badge](<./images/MIT-badge.png>)

## Credits
Drew Andersen
[Github](https://github.com/drew-andersen)

Jacob Robison
[Github](https://github.com/jacobmrobison23)

Alex Diaz
[Github](https://github.com/aadiaz10)
