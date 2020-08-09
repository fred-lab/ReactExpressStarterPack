# React & Express Starter Pack

> A starter pack to easily use React with NodeJS and ExpressJS as a backend server and Webpack as "static module bundler"

## Quick Start

- Clone this repo : `git clone https://github.com/fred-lab/ReactExpressStarterPack.git`

- Create a **.env** file : `cp .env.dist .env`  
  Edit the value of **SERVER_PORT** with the port you want to use for the **NodeJS** server

- Install server dependencies : `npm run server-install`

- Start a server :
  For production environment, use the NodeJS server : `npm run server-prod`  
  For development environment, use the Nodemon (to automatically reload the NodeJS server when a change is done on the server): `npm run server-dev`

- Install the project dependencies :  
  From the **package.json** : `npm install`  
  Or with the script : `npm run install` (remove the dependencies in **package.json** before launching this command to start the project with the most recents versions of each dependencies)

- Use Webpack to serve the file : `npm run dev`  
  Or with **hot-reloading** `npm run watch`

_Note_ : The **NodeJS** server provide the application on **http://localhost:3000** by default. And **Webpack** with **hot-reloading** provide the application on **http://localhost:8080** by default.
