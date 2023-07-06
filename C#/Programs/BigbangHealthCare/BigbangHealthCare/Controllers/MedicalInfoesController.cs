using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BigbangHealthCare.Data;
using BigbangHealthCare.Models;
using BigbangHealthCare.Repository.Interfaces;
using BigbangHealthCare.Repository.Services;

namespace BigbangHealthCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicalInfoesController : ControllerBase
    {
        private readonly IMedicalInfo _context;

        public MedicalInfoesController(IMedicalInfo context)
        {
            _context = context;
        }

        // GET: api/MedicalInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MedicalInfo>>> GetMedicalInfo()
        {
            var medicalInfo = await _context.GetMedicalInfo();
            return Ok(medicalInfo);
        }

        // GET: api/MedicalInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MedicalInfo>> GetMedicalInfo(int id)
        {
            var medicalInfo = await _context.GetMedicalInfoById(id);
            if (medicalInfo == null)
            {
                return NotFound();
            }

            return Ok(medicalInfo);
        }

        // PUT: api/MedicalInfoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedicalInfo(int id, MedicalInfo medicalInfo)
        {
            var updated = await _context.UpdateMedicalInfo(id, medicalInfo);
            if (!updated)
            {
                return BadRequest();
            }

            return NoContent();
        }

        // POST: api/MedicalInfoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MedicalInfo>> PostMedicalInfo(MedicalInfo medicalInfo)
        {
            var createdMedicalInfo = await _context.CreateMedicalInfo(medicalInfo);
            return CreatedAtAction("GetMedicalInfo", new { id = createdMedicalInfo.Id }, createdMedicalInfo);
        }

        // DELETE: api/MedicalInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMedicalInfo(int id)
        {
            var deleted = await _context.DeleteMedicalInfo(id);
            if (!deleted)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}
