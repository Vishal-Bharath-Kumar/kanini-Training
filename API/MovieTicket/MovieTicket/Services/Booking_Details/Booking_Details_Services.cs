using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;

namespace MovieTicket.Services.Booking_Details
{
    public class Booking_Details_Services:IBooking_Details_Services
    {
        private readonly BooknowTicketsContext _booknowTicketsContext;
public Booking_Details_Services(BooknowTicketsContext booknowTicketsContext)
        {
            _booknowTicketsContext= booknowTicketsContext;
        }
        public async Task<IEnumerable<BookingDetail>> GetBookingDetails()
        {
            return await _booknowTicketsContext.BookingDetails.ToListAsync();
        }
    }
}
