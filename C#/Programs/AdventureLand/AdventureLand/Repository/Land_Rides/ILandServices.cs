using AdventureLand.Models;

namespace AdventureLand.Repository.Land_Rides
{
    public interface ILandServices
    {
        Task<IEnumerable<LandRides>> GetLandRides();
        Task<LandRides>? GetLandRide(int id);
        Task<LandRides> PutLandRide(int id, LandRides landRides);
        Task<List<LandRides>> PostLandRide(LandRides landRides);
        Task<LandRides>? DeleteLandRide(int id);
    }
}
