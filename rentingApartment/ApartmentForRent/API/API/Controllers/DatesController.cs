using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BL;
using DTO;

namespace API.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/date")]
    public class DatesController : ApiController
    {
        [Route("addDate")]
        public void Post(DatesDTO dates)
        {
            new BL.DatesBL().PostDates(dates);
        }
    }
}
