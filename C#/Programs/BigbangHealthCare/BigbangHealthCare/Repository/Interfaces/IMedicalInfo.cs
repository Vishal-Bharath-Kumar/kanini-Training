using BigbangHealthCare.Models;

namespace BigbangHealthCare.Repository.Interfaces
{
    public interface IMedicalInfo
    {
        Task<IEnumerable<MedicalInfo>> GetMedicalInfo();
        Task<MedicalInfo> GetMedicalInfoById(int id);
        Task<bool> UpdateMedicalInfo(int id, MedicalInfo medicalInfo);
        Task<MedicalInfo> CreateMedicalInfo(MedicalInfo medicalInfo);
        Task<bool> DeleteMedicalInfo(int id);
    }
}
