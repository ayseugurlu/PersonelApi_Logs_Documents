"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// MongoDB Connection:

const { connect } = require('mongoose')

module.exports = connect(process.env.MONGOURI || 'mongodb+srv://ayseugurlu9135:personnelapi@cluster0.x7h11.mongodb.net/personnelAPI')
    .then(() => console.log('* DB Connected *'))
    .catch(() => console.log('* DB Not Connected *'))

