const       express       = require('express')
const       router        = express.Router()
const       mongoose      = require('mongoose')


const       inStock                = { 'Available': 'In Dealership'},
            outOfStock             = { 'Out of Stock': 'Unavailable'}

// Load Car Model
require('../models/Car')
const Car   = mongoose.model('Car')


router.get('/', (req, res) => {

  Car.findOne({
    id: req.query.id
  }).then((car) => {
    let demoArray = Array.from(car)
    demoArray.push(car)
    demoArray.map((i) => {
      if(i.availability === true){
        res.send(inStock)
      } else {
        res.send(outOfStock)
      }
    })
    
  })
})




// router.get('/availability', (req, res) => {
//   res.send('AVAILABILITY OF CARS')
// })

module.exports = router