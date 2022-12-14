# drf_jwt_backend

YouTube Clone Backend

Learning Objective
Use Django REST Framework to build a REST API to serve as the backend for a YouTube Clone application with JWT user registration and login functionalities.

Technologies
Django, Django REST Framework, MySQL, Postman

User Stories

Total Unweighted Project Points: /32.5
Total Weighted Project Points: /30 

(5 points): As a developer, I want to make good, consistent commits (at least 20 for both the backend and frontend). 

(5 points) As a developer, I want to setup the Django + React starter code and connect the backend (Django API) to my MySQL database, closely following the setup guide for instructions.

(5 points) As a developer, I want to run the django-admin startapp command to create a comment app and create a Comment model in the comment/models.py file:
Property names must be in snake_case and match the following exactly! Be sure to register your app before making migrations and create a serializer for your model! 
user – ForeignKey
video_id – CharField
text – CharField
likes – IntegerField
dislikes – IntegerField

(7.5 points) As a developer, I want to create a GET endpoint that does the following things:
Accepts a value from the request’s URL (The YouTube video id I am trying to get comments for).
Returns a 200 status code.
Responds with all comments from the database that are related to the video id sent in the URL.

(5 points) As a developer, I want to create a POST endpoint that does the following things:
Requires JWT authorization (Protected route).
Accepts a body object from the request in the form of a Comment model. 
Adds the new comment to the database associated with the user who sent the JWT in the request.
Returns a 201 status code. 
Responds with the newly created comment object. 

(5 points) As a developer, I want to use Postman to make requests for all of my endpoints, save it to a collection, and then export it as a JSON from Postman.  


BONUS

NOTE: Only attempt once both the backend and frontend are feature complete for non-bonus user stories

(5 points) As a developer, I want to create a PATCH endpoint that does the following things:
Requires JWT authorization (Protected route).
Accepts two values from the request’s URL (The id of the comment to be updated and a query parameter called “type” with two possible values, “like” or “dislike”). 
Finds the correct Comment based on the id that comes in from the URL parameter
Increments the “like” property by 1 if the “type” query param value is “like” or increments the “dislike” property by 1 if the “type” query param value is “dislike”
Returns a 200 status code. 
Responds with the newly updated comment object. 

(5 points) As a developer, I want to create a Reply model:
Property names must be in snake_case and match the following exactly! 
user – ForeignKey
comment – ForeignKey
text – CharField

(5 points) As a developer, I want to create a POST endpoint that does the following things:
Requires JWT authorization (Protected route).
Accepts a value from the request’s URL (The id of the comment the reply will be connected to). 
Accepts a body object from the request in the form of a Reply model. 
Adds the new reply to the database associated with the comment id sent in the URL and the user who sent the JWT in the request.
Returns a 201 status code. 
Responds with the newly created reply object. 

(5 points) As a developer, I want to create a GET endpoint that does the following things:
Requires JWT authorization (Protected route).
Accepts a value from the request’s URL (The id of the comment I am trying to get replies for). 
Returns a 200 status code.
Responds with all replies from the database that are related to the comment id sent in the URL.
