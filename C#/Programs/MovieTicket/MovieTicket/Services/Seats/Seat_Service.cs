using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;

namespace MovieTicket.Services.Seats
{
    public class Seat_Service :ISeat_Service
    {
        public BooknowTicketsContext _BooknowTicketsContext;
        public Seat_Service(BooknowTicketsContext booknowTicketsContext)
        {
            _BooknowTicketsContext = booknowTicketsContext;
        }
        public async Task<IEnumerable<Seat>> GetSeats()
        {
            return await _BooknowTicketsContext.Seats.ToListAsync();
        }

    }
}
