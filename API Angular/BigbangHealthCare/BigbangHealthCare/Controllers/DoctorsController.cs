using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BigbangHealthCare.Data;
using BigbangHealthCare.Models;
using BigbangHealthCare.Repository.Interfaces;
using BigbangHealthCare.Models.DTO;

namespace BigbangHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorsController : ControllerBase
    {
        private readonly IDoctorService _context;

        public DoctorsController(IDoctorService context)
        {
            _context = context;
        }

        // GET: api/Doctors
        [HttpGet]
        public async Task<List<Doctor>> GetDoctor()
        {
          
            return await _context.GetDoctor();
        }

       
       [HttpGet("Doctor")]
        public async Task<List<Doctor>> DoctorDetails()
        {
            return await _context.DoctorDetails();

        }


        [HttpGet("{id}")]
        public async Task<Doctor> logedinDoctor(string id)
        {
            return await _context.logedinDoctor(id);
        }

        // PUT: api/Doctors/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<Doctor> PutDoctor(string id, DoctorUpdateDTO doctor)
        {
           

            return await _context.PutDoctor(id,doctor);
        }

        [HttpPut("Update/{Doctorid}")]
        public async Task<Doctor> updateDoctor(string id, Doctor doctor)
        {


            return await _context.updateDoctor(id, doctor);
        }

        // POST: api/Doctors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
          
            return await _context.PostDoctor(doctor);
        }

        // DELETE: api/Doctors/5
        [HttpDelete("{id}")]
        public async Task<string> DeleteDoctor(string id)
        {
            

            return await _context.DeleteDoctor(id);
        }
        [HttpPut("UpdateStatus/{Doctorid}")]
        public async  Task<Doctor> updateDoctorStatus(string id, UpdatestatusDTO doctor)
        {

            return await _context.updateDoctorStatus(id, doctor);
        }

    }
}
