using Microsoft.EntityFrameworkCore;

namespace AdventureLand.Models
{
    public class AdventureLandDbContext:DbContext
    {
        public AdventureLandDbContext(DbContextOptions<AdventureLandDbContext> options) : base(options) { }

        public DbSet<UserRegistration> Registration { get; set; }
        public DbSet<LandRides> LandRides { get; set; }

        public DbSet<WaterRides> WaterRides { get;set; }

        public DbSet<BookingDetails> BookingDetails { get; set; }



    }
}
