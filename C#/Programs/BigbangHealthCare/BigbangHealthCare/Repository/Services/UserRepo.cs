using BigbangHealthCare.Data;
using BigbangHealthCare.Models;
using JWTAuthenticationApp.Interfaces;
using JWTAuthenticationApp.Models;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.Diagnostics;

namespace JWTAuthenticationApp.Services
{
    public class UserRepo : IBaseRepo<string, User>
    {
        private readonly HealthCareDBcontext _context;

        public UserRepo(HealthCareDBcontext context)
        {
            _context = context;
        }
        public User Add(User item)
        {
            try
            {
                _context.Add(item);
                _context.SaveChanges();
                return item;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                Debug.WriteLine(item);
            }
            return null;
        }

        public User Get(string key)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == key);
            return user;
        }

        public User Delete(string id)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == id);
            _context.Users.Remove(user);
            _context.SaveChanges();
            return user;
        }


    }
}