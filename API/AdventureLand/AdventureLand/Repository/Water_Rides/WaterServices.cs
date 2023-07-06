using AdventureLand.Models;
using Microsoft.EntityFrameworkCore;

namespace AdventureLand.Repository.Water_Rides
{
    public class WaterServices : IWaterServices
    {
        public AdventureLandDbContext _adventureLandDbcontext;
        public WaterServices(AdventureLandDbContext adventureLandDbcontext)
        {
            _adventureLandDbcontext = adventureLandDbcontext;
        }
        public async Task<IEnumerable<WaterRides>> GetWaterRides()
        {
            return await _adventureLandDbcontext.WaterRides.ToListAsync();
        }
        public async Task<WaterRides>? GetWaterRide(int id)
        {
            var book = await _adventureLandDbcontext.WaterRides.FindAsync(id);
            return book;
        }
        public async Task<WaterRides> PutWaterRide(int id, WaterRides waterRides)
        {
            var item = await _adventureLandDbcontext.WaterRides.FindAsync(id);

            item.waterRideName = waterRides.waterRideName;
            item.rideStatus = waterRides.rideStatus;
            item.rideImage = waterRides.rideImage;

            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return waterRides;

        }
        public async Task<List<WaterRides>> PostWaterRide(WaterRides waterRides)
        {
            await _adventureLandDbcontext.WaterRides.AddAsync(waterRides);
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return await _adventureLandDbcontext.WaterRides.ToListAsync();


        }
        public async Task<WaterRides>? DeleteWaterRide(int id)
        {
            var book = await _adventureLandDbcontext.WaterRides.FindAsync(id);
            _adventureLandDbcontext.WaterRides.Remove(book);
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
