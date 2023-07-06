using Microsoft.AspNetCore.Mvc;
using MovieTicket.Models;

namespace MovieTicket.Services.Booking_Details
{
    public interface IBooking_Details_Services
    {
        Task<IEnumerable<BookingDetail>> GetBookingDetails();
    }
}
