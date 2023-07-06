using BigbangHealthCare.Models;
using BigbangHealthCare.Models.DTO;
namespace BigbangHealthCare.Repository.Interfaces
{
    public interface IDoctorService
    {

        public Task<List<Doctor>> GetDoctor();
        public  Task<List<Doctor>> DoctorDetails();

        public Task<Doctor> PutDoctor(string id, DoctorUpdateDTO doctor);
        public  Task<Doctor> PostDoctor(Doctor doctor);
        public Task<string> DeleteDoctor(string id);
        public Task<Doctor> logedinDoctor(string id);
        public  Task<Doctor> updateDoctor(string id, Doctor doctor);
        public Task<Doctor> updateDoctorStatus(string id, UpdatestatusDTO doctor);
    }
}
