using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;
namespace MovieTicket.Services.Movies
{
    public class Movie_Service : IMovie_Service
    {
        public BooknowTicketsContext _booknowTicketsContext;
        public Movie_Service(BooknowTicketsContext booknowTicketsContext)
        {
            _booknowTicketsContext = booknowTicketsContext;
        }
        public async Task<IEnumerable<Movie>> GetMovies()
        {
            return await _booknowTicketsContext.Movies.ToListAsync();
        }
        public async Task<List<Movie>> PostMovie(Movie movie)
        {
            await _booknowTicketsContext.Movies.AddAsync(movie);
            await _booknowTicketsContext.SaveChangesAsync();
            return await _booknowTicketsContext.Movies.ToListAsync() ;
        }
        public async Task<Movie>? DeleteMovie(int id)
        {
            var mo = await _booknowTicketsContext.Movies.FindAsync(id);
            _booknowTicketsContext.Movies.Remove(mo);
            await _booknowTicketsContext.SaveChangesAsync() ;
            return mo;
        }
    }
}
