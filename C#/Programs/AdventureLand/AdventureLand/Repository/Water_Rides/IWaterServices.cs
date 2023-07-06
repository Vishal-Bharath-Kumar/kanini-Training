using AdventureLand.Models;

namespace AdventureLand.Repository.Water_Rides
{
    public interface IWaterServices
    {

        Task<IEnumerable<WaterRides>> GetWaterRides();
        Task<WaterRides>? GetWaterRide(int id);
        Task<WaterRides> PutWaterRide(int id, WaterRides waterRides);
        Task<List<WaterRides>> PostWaterRide(WaterRides waterRides);
        Task<WaterRides>? DeleteWaterRide(int id);
    }
}
