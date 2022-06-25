#   Challenge 14 - Social Network API

##  User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

---

# Challenge 14
![GIF](dist/recording.gif)

## Purpose
Create an API for user's website to be able to handle unstructured data of large capacities.

## Built With
* JavaScript
* NoSQL
* Express.js
* Mongoose

---

## Process

* planned out code
* installed inquirer, mysql2, and console.table packages
* created server.js file
* created db folder with db, schema, and seeds sql files
* used module reference code
* cleaned up and tested SQL code
* worked on server.js file and inquirer code
* tested and fixed code