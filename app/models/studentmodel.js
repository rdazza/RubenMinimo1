/**
 * Created by tonim on 22/11/2016.
 */
var mongoose = require('mongoose');

// define the schema for our user model
var StudentSchema = mongoose.Schema({

    name: {
        type: String
    },
    address: {
        type: String
    },
    phones: [
        {
            home: {
                type: String
            },
            work:{
                type: String
            }
        }
    ],

    studies: {
        type: String
    },

    /*
    studies: [{
        study: { type: Schema.ObjectId, ref: "Students" }
    }
    ],
*/

    subjects: [{type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }]
});

module.exports = mongoose.model('Student', StudentSchema);