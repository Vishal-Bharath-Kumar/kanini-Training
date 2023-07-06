using BigbangHealthCare.Data;
using BigbangHealthCare.Models;
using BigbangHealthCare.Models.DTO;
using BigbangHealthCare.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BigbangHealthCare.Repository.Services
{
    public class DoctorService:IDoctorService
    {

        private readonly HealthCareDBcontext _context;

        public DoctorService(HealthCareDBcontext context)
        {
            _context = context;
        }

        public async Task<List<Doctor>> GetDoctor()
        {
            return await _context.Doctor.Where(d => d.requestStatus == "request").ToListAsync(); 

        }

     
      public async Task<List<Doctor>> DoctorDetails()
        {
            return await _context.Doctor.Where(d => d.requestStatus == "Accepted").ToListAsync();

        }

        public async Task<Doctor> logedinDoctor(string id)
        {
            var doc = _context.Doctor.Where(d => d.requestStatus == "Accepted").FirstOrDefaultAsync(x => x.Id == id);
            return await doc;
        }

        public async Task<Doctor> PutDoctor(string id, DoctorUpdateDTO doctor)
        {
            var doc = await _context.Doctor.FirstOrDefaultAsync(x => x.Id == id);
            if(doc == null)
            {
                return null;
            }
           /* doc.Id = doctor.Id;*/
            doc.phone=doctor.phone;
            doc.Email=doctor.Email;
            doc.Experiance=doctor.Experiance;
            doc.Specialization=doctor.Specialization;
            doc.image = doctor.image;
            await _context.SaveChangesAsync();

            return doc;
            

        }
        public async Task<Doctor> updateDoctor(string id, Doctor doctor)
        {
            var doc = await _context.Doctor.FirstOrDefaultAsync(x => x.Id == id);
            if(doc != null)
            {
                doc.requestStatus=doctor.requestStatus;
                await _context.SaveChangesAsync();
                return doc;
            }
            return null;
        }
        public async  Task<Doctor> updateDoctorStatus(string id, UpdatestatusDTO doctor)
        {
            var doc = await _context.Doctor.FirstOrDefaultAsync(x => x.Id == id);
            if (doc != null)
            {
                doc.requestStatus = doctor.requestStatus;
                await _context.SaveChangesAsync();
                return doc;
            }
            return doc;
        }

        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
            _context.Doctor.Add(doctor);
            await _context.SaveChangesAsync();
            return doctor;
        }

        public async Task<string> DeleteDoctor(string id)
        {
            var doc = await _context.Doctor.FirstOrDefaultAsync(dt=>dt.Id==id);
            if(doc==null)
            {
                return null;
            }
            _context.Doctor.Remove(doc);
            await _context.SaveChangesAsync();
            return "Deleted Successfully";

        }

    }
}
