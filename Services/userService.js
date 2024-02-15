const User = require('../models/User.js');

exports.getInfo = (userId) => User.findById(userId).populate(['createdCourses', 'signeUpCourses']);