using AdventureLand.Models;
using AdventureLand.Repository.Booking_Details;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdventureLand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingController : ControllerBase
    {
        private readonly IBookingServices _context;

        public BookingController(IBookingServices context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BookingDetails>>> GetBookingDetails()
        {
            var th = await _context.GetBookingDetails();
            if (th == null)
            {
                return NotFound();
            }
            return Ok(th);
        }

        // GET: api/Hotels/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<BookingDetails>> GetBookingDetail(int id)
        //{
        //    var Room = _context.GetBookingDetail(id);
        //    if (Room == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(Room);
        //}

        // PUT: api/Hotels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        ////[Authorize]
        //public async Task<ActionResult<BookingDetails>> PutBookingDetail(int id, BookingDetails bookingDetails)
        //{
        //    return Ok(await _context.PutBookingDetail(id,bookingDetails));
        //}

        // POST: api/Hotels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        //[Authorize]
        public async Task<ActionResult<List<BookingDetails>>> PostBookingDetail(BookingDetails bookingDetails)
        {
            var item = await _context.PostBookingDetail(bookingDetails);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // DELETE: api/Hotels/5
        //[HttpDelete("{id}")]
        ////[Authorize]
        //public async Task<IActionResult> DeleteBookingDetail(int id)
        //{
        //    var room = await _context.DeleteBookingDetail(id);
        //    if (room == null)
        //    {
        //        return NotFound();

        //    }
        //    return Ok(room);

        //}
    }
}
