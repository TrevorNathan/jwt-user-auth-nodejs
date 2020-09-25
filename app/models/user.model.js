/**
 * User object will have a roles array that contains
 *  ids in roles collection as reference.
 */

const mongoose = require('mongoose');
const { model } = require('./role.model');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        roles: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
            }
        ]

    })
);

model.exports  = User;