using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hotels.Model;
using Hotels.Repository.Hotels;

namespace Hotels.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelsController : ControllerBase
    {
        private readonly IHotels_Services _context;

        public HotelsController(IHotels_Services context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotel>>> GetHotels()
        {
            var th = await _context.GetHotels();
            if (th == null)
            {
                return NotFound();
            }
            return Ok(th);
        }

        // GET: api/Hotels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Hotel>> GetHotel(int id)
        {
            var hotel = _context.GetHotel(id);
            if (hotel == null)
            {
                return NotFound();
            }
            return Ok(hotel);
        }

        // PUT: api/Hotels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<Hotel>> PutHotel(int id, Hotel hotel)
        {
            return Ok(await _context.PutHotel(id, hotel));
        }

        // POST: api/Hotels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<List<Hotel>>> PostHotel(Hotel hotel)
        {
            var item = await _context.PostHotel(hotel);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // DELETE: api/Hotels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(int id)
        {
            var hotel = await _context.DeleteHotel(id);
            if (hotel == null)
            {
                return NotFound();

            }
            return Ok(hotel);



        }
        //Filter
        [HttpGet("filter")]
        public async Task<IActionResult> FilterHotels([FromQuery] string location, [FromQuery] decimal minPrice, [FromQuery] decimal maxPrice)
        {
            // Filter the hotels based on the provided criteria
            var filteredHotels = await _context.FilterHotels(location, minPrice, maxPrice);
            return Ok(filteredHotels);
        }
    }
}
