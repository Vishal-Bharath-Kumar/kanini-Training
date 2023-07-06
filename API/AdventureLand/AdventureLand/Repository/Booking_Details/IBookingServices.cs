using AdventureLand.Models;
namespace AdventureLand.Repository.Booking_Details

{
    public interface IBookingServices
    {
        Task<IEnumerable<BookingDetails>> GetBookingDetails();
        Task<BookingDetails>? GetBookingDetail(int id);
        Task<BookingDetails> PutBookingDetail(int id, BookingDetails bookingDetails);
        Task<List<BookingDetails>> PostBookingDetail(BookingDetails bookingDetails);
        Task<BookingDetails>? DeleteBookingDetail(int id);
    }
}
