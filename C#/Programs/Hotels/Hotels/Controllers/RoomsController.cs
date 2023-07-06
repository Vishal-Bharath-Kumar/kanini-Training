using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Hotels.Model;
using Hotels.Repository.Hotels;
using Hotels.Repository.Hotels.Rooms;

namespace Hotels.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomsController : ControllerBase
    {
        private readonly IRooms_Services _context;

        public RoomsController(IRooms_Services context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Room>>> GetRooms()
        {
            var th = await _context.GetRooms();
            if (th == null)
            {
                return NotFound();
            }
            return Ok(th);
        }

        // GET: api/Hotels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetRoom(int id)
        {
            var Room = _context.GetRoom(id);
            if (Room == null)
            {
                return NotFound();
            }
            return Ok(Room);
        }

        // PUT: api/Hotels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<ActionResult<Room>> PutRoom(int id, Room room)
        {
            return Ok(await _context.PutRoom(id, room));
        }

        // POST: api/Hotels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<List<Room>>> PostRoom(Room room)
        {
            var item = await _context.PostRoom(room);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // DELETE: api/Hotels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(int id)
        {
            var room = await _context.DeleteRoom(id);
            if (room == null)
            {
                return NotFound();

            }
            return Ok(room);

        }
        //Filter
        //[HttpGet("filter")]
        //public async Task<IActionResult> FilterHotels([FromQuery] string location, [FromQuery] decimal minPrice, [FromQuery] decimal maxPrice)
        //{
        //    // Filter the hotels based on the provided criteria
        //    var filteredHotels = await _context.FilterHotels(location, minPrice, maxPrice);
        //    return Ok(filteredHotels);
        //}
        ////Count
        //[HttpGet("{hotelId}/rooms/count")]
        //public async Task<IActionResult> GetAvailableRoomCount(int hotelId)
        //{
        //    // Retrieve the hotel by ID and get the count of available rooms
        //    var availableRoomCount = await _context.GetAvailableRoomCount(hotelId);
        //    return Ok(availableRoomCount);
        //}
    }
}
