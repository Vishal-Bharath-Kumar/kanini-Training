using Microsoft.AspNetCore.Mvc;
using MovieTicket.Models;
namespace MovieTicket.Services.ShowTimes
{
    public interface IShowTime_Service
    {
        Task<IEnumerable<ShowTime>> GetShowTimes();
        Task<List<ShowTime>> PostShowTime(ShowTime showTime);
        Task<ShowTime>? DeleteShowTime(int id);

    }
}
