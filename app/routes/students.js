
var express = require('express');
var router = express.Router();
var Student = require('../models/studentmodel');

// Create a student
router.post('/', function(req, res) {

    Student.create({
        name: req.body.name,
        address: req.body.address,
        studies: req.body.studies,
        phones: [
    {
            home: req.body.casa,
            work: req.body.curro
    },
            /*{
        home: req.body.contact2,
            work: req.body.number2
    }*/

        ]
    }, function(err, student) {
        if (err)
            res.send(err);
        // get and return all the students after you create another
        Student.find(function(err, students) {
            if (err)
                res.send(err)
            res.send(students);
        });
    });
});
// Get a student
router.get('/:student_id', function(req, res) {
    var id = req.params.student_id;
    Student.findById(id).populate('subjects').exec().then(function(err, student) {
        if (err)
            res.send(err)
        res.send(student);
    });
});


//get a student by name
router.get('/search/:name', function(req, res) {
    console.log(req.params.name);
    Student.findOne({name: req.params.name}, function (err, existingstudent) {
        if(existingstudent){
            res.send(existingstudent);

        }
        else{
            res.status(400).send(err);
        }
    });
});

//get a student by studies
router.get('/searchStudies/:studies', function(req, res) {
    console.log(req.params.studies);
    Student.find({studies: req.params.studies}, function (err, existingstudents) {
        if(!err){
            res.send(existingstudents);

        }
        else{
            res.status(400).send(err);
        }
    });
});




// Get all the students
router.get('/', function(req, res) {
    Student.find(function(err, students) {
        if (err)
            res.send(err)
        res.send(students);
    });
});

//Delete a student
router.delete('/:student_id', function(req, res) {
    Student.remove({
        _id : req.params.student_id
    }, function(err, subject) {
        if (err)
            res.send(err);
        // get and return all the students after you delete this one
        Student.find(function(err, students) {
            if (err)
                res.send(err)
            res.send(students);
        });
    });
});

router.post('/addphone/:student_id', function(req, res) {
    var query = {_id: req.params.student_id};
    var update = {$addToSet : {"phones" :{home: req.body.home, work: req.body.work}}};
    var options = {};
    Student.findOneAndUpdate(query, update, options, function(err, student) {
        if (err) {
            res.send(err);
        }
        if(student){
            Student.findById(student._id).populate('phones').exec().then(function(err, student) {
                if (err)
                    res.send(err)
                res.send(student);
            });
        }
    });
});

router.delete('/deletephone/:student_id/:phone_id', function(req, res) {
    var query = {_id: req.params.student_id};
    var update = {$pull : {"phones":{ _id: req.params.phone_id}}};
    var options = {};
    Student.findOneAndUpdate(query, update, options, function(err, student) {
        if (err) {
            res.send(err);
        }
        if(student){
            Student.findById(student._id).populate('phones').exec().then(function(err, student) {
                if (err)
                    res.send(err)
                res.send(student);
            });
        }
    });
});




module.exports = router;