# Todo List App

Todo list Application managing your todo items, and it has the below functionality. 



## Features

- Add new todo item. ✨ 
- Update specfic todo item. ✨ 
- Remove single todo item.  ✨ 
- Update status of specfic todo. ✨


## Screenshots 

<img width="466" alt="لقطة الشاشة 2022-09-12 002522" src="https://user-images.githubusercontent.com/29964545/189553095-5808bcb5-d838-46e0-9d88-f4da956773f6.png">
<img width="434" alt="لقطة الشاشة 2022-09-12 012354" src="https://user-images.githubusercontent.com/29964545/189553342-633049a6-6390-4484-a7c9-798bfcf3a5f3.png">


## Tech

Todo list item uses the below techologies:
- [ReactJS] - A JavaScript library for building user interfaces!
- [NestJS] - A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
- [MongoDB] - Get your ideas to market faster with a developer data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love.


## Installation for client

Todo List App requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd kbi-todolist/client
npm i or yarn
npm run start or yarn start
```
After serving the client app, open it throughout the below URL: 

```sh
localhost:3000
```


## Installation for Server 

Todo List App requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd kbi-todolist/server
npm i or yarn
npm run start:dev or yarn start:dev
```

After serving the server app, open it throughout the below URL: 

```sh
localhost:5000
```


## Docker

Todo list app is very easy to run in dokcer with the below commands, it's required to have a docker setup on your machine, if you don't have you can install from [Docker](https://www.docker.com/)

below command will create a docker container with two images (client & server). 
Also, you could check them throughout the below hosts: 

```sh
cd kbi-todolist
docker-compose up
```
docker container name  `kbi-todolist`

client side host
```sh
localhost:3000
```

server side host
```sh
localhost:5000
```


## License

MIT

**Free Software, Hell Yeah!**

   [ReactJS]: <https://reactjs.org/>
   [NestJS]: <https://nestjs.com/>   
   [MongoDB]: <https://www.mongodb.com/>


