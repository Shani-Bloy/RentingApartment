using API.Model;
using BL;
using DTO;
using Microsoft.AspNetCore.Cors;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace API.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/rentor")]
    public class RnetorController : ApiController
    {
        public static RentorBL rentorBL;
        public RnetorController()
        {
            rentorBL = new RentorBL();
        }
        [Route("GetRentors")]
        public IEnumerable<RentorDTO> Get()
        {
            return rentorBL.GetRentors();
        }

        [Route("GetRentor/{id:int}")]
        public RentorDTO Get(int id)
        {
            return rentorBL.GetRentor(id);
        }

        [Route("PostRentor")]
        public Response Post(RentorDTO rentor)
        {           
            Response result = new Response();
            try
            {
                var res = rentorBL.PostRentor(rentor);
                result.IsSuccess = true;
                result.StatusCode = HttpStatusCode.OK;
                result.Data = res;
            }
            catch (Exception ex)
            {
                result.IsSuccess = false;
                result.Message = $"temp Error, try again later. Error: {ex}";
                result.StatusCode = HttpStatusCode.Unauthorized;
            }
            return result;
        }

        [Route("PutRentor")]
        public void Put(RentorDTO rentor)
        {
            rentorBL.PutRentor(rentor);
        }
        [HttpPost]
        [Route("login")]
        public Response Login([FromBody] UserModel user)
        {
            Response result = new Response();
            try
            {
                int x = rentorBL.login(user.UserName, user.Password);
                result.IsSuccess = true;
                result.StatusCode = HttpStatusCode.OK;
                result.Data = Get(x);
            }
            catch (Exception ex)
            {
                result.IsSuccess = false;
                result.Message = $"Temp Error, try again later. Error: {ex}";
                result.StatusCode = HttpStatusCode.Unauthorized;
            }
            return result;
        }

        // POST: api/Rnetor
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Rnetor/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Rnetor/5
        public void Delete(int id)
        {
        }
    }
}
