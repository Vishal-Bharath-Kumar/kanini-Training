using AdventureLand.Models;
using AdventureLand.Repository.Land_Rides;
using AdventureLand.Repository.Water_Rides;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;

namespace AdventureLand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WaterRidesController : ControllerBase
    {
        private readonly IWaterServices _context;

        public WaterRidesController(IWaterServices context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        [SwaggerOperation(Summary = "Get all land rides", Description = "Retrieves all land rides.")]
        [SwaggerResponse(StatusCodes.Status200OK, "Returns the list of land rides.", typeof(IEnumerable<WaterRides>))]
        [SwaggerResponse(StatusCodes.Status404NotFound, "No land rides found.")]
        public async Task<ActionResult<IEnumerable<WaterRides>>> GetWaterRides()
        {
            var th = await _context.GetWaterRides();
   
            if (th == null)
            {
                return NotFound(new { Message = "No land rides found." });
            }
            return Ok(th);
        }
        [HttpPut("{id}")]
        //[Authorize]
        public async Task<ActionResult<WaterRides>> PutLandRide(int id, WaterRides waterRides)
        {
            return Ok(await _context.PutWaterRide(id, waterRides));
        }

        // POST: api/Hotels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        //[Authorize]
        public async Task<ActionResult<List<WaterRides>>> PostWaterRide(WaterRides waterRides)
        {
            var item = await _context.PostWaterRide(waterRides);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // DELETE: api/Hotels/5
        [HttpDelete("{id}")]
        //[Authorize]
        public async Task<IActionResult> DeleteWaterRide(int id)
        {
            var room = await _context.DeleteWaterRide(id);
            if (room == null)
            {
                return NotFound();

            }
            return Ok(room);

        }
    }
}
