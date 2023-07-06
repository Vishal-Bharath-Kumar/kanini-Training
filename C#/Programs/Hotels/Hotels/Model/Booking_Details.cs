using System.ComponentModel.DataAnnotations;

namespace Hotels.Model
{
    public class Booking_Details
    {
        [Key]
        public int Booking_Id { get; set; }

        public string Customer_Name { get; set; }

        public DateTime CheckIn { get; set; }

        public DateTime Checkout { get; set; }

        public ICollection<Hotel> Hotel { get; set; }

        public ICollection<Room> Room { get; set; }


    }
}
