using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;
using MovieTicket.Services.Theatres;

namespace MovieTicket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TheatresController : ControllerBase
    {
        private readonly ITheatre_Service _context;

        public TheatresController(ITheatre_Service context)
        {
            _context = context;
        }

        // GET: api/Theatres
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Theatre>>> GetTheatres()
        {
            var th = await _context.GetTheatres();
          if (th == null)
          {
              return NotFound();
          }
            return Ok(th);
        }

        // GET: api/Theatres/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<Theatre>> GetTheatre(int id)
        //{
        //  if (_context.Theatres == null)
        //  {
        //      return NotFound();
        //  }
        //    var theatre = await _context.Theatres.FindAsync(id);

        //    if (theatre == null)
        //    {
        //        return NotFound();
        //    }

        //    return theatre;
        //}

        //// PUT: api/Theatres/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //public async Task<IActionResult> PutTheatre(int id, Theatre theatre)
        //{
        //    if (id != theatre.TheatreId)
        //    {
        //        return BadRequest();
        //    }

        //    _context.Entry(theatre).State = EntityState.Modified;

        //    try
        //    {
        //        await _context.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!TheatreExists(id))
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

        // POST: api/Theatres
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Theatre>> PostTheatre(Theatre theatre)
        {
            var item = await _context.PostTheatre(theatre);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // DELETE: api/Theatres/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTheatre(int id)
        {
            var theat = await _context.DeleteTheatre(id);
            if (theat == null)
            {
                return NotFound();
            }
            
            return NoContent();
        }

        
    }
}
