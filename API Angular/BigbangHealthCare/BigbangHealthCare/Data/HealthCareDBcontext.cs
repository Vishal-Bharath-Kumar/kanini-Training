using BigbangHealthCare.Models;
using Microsoft.EntityFrameworkCore;

namespace BigbangHealthCare.Data
{
    public class HealthCareDBcontext : DbContext
    {
       
            public HealthCareDBcontext(DbContextOptions<HealthCareDBcontext> options) : base(options) { }
            public DbSet<User> Users { get; set; }
            public DbSet<Doctor> Doctor { get; set; }

            public DbSet<Appointment> Appointments { get; set; }
            
             public DbSet<MedicalInfo> MedicalInfo { get; set; } 
        }
    }


