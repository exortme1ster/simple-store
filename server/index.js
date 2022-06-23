// * Config
require('dotenv').config()

// * Models
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

// * Modules
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const bodyParser = require('body-parser')

// * Port
const PORT = process.env.PORT || 5001

// * Initial config
const app = express()

// * Bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// * Usages
app.use(cors())


app.use(express.json())
app.use(fileUpload({}))


app.get('/', (req, res) => {
  res.status(200).json({message: 'WORKING!'})
})

app.use('/api', router)

const start = async () => {
  try{
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch(err){
    console.log('Server Error!', err.message)
    process.exit(1)
  }
}

start()

