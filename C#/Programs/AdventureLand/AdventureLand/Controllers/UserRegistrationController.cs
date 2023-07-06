using AdventureLand.Models;
using AdventureLand.Repository.User_Registration;
using AdventureLand.Repository.Water_Rides;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AdventureLand.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegistrationController : ControllerBase
    {
        private readonly IUserServices _context;

        public UserRegistrationController(IUserServices context)
        {
            _context = context;
        }

        // GET: api/Hotels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserRegistration>>> GetLogIns()
        {
            var th = await _context.GetLogIns();
            if (th == null)
            {
                return NotFound();
            }
            return Ok(th);
        }

        // GET: api/Hotels/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<UserRegistration>> GetLogIn(int id)
        //{
        //    var Room = _context.GetLogIn(id);
        //    if (Room == null)
        //    {
        //        return NotFound();
        //    }
        //    return Ok(Room);
        //}

        //// PUT: api/Hotels/5
        //// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        //[Authorize]
        //public async Task<ActionResult<UserRegistration>> PutLogIn(int id, UserRegistration userRegistration)
        //{
        //    return Ok(await _context.PutLogIn(id, userRegistration));
        //}

        // POST: api/Hotels
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Authorize]
        public async Task<ActionResult<List<UserRegistration>>> PostLogIn(UserRegistration userRegistration)
        {
            var item = await _context.PostLogIn(userRegistration);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }

        // DELETE: api/Hotels/5
        //[HttpDelete("{id}")]
        //[Authorize]
        //public async Task<IActionResult> DeleteLogIn(int id)
        //{
        //    var room = await _context.DeleteLogIn(id);
        //    if (room == null)
        //    {
        //        return NotFound();

        //    }
        //    return Ok(room);

        //}
    }
}
