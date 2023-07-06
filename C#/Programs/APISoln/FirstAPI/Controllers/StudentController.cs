using FirstAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FirstAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private static List<Student> studentsList = new List<Student>
            {
                new Student  {Stud_Id =1, Stud_Name = "Vishal", City = "Thoothukudi", Pincode = 628008},
                new Student { Stud_Id = 2, Stud_Name = "Bharath", City = "Chennai", Pincode = 620028 },
                new Student { Stud_Id = 3, Stud_Name = "Kumar", City = "Mumbai", Pincode = 628018 },
                new Student { Stud_Id = 4, Stud_Name = "Karan", City = "Kolkata", Pincode = 628088 },
            };
        [HttpGet]
        public async Task<ActionResult<List<Student>>> GetAllStudentDetails()
        {
           
            return Ok(studentsList);
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<ActionResult<List<Student>>> GetStudentDetailById(int id)
        {
            //var student = studentsList.Where(s=>s.Stud_Id== id).FirstOrDefault();
            var student = studentsList.Find(s=> s.Stud_Id== id);    
            if (student == null)
            {
                return NotFound("Stud_Id not matching!!");
            }
            return Ok(student);
        }


    }
}
