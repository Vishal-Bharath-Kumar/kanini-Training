using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;
namespace MovieTicket.Services.ShowTimes
{
    public class ShowTime_Service :IShowTime_Service
    {
        public BooknowTicketsContext _BooknowTicketsContext;
        public ShowTime_Service(BooknowTicketsContext booknowTicketsContext)
        {
            _BooknowTicketsContext = booknowTicketsContext;
        }
        public async Task<IEnumerable<ShowTime>> GetShowTimes()
        {
            return await _BooknowTicketsContext.ShowTimes.ToListAsync();    
        }
        public async Task<List<ShowTime>> PostShowTime(ShowTime showTime)
        {
            var item = _BooknowTicketsContext.ShowTimes.AddAsync(showTime);
            await _BooknowTicketsContext.SaveChangesAsync();
            return await _BooknowTicketsContext.ShowTimes.ToListAsync();
        }
        public async Task<ShowTime> DeleteShowTime(int id)
        {
            var st = await _BooknowTicketsContext.ShowTimes.FindAsync(id);
            _BooknowTicketsContext.ShowTimes.Remove(st);
            await _BooknowTicketsContext.SaveChangesAsync();
            return st;
        }
    }
}
