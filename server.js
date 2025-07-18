const mongoose = require('mongoose');

const uri = 'mongodb+srv://qasimansaridiamond:Qasim%40123@qasimintern.oguabkc.mongodb.net/internshipDB?retryWrites=true&w=majority&appName=Qasimintern';

mongoose.connect(uri)
  .then(() => console.log("✅ Connected to MongoDB Atlas successfully!"))
  .catch(err => console.error("❌ Connection failed:", err));

// Define schema
const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  course: String
});

const Student = mongoose.model('Student', studentSchema);

// Add a test student
const testStudent = new Student({
  name: 'Qasim Ansari',
  email: 'qasim@example.com',
  course: 'MERN Stack'
});

testStudent.save()
  .then(() => console.log("✅ Test student saved to MongoDB Atlas."))
  .catch(err => console.error("❌ Error saving test student:", err));
