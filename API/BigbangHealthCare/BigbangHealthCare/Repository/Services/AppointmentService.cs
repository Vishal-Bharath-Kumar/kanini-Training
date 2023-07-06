using BigbangHealthCare.Data;
using BigbangHealthCare.Models;
using BigbangHealthCare.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BigbangHealthCare.Repository.Services
{
    public class AppointmentService : IAppointmentService
    {

        private readonly HealthCareDBcontext _context;

        public AppointmentService(HealthCareDBcontext context)
        {
            _context = context;
        }

        public async Task<List<Appointment>> GetAppointment()
        {
            return await _context.Appointments.ToListAsync();

        }

        public async Task<Appointment> GetAppointment(int id)
        {
            var doc = await _context.Appointments.FirstOrDefaultAsync(x => x.AppointmentId == id);
            if (doc == null)
            {
                return null;
            }
            return doc;

        }



        public async Task<Appointment> PostAppointment(Appointment appointment)
        {
            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();
            return appointment;
        }

        public async Task<string> DeleteAppointment(int id)
        {
            var doc = await _context.Appointments.FirstOrDefaultAsync(x => x.AppointmentId == id);
            if (doc == null)
            {
                return null;
            }
            _context.Appointments.Remove(doc);
            await _context.SaveChangesAsync();
            return "Deleted Successfully";

        }
    }
}