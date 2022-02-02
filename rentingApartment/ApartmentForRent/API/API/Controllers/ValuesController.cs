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
    [RoutePrefix("api/values")]
    public class ValuesController : ApiController
    {
        [Route("GetRentors")]
        public IEnumerable<RentorDTO> Get()
        {
            return new RentorBL().GetRentors();
        }
        [Route("GetApartments")]
        public IEnumerable<ApartmentDTO> GetApartments()
        {
            return new ApartmentBL().GetApartments();
        }
        [Route("GetRentor/{id:int}")]
        public RentorDTO Get(int id)
        {
            return new RentorBL().GetRentor(id);
        }

        [Route("GetApartment/{id:int}")]
        public ApartmentDTO GetApartment(int id)
        {
            return new ApartmentBL().GetApartment(id);
        }

        [Route("GetApartmentDetails/{id:int}")]
        public ApartmentDetailsDTO GetApartmentDetails(int id)
        {
            return new ApartmentDetailsBL().GetApartmentDetails(id);
        }

        [Route("PostRentor")]
        public void Post(RentorDTO rentor)
        {
            new BL.RentorBL().PostRentor(rentor);
        }

        [Route("PutRentor")]
        public void Put(RentorDTO rentor)
        {
            new BL.RentorBL().PutRentor(rentor);
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
