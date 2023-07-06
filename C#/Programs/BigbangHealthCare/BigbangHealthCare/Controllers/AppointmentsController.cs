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

namespace BigbangHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly IAppointmentService _context;

        public AppointmentsController(IAppointmentService context)
        {
            _context = context;
        }


        // GET: api/Doctors
        [HttpGet]
        public async Task<List<Appointment>> GetAppointment()
        {

            return await _context.GetAppointment(); ;
        }

        // GET: api/Doctors/5
        [HttpGet("{id}")]
        public async Task<Appointment> GetAppointment(int id)
        {


            return await _context.GetAppointment(id);
        }

     
        // POST: api/Doctors
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<Appointment> PostAppointment(Appointment appointment)
        {

            return await _context.PostAppointment(appointment);
        }

        // DELETE: api/Doctors/5
        [HttpDelete("{id}")]
        public async Task<string> DeleteAppointment(int id)
        {


            return await _context.DeleteAppointment(id);
        }
    }
}
