const express = require('express')
const cors = require('cors')

const PORT = 3000

const app = express()

app.get("/",(req,res)=> res.json("welcome to the main route!"))

app.listen(PORT,()=> console.log(`server running on port ${PORT}....`))