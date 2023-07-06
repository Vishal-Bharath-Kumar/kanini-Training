using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;
using MovieTicket.Services.ShowTimes;

namespace MovieTicket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShowTimesController : ControllerBase
    {
        private readonly IShowTime_Service _context;

        public ShowTimesController(IShowTime_Service context)
        {
            _context = context;
        }

        // GET: api/ShowTimes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShowTime>>> GetShowTimes()
        {
            var st = await _context.GetShowTimes();
          if (st == null)
          {
              return NotFound();
          }
            return Ok(st);
        }

        // GET: api/ShowTimes/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<ShowTime>> GetShowTime(int id)
        //{
        //  if (_context.ShowTimes == null)
        //  {
        //      return NotFound();
        //  }
        //    var showTime = await _context.ShowTimes.FindAsync(id);

        //    if (showTime == null)
        //    {
        //        return NotFound();
        //    }

        //    return showTime;
        //}

        //// PUT: api/ShowTimes/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutShowTime(int id, ShowTime showTime)
        //{
        //    if (id != showTime.ShowId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(showTime).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ShowTimeExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return NoContent();
        //}

        // POST: api/ShowTimes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ShowTime>> PostShowTime(ShowTime showTime)
        {
            var item = await _context.PostShowTime(showTime);
          if ( item== null)
          {
              return NotFound();
          }

            return Ok(item);
        }

        // DELETE: api/ShowTimes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteShowTime(int id)
        {
            var stime = await _context.DeleteShowTime(id);
            if (stime == null)
            {
                return NotFound();
            }
           

            return NoContent();
        }

       
    }
}
