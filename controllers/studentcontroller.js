const Student = require('../models/Student');

async function addstudent(req,res){
   try {
      
     
      let student = new Student(req.body);
      await student.save();
      let students = await Student.find({});
      res.render('studentlist',{
        students : students
      })


   } catch (error) {

    console.log(err)

   }
}

async function getStudents(req,res){
   try {
      let students = await Student.find({});
      res.render('studentlist',{
        students : students
      })
    
   } catch (error) {
    console.log(error)
   }
}

async function getPageforEditStudent(req,res){
         try {
            let id = req.params.id;
            let student = await Student.findOne({_id:id});

            res.render('studentforedit',{
                student : student
                })
        

         } catch (error) {
            console.log(error)
         }  
}
async function editStudent(req,res) {
   try {
      let id = req.params.id;
      let student = await Student.findOne({_id:id})

      student.rollNo = req.body.rollNo;
      student.firstName = req.body.firstName;
      student.lastName = req.body.lastName;
      student.fatherName = req.body.fatherName;
      student.adharCardNo = req.body.adharCardNo;
      student.MobileNo = req.body.MobileNo;
      await student.save();
      let students = await Student.find({});
      res.render('studentlist',{
        students : students
      })
   } catch (error) {
      console.log(error);
   }
 
}

async function deleteStudent(req,res) {
   try {
      let id = req.params.id;
      console.log(id,"id");
      await Student.deleteOne({_id:id});
      let students = await Student.find({});
      res.render('studentlist',{
        students : students
      })
   } catch (error) {
      
   }
   
}

module.exports = {
    addstudent,
    getStudents,
    getPageforEditStudent,
editStudent,
deleteStudent
}