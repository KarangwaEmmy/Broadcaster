# Broadcaster
[![Coverage Status](https://coveralls.io/repos/github/KarangwaEmmy/Broadcaster/badge.svg?branch=develop)](https://coveralls.io/github/KarangwaEmmy/Broadcaster?branch=develop)
[![Build Status](https://travis-ci.org/KarangwaEmmy/Broadcaster.svg?branch=develop)](https://travis-ci.org/KarangwaEmmy/Broadcaster)

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