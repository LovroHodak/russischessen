require('dotenv').config()
require('./config/db.config')
const express = require('express')
const app = express()





const PORT = process.env.PORT 
app.listen(PORT, () => console.log(`Server running on port ${PORT}, dirname ${__dirname}`))