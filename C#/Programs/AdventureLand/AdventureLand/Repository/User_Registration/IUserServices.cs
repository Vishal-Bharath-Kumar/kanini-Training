using AdventureLand.Models;

namespace AdventureLand.Repository.User_Registration
{
    public interface IUserServices
    {
        Task<IEnumerable<UserRegistration>> GetLogIns();
        Task<UserRegistration>? GetLogIn(int id);
        Task<UserRegistration> PutLogIn(int id, UserRegistration userRegistration);
        Task<List<UserRegistration>> PostLogIn(UserRegistration userRegistration);
        Task<UserRegistration>? DeleteLogIn(int id);
    }
}
