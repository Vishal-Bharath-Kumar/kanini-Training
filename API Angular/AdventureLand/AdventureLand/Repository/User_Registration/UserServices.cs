using AdventureLand.Models;
using Microsoft.EntityFrameworkCore;

namespace AdventureLand.Repository.User_Registration
{
    public class UserServices : IUserServices
    {
        public AdventureLandDbContext _adventureLandDbcontext;
        public UserServices(AdventureLandDbContext adventureLandDbcontext)
        {
            _adventureLandDbcontext = adventureLandDbcontext;
        }
        public async Task<IEnumerable<UserRegistration>> GetLogIns()
        {
            return await _adventureLandDbcontext.Registration.ToListAsync();
        }
        public async Task<UserRegistration>? GetLogIn(int id)
        {
            var book = await _adventureLandDbcontext.Registration.FindAsync(id);
            return book;
        }
        public async Task<UserRegistration> PutLogIn(int id, UserRegistration userRegistration)
        {
            var item = await _adventureLandDbcontext.Registration.FindAsync(id);

            item.UserName = userRegistration.UserName;
            item.Email = userRegistration.Email;
            item.Password = userRegistration.Password;

            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return userRegistration;

        }
        public async Task<List<UserRegistration>> PostLogIn(UserRegistration userRegistration)
        {
            await _adventureLandDbcontext.Registration.AddAsync(userRegistration);
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return await _adventureLandDbcontext.Registration.ToListAsync();


        }
        public async Task<UserRegistration>? DeleteLogIn(int id)
        {
            var book = await _adventureLandDbcontext.Registration.FindAsync(id);
            _adventureLandDbcontext.Registration.Remove(book);
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return book;

        }
    }
}
