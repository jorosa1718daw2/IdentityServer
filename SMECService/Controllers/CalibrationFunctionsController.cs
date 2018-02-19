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
using SMECService.ViewModels;
using Microsoft.Extensions.Configuration;




namespace SMECService.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [EnableCors("AllowAllOrigins")]
    public class CalibrationFunctionsController : Controller
    {
        private readonly CEMSContext _context;

         public CalibrationFunctionsController(CEMSContext context)
        {
            _context = context;
        }

        public CEMSContext Context => _context;

        [HttpGet]
        public IEnumerable<CalibrationFunctions> GetAll()
        {
           return _context.CalibrationFunctions.ToList();
        }
        
       /* [HttpPost("Create")]
        public async Task<IActionResult> Create([FromBody]CalibrationFuncionsViewModel model)
        {
       
        }*/


         }
    
    
    }