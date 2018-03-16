const       express       = require('express')
const       router        = express.Router()
const       mongoose      = require('mongoose')



// Load Car Model
require('../models/Car')
const Car   = mongoose.model('Car')




router.get('/', (req, res) => {
  Car.find((err, cars) => {
    res.json(cars)
  })
  // res.json('coming')
})

// Add Cars
// router.post('/cars', (req, res, next) => {
//   // Logic to add contact
//   let newCar = new Car({
//     id: req.body.id,
//     img: req.body.img,
//     name: req.body.name,
//     make: req.body.make,
//     model: req.body.model,
//     year: req.body.year,
//     availability: req.body.availability
//   })

//   newCar.save((err, car) => {
//     if(err){
//       res.json({msg: err})
//     } else {
//       res.json({msg: 'Car added Successfully'})
//     }
//   })
// })



module.exports = router