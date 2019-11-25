# Broadcaster
[![Coverage Status](https://coveralls.io/repos/github/KarangwaEmmy/Broadcaster/badge.svg?branch=develop)](https://coveralls.io/github/KarangwaEmmy/Broadcaster?branch=develop)
[![Build Status](https://travis-ci.org/KarangwaEmmy/Broadcaster.svg?branch=develop)](https://travis-ci.org/KarangwaEmmy/Broadcaster)

## API ENDPOINTS
### *BASEURL : `/api/v1/`*

### AUTHENTICATION END POINTS  : `/auth/`

HTTP METHOD | END POINT | AUTHENTICATED | DESCRIPTION
-----------|----------|--------------|------
POST | `/signup` | Create a New User
POST | `/signin` | Login The User

### Red-flags End POINTS

HTTP METHOD|    END POINT            | DESCRIPTION
-----------|----------|--------------|------
GET        | `/red-flags`            | Get all red-flags
GET        | `/red-flags/:id`        | Get  specified red-flag by Id
POST       | `/red-flags`            | Create a red-flag
PATCH      | `/red-flags/:id`        | Update a red-flag
PATCH      | `/red-flags/:id/location`| update red-flags's location
DELETE     | `/red-flags/:id`        | Delete a red-flag