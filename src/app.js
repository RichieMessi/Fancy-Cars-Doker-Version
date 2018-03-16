
const     express                 = require('express')
const     mongoose                = require('mongoose')
const     cors                    = require('cors')
const     path                    = require('path')
const     app                     = express()
const     bodyParser              = require('body-parser')
const     cars                    = require('./routes/cars')
const     check_availability      = require('./routes/availability') 
const     port                    = process.env.PORT || 3000


app.use(express.static(path.join(__dirname, 'public')))


app.use(bodyParser.json())
app.use(cors())

// Mongo Connection
mongoose.connect('mongodb://test:test@ds151927.mlab.com:51927/mycarlist')

mongoose.connection.on('connected', () => {
  console.log('Connected to database mongodb  27017')
})

mongoose.connection.on('error', () => {
  if(err)
  {
    console.log('Error in Database connection : ' + err)
  }
})


// Load Car Model
require('./models/Car')
const Car   = mongoose.model('Car')






app.use('/cars', cars)
app.use('/availability', check_availability)

app.listen(port, () => console.log(`Listening at port ${port}`))