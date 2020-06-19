# connect-backend
Connect is an application that aids two or more individual share information among themselves.

[![Build Status](https://travis-ci.com/Nennyfills/connect-backend.svg?token=1xATcbf3WafUSXrRHGN7&branch=develop)](https://travis-ci.com/Nennyfills/connect-backend)
[![Coverage Status](https://coveralls.io/repos/github/Nennyfills/connect-backend/badge.svg?branch=develop)](https://coveralls.io/github/Nennyfills/connect-backend?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/8f4f18b3bbd10bee8119/maintainability)](https://codeclimate.com/github/Nennyfills/connect-backend/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/8f4f18b3bbd10bee8119/test_coverage)](https://codeclimate.com/github/Nennyfills/connect-backend/test_coverage)
[![](https://img.shields.io/badge/Reviewed_by-Hound-blueviolet.svg)](https://houndci.com)

## API Spec
The preferred JSON object to be returned by the API should be structured as follows:

### Users (for authentication)

```source-json
{
  "Users": {
    "email": "jake@jake.jake",
    "token": "jwt.token.here",
    "Usersname": "jake",
    "bio": "I work at statefarm",
    "image": null
  }
}
```
### Profile
```source-json
{
  "profile": {
    "Usersname": "jake",
    "bio": "I work at statefarm",
    "image": "image-link",
    "chatMate": "false",
    "groupChat": "true"
  }
}
```
### Errors and Status Codes
If a request fails any validations, expect errors in the following format:

```source-json
{
  "errors":{
    "body": [
      "can't be empty"
    ]
  }
}
```
### Other status codes:
401 for UnAuthorsized requests, when a request requires authentication but it isn't provided

403 for Forbidden requests, when a request may be valid but the Users doesn't have permissions to perform the action

404 for Not found requests, when a resource can't be found to fulfill the request


Endpoints:
----------

### Authentication:

`POST /api/Users/login`

Example request body:

```source-json
{
  "Users":{
    "email": "jake@jake.jake" or "userName": "Jakehills"
    "password": "jakejake"
  }
}
```

No authentication required, returns a Users

Required fields: `email`, `password`

### Registration:

`POST /api/Users/signup`

Example request body:

```source-json
{
  "Users":{
    "Usersname": "Jacob",
    "email": "jake@jake.jake",
    "password": "jakejake"
  }
}
```

No authentication required, returns a Users

Required fields: `email`, `Usersname`, `password`

### Get Current Users

`GET /api/Users`

Authentication required, returns a Users that's the current Users

### Update Users

`PUT /api/Users`

Example request body:

```source-json
{
  "Users":{
    "email": "jake@jake.jake",
    "userName": "Jakky",
    "bio": "I like to skateboard",
    "phoneNumber": "09087876876"
    "image": "https://i.stack.imgur.com/xHWG8.jpg"
  }
}
```

Authentication required, returns the Users

Accepted fields: `full name`, `email`, `Usersname`, `password`, `avatar`, `bio`, `phoneNumber`, `signature`

### Get Profile

`GET /api/profiles/:Usersname`

Authentication optional, returns a Profile

### Edit Profile

`GET /api/profiles/:Usersname/edit`

Authentication optional, returns a Profile
### Chat Profile viewers

`GET /api/profiles/:Usersname/profile_viewers`

Authentication required, returns a profile viewers

No additional parameters required

### Chat Mate

`GET /api/:Usersname/chat_mate`

Authentication required, returns chat mate

No additional parameters required

### Follow or Unfollow Chat Mate 

`PUT /api/:Usersname/chat_mate/:follow`

Authentication required, returns 

No additional parameters required

### Chat Mate Follower 

`GET /api/:Usersname/chat_mate/:followers`

Authentication required, returns 

No additional parameters required

### Chat Mate Following 

`GET /api/:Usersname/chat_mate/:following`

Authentication required, returns 

No additional parameters required

### Search Chat Mate By Name

`GET /api/:Usersname/chat_mate?name='kevin'`
    Example request body:

    ```source-json
    {
    "Articles": {
        "name": "Kivin",
        "bio": "Ever wonder how?",
        "phoneNumbe": "09054434564",
    }
    }
    ```
Authentication required, returns chat mate

No additional parameters required

### Create Chat Group

`POST /api/:Usersname/create/chat_group`

Authentication required, returns created chat group

No additional parameters required

### Delete Chat Group

`DELETE /api/:Usersname/delete/chat_group`

Authentication required, returns deleted chat group

No additional parameters required

### Edit Chat Group

`PUT /api/:Usersname/edit/chat_group`

Authentication required, returns edited chat group

No additional parameters required

### Add member to the group

`POST /api/:Usersname/add_member/chat_group/:group_name/:userName`

Authentication required, returns chat group users

No additional parameters required

### Chat Audio Call

`POST /api/:Usersname/chat/audio_call`

Authentication required, returns a audio_call

No additional parameters required

### Chat Video Call

`POST /api/:Usersname/chat/video_call`

Authentication required, returns a video_call

No additional parameters required

### Chat Disable or Enable

`PUT /api/:Usersname/disable`

Authentication required, returns a disable  or enable

No additional parameters required

### Chat Activities

`GET /api/:Usersname/activities`

Authentication required, returns a activities

No additional parameters required
