using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;

namespace MovieTicket.Services.Theatres
{
    public class Theatre_Service : ITheatre_Service
    {
        public BooknowTicketsContext _BooknowTicketsContext;
        public Theatre_Service(BooknowTicketsContext booknowTicketsContext) 
        { 
            _BooknowTicketsContext= booknowTicketsContext;
        }
        public async Task<IEnumerable<Theatre>> GetTheatres()
        {
            return await _BooknowTicketsContext.Theatres.ToListAsync();
        }
        public async Task<List<Theatre>> PostTheatre(Theatre theatre)
        {
            await _BooknowTicketsContext.Theatres.AddAsync(theatre);    
            await _BooknowTicketsContext.SaveChangesAsync();
            return await _BooknowTicketsContext.Theatres.ToListAsync() ;
        }
        public async Task<Theatre>? DeleteTheatre(int id)
        {
            var th = await _BooknowTicketsContext.Theatres.FindAsync(id);
            _BooknowTicketsContext.Theatres.Remove(th);
            await _BooknowTicketsContext.SaveChangesAsync() ;
            return th;
        }
    }
}
