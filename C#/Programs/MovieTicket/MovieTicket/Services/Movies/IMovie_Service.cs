using Microsoft.AspNetCore.Mvc;
using MovieTicket.Models;
namespace MovieTicket.Services.Movies
{
    public interface IMovie_Service
    {
        Task<IEnumerable<Movie>> GetMovies();
       
        Task<List<Movie>> PostMovie(Movie movie);
        Task<Movie>? DeleteMovie(int id);
    }
}
