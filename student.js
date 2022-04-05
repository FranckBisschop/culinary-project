const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstName:  String,
    lastName: String,
    cursus:   String,
    classes: [{ body: String, date: Date }],
    enrolled: { type: Date, default: Date.now }
  });

const Student = mongoose.model('Student', studentSchema)

module.exports = Student