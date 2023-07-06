using BigbangHealthCare.Data;
using BigbangHealthCare.Models;
using BigbangHealthCare.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BigbangHealthCare.Repository.Services
{
    public class MedicalInfoService:IMedicalInfo
    {


        private readonly HealthCareDBcontext _context;

        public MedicalInfoService(HealthCareDBcontext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<MedicalInfo>> GetMedicalInfo()
        {
            return await _context.MedicalInfo.ToListAsync();
        }

        public async Task<MedicalInfo> GetMedicalInfoById(int id)
        {
            return await _context.MedicalInfo.FindAsync(id);
        }

        public async Task<bool> UpdateMedicalInfo(int id, MedicalInfo medicalInfo)
        {
            if (id != medicalInfo.Id)
            {
                return false;
            }

            _context.Entry(medicalInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicalInfoExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }

            return true;
        }

        public async Task<MedicalInfo> CreateMedicalInfo(MedicalInfo medicalInfo)
        {
            _context.MedicalInfo.Add(medicalInfo);
            await _context.SaveChangesAsync();

            return medicalInfo;
        }

        public async Task<bool> DeleteMedicalInfo(int id)
        {
            var medicalInfo = await _context.MedicalInfo.FindAsync(id);
            if (medicalInfo == null)
            {
                return false;
            }

            _context.MedicalInfo.Remove(medicalInfo);
            await _context.SaveChangesAsync();

            return true;
        }

        private bool MedicalInfoExists(int id)
        {
            return _context.MedicalInfo.Any(e => e.Id == id);
        }
    }
}
