require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const quoteRoutes = require('./routes/quotes')
const userRoutes = require('./routes/user')

const app = express()

app.use(express.json())
app.use(cors())

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/quote', quoteRoutes)
app.use('/api/user', userRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to db & Listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})


