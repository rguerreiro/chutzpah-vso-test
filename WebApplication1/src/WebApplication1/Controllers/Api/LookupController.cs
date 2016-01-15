using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/Lookup")]
    public class LookupController : Controller
    {
        public LookupController()
            :base()
        {
        }

        [HttpGet]
        [Route("Appointments")]
        public IEnumerable GetPublisherAppointments()
        {
            return new [] {
                new { Name = "Test 1", Id = 1 },
                new { Name = "Test 2", Id = 2 }
            };
        }
    }
}
