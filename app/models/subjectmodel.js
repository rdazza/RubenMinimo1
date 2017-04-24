
var mongoose = require('mongoose');

// define the schema for our user model
var SubjectSchema = mongoose.Schema({
    name: {
        type: String
    },

    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    when: String

});

module.exports = mongoose.model('Subject', SubjectSchema);
