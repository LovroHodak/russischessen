Part 1
1. created empty folder "russischessen" and open in VSC
2. npm init -y
3. mkdir frontend (creates frontend inside "learnDB")
4. mkdir backend (creates backend inside "learnDB")
5. npm i express mongoose dotenv
6. npm i --save-dev nodemon concurrently (so i will be able to run front and back with one command)

7. cd frontend
8. npx create-react-app . (creates react app in that folder)

in backend 
9. create index.js (require('dotenv').config(), const express, const app, const PORT, app.listen)

10. BACKEND file (when it was global it didnt work, i mean PORT did but later MONGO_URI didnt) .env (PORT=5000, MONGO_URI=)
11. global file .gitignore ()

12. node backend/index.js (to check if server is running)

13. a) go to fronted folder-.gitignore and copy paste everything in our GLOBAL .gitignore

b) replace 
(/node_modules) 
with 
(node_modules
node_modules/)

14. cd frontend
15. Remove-Item -Recurse -Force .git (deletes .git)
16. ls (to see that .git is deleted)
17. fizically delete .gitignore from frontend

18. cd .. (navigate to global "learnDB")
19. git init (creates global git repo --it also shadows node_modules)

20. go to global .gitignore and under .DS_Store add .env
21. go to global package.json replace in "scripts"
("test": "echo \"Error: no test specified\" && exit 1")
with
(    "start": "node backend/index.js",
    "server": "nodemon backend/index.js",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\"")

in global
22. npm run dev

EVERYTHING SHOULD WORK!! FRONT+BACK RUNNING WITH ONE COMMAND

Part 2
BACKEND
1. cd backend
2. create folders (config, models, data)
3. in config folder create db.js (fill it up!!!!)
4. in index.js copy paste (require('./config/db'))

MONGODB ATLAS - lovro123
1. a)left up (folder icon) create new project b) name c)create project
2. a) build a cluster b) free c)aws - frankfurt AND (below) Cluster name d) create cluster
3. Database access
4. a) add new database user b) password c) add user
5. Network access
6. a) Add an IP address b) allow access from anywhere c) confirm
7. Clusters
8. a) connect b) connect your application c) copy MONGO_URI (that string with password and dbname)

BACKEND
1. .env (paste MONGO_URI) and change password and db name
2. cd backend
3. node index.js

EVERYTHING SHOULD WORK!! YOUR ATLAS SHOULD BE CONNECTED

Part 3
BACKEND
1. in models folder create product.model.js (fill it up!!!!)
2. in data folder create shopItems.js (fill it up!!!!)(i skipped this part and insertedMany in seederScript)
3. in backend create seederScript.js file (fill it up!!!!)
4. in package.json add another script ("data:import": "node backend/seederScript")
5. npm run data:import (go to ATLAS - clusters - your cluster - collections)(if there are problems add ip adress in atlas - network access)

EVERYTHING SHOULD WORK!! YOUR ITEMS SHOULD BE IN ATLAS

Part 4 
BACKEND
1. folder routes inside file products.routes.js (fill it up!!!!)

2. go to index.js 
a) npm i body-parser cors
b) add cors and body parser
c) add routes

FRONTEND
1. clean src (delete: setupTests, reportWebVitals, App.test.js, logo, )
2. cd frontend
3. npm i react-router-dom axios
4. go to index.js and import {browserRouter}
5. go to App.js and import {useState, useEffect} {Switch, Route, withRouter} and axios (export default withRouter(App))
6. useEffect - with axios fetch data and setState to response.data
7. create components folder and inside Home component
8. in App create Switch and inside put Route with exact path which renders Home and sends state to it

EVERYTHING SHOULD WORK!! YOUR WEBSITE WORKS













part 5
LATER
w3d7 - 2:35min

Heroku
1. dashboard.herokuapp.com
2. a) new b) create new app c) name d) region e) create app

FRONTEND
3. cd frontend
4. npm run build (create build folder in frontend)

HEROKU
6. settings - reveal config vars
a) key: MONGO_URI
b) value: copy paste from .env
c) press add

BACKEND
7. global npm i path
8. in backend index.js import path and add: (app.use(express.static(path.join(__dirname, 'public')));)
9. in backend create folder public

FRONTEND
10. go to clientSide frontend-build and copy paste everything from there to BACKEND-public folder 

BACKEND
11. in global
12. heroku login
13. press any key to open in browser (it opens heroku-login in browser)

HEROKU-LOGIN
14. press log in

HEROKU
15. go to deploy and scrole down and copy paste (heroku git:remote -a <name>)

BACKEND
16. in global
17. heroku git:remote -a <name>
18. git add .
19. git commit -m ""
20. git push heroku main
21. when it finishes you will get 
(remote:        https://<name>.herokuapp.com/ deployed to Heroku)

EVERYTHING SHOULD WORK!! YOU HAVE DEPLOYED IT AND IT WORKS BUT IT IS NOT YET FETCHING DATA FROM DATABASE

FRONTEND
1. in src create new file config.js
2. inside create (export const API_URL = 'https://<name>.herokuapp.com/api')

3. in App.js (import {API_URL} from './config')
4. in all axios requests change quotes to backticks and url with API_URL
5. axios.get(`${API_URL}/products`, { withCredentials: true })

6. in frontend i deleted build
7. cd frontend
8. npm run build
9. go to clientSide frontend-build and copy paste (and replace) everything from there to BACKEND-public folder
10. cd .. (in global)
11. heroku git:remote -a <name>
12. git add .
13. git commit -m ""
14. git push heroku main


EVERYTHING SHOULD WORK!! FINISH!!!
link: https://atlasanddeploy.herokuapp.com/
