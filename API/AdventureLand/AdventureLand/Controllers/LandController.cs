using AdventureLand.Models;
using AdventureLand.Repository.Booking_Details;
using AdventureLand.Repository.Land_Rides;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace AdventureLand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LandController : ControllerBase
    {
        private readonly ILandServices _context;

        public LandController(ILandServices context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        [SwaggerOperation(Summary = "Get all land rides", Description = "Retrieves all land rides.")]
        [SwaggerResponse(StatusCodes.Status200OK, "Returns the list of land rides.", typeof(IEnumerable<LandRides>))]
        [SwaggerResponse(StatusCodes.Status404NotFound, "No land rides found.")]
        public async Task<ActionResult<IEnumerable<LandRides>>> GetLandRides()
        {
            var th = await _context.GetLandRides();
            if (th == null)
            {
                return NotFound("Available Rides");
            }
            return Ok(th);
        }

        // GET: api/Hotels/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<LandRides>> GetLandRide(int id)
        //{
        //    var Room = _context.GetLandRide(id);
        //    if (Room == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(Room);
        //}

        // PUT: api/Hotels/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        //[Authorize]
        public async Task<ActionResult<LandRides>> PutLandRide(int id, LandRides landRides)
        {
            return Ok(await _context.PutLandRide(id, landRides));
        }

        // POST: api/Hotels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        //[Authorize]
        public async Task<ActionResult<List<LandRides>>> PostLandRide(LandRides landRides)
        {
            var item = await _context.PostLandRide(landRides);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // DELETE: api/Hotels/5
        [HttpDelete("{id}")]
        //[Authorize]
        public async Task<IActionResult> DeleteLandRide(int id)
        {
            var room = await _context.DeleteLandRide(id);
            if (room == null)
            {
                return NotFound();

            }
            return Ok(room);

        }
    }
}
