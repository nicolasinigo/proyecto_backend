'use strict';
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    identification: {
        type: String,
        required: true
    },
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, { collection: 'students' }
);

module.exports = userSchema;