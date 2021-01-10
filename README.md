# Voyage travel

as vanilla as possible, no frameworks of utils. this is a hackathon style project, to see how far I could get with little to no time invested.

> design is not my own. was created by a colleague of a friend for their project

![screenshot](./screenshot.png)

## 📦 start

run the php dev server: `php -S localhost:8080` (requires php cli to be installed locally)

## 🎓 issues / compromises / decisions

rarely any. this is just for the sake of playing around with php. and i'd never put this project live.

-   routes are close to the root, due to the lack of routing (full file path is visible to the user) -> api, auth, index.php, ...
-   non pages / endpoints are located in `lib`
-   for simplicity file database is not cached or thought about at all. otherwise at least limit the amounts of serializations and file access (keep in memory)
-   endpoints are not secured, session is just to sketch out a basic login state
-   little to no error handling
-   most input fields are prefilled, for simplicity
-   using ESM javascript modules, to simplify javascript handling
-   using classes -> using classes was one of the requirements, i wanted to keep. I really dislike OOP javascript, but want to confirm from time to time
-   javascript render optimization: there's a lot of DOM writes, which would normally hurt performance. for this project i dont care
