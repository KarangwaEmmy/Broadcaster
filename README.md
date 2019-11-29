# Broadcaster
[![Coverage Status](https://coveralls.io/repos/github/KarangwaEmmy/Broadcaster/badge.svg?branch=develop)](https://coveralls.io/github/KarangwaEmmy/Broadcaster?branch=develop)
[![Build Status](https://travis-ci.org/KarangwaEmmy/Broadcaster.svg?branch=develop)](https://travis-ci.org/KarangwaEmmy/Broadcaster)

## UI FEATURES
a. User sign-up page.
b. User sign-in page.
c. A page/pages where a user can do the following:
i. Create a ​red-flag​ record.
ii. Create an ​intervention​ record.
iii. Delete a ​red-flag​ or ​intervention​ record.
iv. Add images to either ​red-flag ​or ​intervention ​record.
v. Add videos to either ​red-flag ​or ​intervention ​record.
vi. Add geolocation (Lat Long Coordinates) to either a ​red-flag​ or an
intervention​ record.
vii. View all ​red-flag​ or ​intervention ​records an individual user has created.
d. A page/pages for a user’s profile which, at minimum displays:
i. The number of ​red-flag/intervention ​records that has been ​resolved​.
ii. The number of ​red-flag/intervention ​records that are yet to be resolved (in
the ​draft​ or ​under investigation ​states).
iii. The number of ​red-flag/intervention ​records that have been ​rejected.
iv. List of all ​red-flag/intervention​ records.
e. A page/pages where an Admin can do the following:
i. Change the ​status​ of ​red-flag/intervention ​records.
ii. List of all ​red-flag/intervention​ records created by all users

## API features

○ User signup.
○ User sign in.
○ Get all diary entries.
○ Get a specific diary entry.
○ Add an entry
○ Modify an entry
○ Delete an entry


To run project on Local machine
`git clone https://github.com/KarangwaEmmy/Broadcaster.git`
## API ENDPOINTS

### *BASEURL : `/api/v1/`*

### AUTHENTICATION END POINTS  : `/auth/`

HTTP METHOD | END POINT | AUTHENTICATED | DESCRIPTION
-----------|----------|--------------   |------
POST       | `/signup`|  True           |Create a New User
POST       | `/signin`|  True           |Login The existing User 

## Authentication Heroku Routes
1. https://broadcaster12.herokuapp.com/api/v1/auth/signup  (creating new account)
2. https://broadcaster12.herokuapp.com/api/v1/auth/login   (logging in)

### Red-flags End POINTS

HTTP METHOD|    END POINT            | DESCRIPTION
-----------|-------------------------|------
GET        | `/red-flags`            | Get all red-flags
GET        | `/red-flags/:id`        | Get  specified red-flag by Id
POST       | `/red-flags`            | Create a red-flag
PATCH      | `/red-flags/:id/comment`| Update a red-flag's comment.
PATCH      | `/red-flags/:id/location`| update red-flags's location
DELETE     | `/red-flags/:id`        | Delete a red-flag

## Entry Endpoints Heroku routes
1. https://broadcaster12.herokuapp.com/api/v1/red-flags  (post new red -flag)
2. https://broadcaster12.herokuapp.com/api/v1/red-flags  (fetch all red flags)
3. https://broadcaster12.herokuapp.com/api/v1/red-flags/:id (fetch by ID)
4. https://broadcaster12.herokuapp.com/api/v1/red-flags/:id  (delete red flag)
5. https://broadcaster12.herokuapp.com/api/v1/red-flags/:id/location (update location of red flag)   
6. https://broadcaster12.herokuapp.com/api/v1/red-flags/:id/comment   (update the comment of red flag)

gh-page can be found 
`https://karangwaemmy.github.io/Broadcaster/UI/html`

App can be found on heroku at:
`https://broadcaster12.herokuapp.com/`

License `ISC`

Done by Emmy Karangwa.