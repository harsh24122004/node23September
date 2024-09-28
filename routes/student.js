const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended:false}));
const studentcontroller = require('../controllers/studentcontroller')
router.get('/',(req,res)=>{
    res.render('home')
})
router.post('/add/student',(req,res)=>{
    studentcontroller.addstudent(req,res)
})
router.get('/students',(req,res)=>{
    studentcontroller.getStudents(req,res)
})
router.get('/student/page/for/edit/:id',(req,res)=>{
    studentcontroller.getPageforEditStudent(req,res)
})
router.post('/edit/student/:id',(req,res)=>{
    studentcontroller.editStudent(req,res)
})
router.get('/student/delete/:id',(req,res)=>{
studentcontroller.deleteStudent(req,res);
})
module.exports = router;