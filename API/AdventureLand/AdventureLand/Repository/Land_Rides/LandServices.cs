using AdventureLand.Models;
using Microsoft.EntityFrameworkCore;

namespace AdventureLand.Repository.Land_Rides
{
    public class LandServices : ILandServices
    {

        public AdventureLandDbContext _adventureLandDbcontext;
        public LandServices(AdventureLandDbContext adventureLandDbcontext)
        {
            _adventureLandDbcontext = adventureLandDbcontext;
        }
        public async Task<IEnumerable<LandRides>> GetLandRides()
        {
            return await _adventureLandDbcontext.LandRides.ToListAsync();
        }
        public async Task<LandRides>? GetLandRide(int id)
        {
            var book = await _adventureLandDbcontext.LandRides.FindAsync(id);
            return book;
        }
        public async Task<LandRides> PutLandRide(int id, LandRides landRides)
        {
            var item = await _adventureLandDbcontext.LandRides.FindAsync(id);

            item.landrideName= landRides.landrideName;
            item.rideStatus = landRides.rideStatus;
            item.rideImage = landRides.rideImage;
        
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return landRides;

        }
        public async Task<List<LandRides>> PostLandRide(LandRides landRides)
        {
            await _adventureLandDbcontext.LandRides.AddAsync(landRides);
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return await _adventureLandDbcontext.LandRides.ToListAsync();


        }
        public async Task<LandRides>? DeleteLandRide(int id)
        {
            var book = await _adventureLandDbcontext.LandRides.FindAsync(id);
            _adventureLandDbcontext.LandRides.Remove(book);
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
