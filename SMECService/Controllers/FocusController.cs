using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SMECService.Models;
using SMECService.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SMECService.Controllers
{
    [Route("api/[controller]")]
   // [EnableCors("AllowAllOrigins")]
    public class FocusController : Controller
    {
        private readonly CEMSContext _context;

        public FocusController(CEMSContext context)
        {
            _context = context;
        }
        //GET : api/Focus
        [HttpGet]
        public IEnumerable<Focus> GetAll()
        {
            return _context.Focus
                .Include(f => f.Analyzers)
                    .ThenInclude( a => a.Sensors )
                        .ThenInclude( s => s.MeasuringComponent)
                .Include(f => f.Analyzers)
                    .ThenInclude(a => a.Sensors)
                         .ThenInclude(s => s.Unit)
                .ToList();
        }
    //GET : api/Focus/5
        [HttpGet("{id}", Name = "GetFocus")]
        public IActionResult GetById(long id)
        {
            var item = _context.Focus
                .Include(f => f.Analyzers)
                    .ThenInclude(a => a.Sensors)
                        .ThenInclude(s => s.MeasuringComponent)
                .Include(f => f.Analyzers)
                    .ThenInclude(a => a.Sensors)
                         .ThenInclude(s => s.Unit)
                .FirstOrDefault(t => t.FocusId == id);
            if( item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpGet("{id}/CurrentStatus", Name = "GetFocusCurrentstatus")]
        public IActionResult GetCurrentStatus(long id)
        {
            var item = _context.Focus
                .FirstOrDefault(t => t.FocusId == id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(new { StatusCode = 1 });
        }
        // POST : api/Focus/Create
        [HttpPost("Create")]
        public IActionResult Create([FromBody] Focus item)
        {
            if (item == null)
            {
                return BadRequest();
            }

            _context.Focus.Add(item);
            _context.SaveChanges();

            return CreatedAtRoute("GetFocus", new { id = item.FocusId }, item);
        }   


        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var item = _context.Focus.FirstOrDefault(t => t.FocusId == id);
            if (item == null)
            {
                return NotFound();
            }
            _context.Focus.Remove(item);
            _context.SaveChanges();
            return new NoContentResult();

        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Focus item)
        {
            if(item == null)
            {
                return BadRequest();
            }
            var _item = _context.Focus.FirstOrDefault(t => t.FocusId == id);
            if(_item == null)
            {
                return NotFound();
            }
            _item.Name = item.Name;

            _context.Focus.Update(_item);
            _context.SaveChanges();
            return new NoContentResult();
        }

       

        }
     
    }

