## Node.js MongoDB – User Authentication & Authorization example with JWT & Mongoose

### Project setup
```
npm install
```

### Run
```
node server.js

```
#### Authentication APIs
```
- POST /api/auth/signup
- POST /api/auth/signin

```
#### Authorization APIs
```
- GET /api/test/all
- GET /api/test/user  [ loggedin users (user/moderator/admin) ]
- GET /api/test/mod   [ moderator ]
- GET /api/test/admin [ admin ]

```