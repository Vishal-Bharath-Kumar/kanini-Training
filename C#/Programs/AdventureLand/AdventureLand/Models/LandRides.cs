using System.ComponentModel.DataAnnotations;

namespace AdventureLand.Models
{
    public class LandRides
    {
        [Key]
        public int landrideId { get; set; }

        public string? landrideName { get; set; }

        public string? rideStatus { get; set; }

        public string? rideImage { get; set; }  
    }
}
