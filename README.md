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

10. global file .env (PORT=5000, MONGO_URI=)
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