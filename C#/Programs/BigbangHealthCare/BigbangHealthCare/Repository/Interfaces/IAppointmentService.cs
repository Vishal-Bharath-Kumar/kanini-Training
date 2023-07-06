using BigbangHealthCare.Models;

namespace BigbangHealthCare.Repository.Interfaces
{
    public interface IAppointmentService
    {
        public Task<List<Appointment>> GetAppointment();
        public Task<Appointment> GetAppointment(int id);

     
        public Task<Appointment> PostAppointment(Appointment appointment);
        public Task<string> DeleteAppointment(int id);
    }
}
