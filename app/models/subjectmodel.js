/**
 * Created by tonim on 22/11/2016.
 */
var mongoose = require('mongoose');

// define the schema for our user model
var SubjectSchema = mongoose.Schema({
    name: {
        type: String
    },
/*
    studies: [{
        study: { type: Schema.ObjectId, ref: "Students" }
    }
    ],
*/
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    when: String

});

module.exports = mongoose.model('Subject', SubjectSchema);
