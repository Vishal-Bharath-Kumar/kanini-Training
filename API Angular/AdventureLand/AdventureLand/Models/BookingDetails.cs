using System.ComponentModel.DataAnnotations;

namespace AdventureLand.Models
{
    public class BookingDetails
    {
        [Key]
        public int bookingId { get; set; }

        public string? userName { get; set; }

        public string? emailId { get; set; }

        public DateTime? bookingDate { get; set; }

        public double? price { get; set; }
    }
}
