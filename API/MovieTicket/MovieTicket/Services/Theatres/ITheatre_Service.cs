using Microsoft.AspNetCore.Mvc;
using MovieTicket.Models;
namespace MovieTicket.Services.Theatres
{
    public interface ITheatre_Service
    {
        Task<IEnumerable<Theatre>> GetTheatres();
        Task<List<Theatre>> PostTheatre(Theatre theatre);
        Task<Theatre>? DeleteTheatre(int id);


    }
}
