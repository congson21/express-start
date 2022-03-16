const Courses = require('../models/Course')
class LocationController {

    //GET  /location
    showDetail(req, res) {
        res.render('showLocation')

       
    }
}

module.exports = new LocationController