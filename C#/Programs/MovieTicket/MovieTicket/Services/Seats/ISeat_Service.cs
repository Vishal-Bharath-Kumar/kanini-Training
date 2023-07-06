using Microsoft.AspNetCore.Mvc;
using MovieTicket.Models;
namespace MovieTicket.Services.Seats
{
    public interface ISeat_Service
    {
        Task<IEnumerable<Seat>> GetSeats();
    }
}
