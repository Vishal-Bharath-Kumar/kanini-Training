using System.ComponentModel.DataAnnotations;

namespace AdventureLand.Models
{
    public class WaterRides
    {
        [Key]
        public int waterRideId { get; set; }

        public string? waterRideName { get; set; }

        public string? rideStatus { get; set; }

        public string? rideImage { get;set; }
    }
}
