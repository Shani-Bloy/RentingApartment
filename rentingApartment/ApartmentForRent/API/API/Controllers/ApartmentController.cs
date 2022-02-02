using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using Newtonsoft.Json.Linq;
using API.Model;
using Common;

namespace API.Controllers

{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/apartment")]
    public class ApartmentController : ApiController
    {
        public ApartmentDTO apartment { get; set; } = new ApartmentDTO();
        public ApartmentDetailsDTO apartmentDetails { get; set; } = new ApartmentDetailsDTO();

        [Route("addImage")]
        public void addImage()
        {
           HttpPostedFile imageData = HttpContext.Current.Request.Files[0];
      
            imageData.SaveAs(HostingEnvironment.MapPath("/images/"+imageData.FileName));
        }

        [Route("GetApartments")]
        public IEnumerable<ApartmentDTO> GetApartments()
        {
            return new ApartmentBL().GetApartments();
        }

        [HttpPost]
        [ActionName("SearchApartments")]
        //[Route("Search/{city}/{numChildren}/{startDate:DateTime}/{endDate:DateTime}")]
        public IEnumerable<ApartmentDTO> SearchApartments(SearchAppeartment searchAppeartment)
        {
            
            return new ApartmentBL().SearchApartments(searchAppeartment);
        }

        [HttpGet()]
        [Route("GetRentorApartment/{id}")]
        public IEnumerable<ApartmentDTO> GetRentorApartments(int id)
        {
            return new ApartmentBL().RentorApartments(id);
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
        [HttpPut]
        [Route("updateApartment")]
        public Response updateApartment(ApartmentDTO apartment)
        {
            Response result = new Response();
            try
            {
                new ApartmentBL().Update(apartment);
                result.IsSuccess = true;
                result.StatusCode = HttpStatusCode.OK;              
            }
            catch (Exception ex)
            {
                result.IsSuccess = false;
                result.Message = $"Temp Error, try again later. Error: {ex}";
                result.StatusCode = HttpStatusCode.Unauthorized;
            }
            return result;           
        }

        [Route("deleteApartment/{id:int}")]
        public Response deleteApartment(int id)
        {
            Response result = new Response();
            try
            {
                new ApartmentBL().Delete(id);
                result.IsSuccess = true;
                result.StatusCode = HttpStatusCode.OK;
            }
            catch (Exception ex)
            {
                result.IsSuccess = false;
                result.Message = $"Temp Error, try again later. Error: {ex}";
                result.StatusCode = HttpStatusCode.Unauthorized;
            }
            return result;
        }

        // GET: api/Apartment/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Apartment
        public void Post([FromBody]string value)
        {
        }

        [Route("PostApartment")]
        public void Post([FromBody] JObject data)
        {
            ApartmentDTO  apartment = data["apartment"].ToObject<ApartmentDTO>();
            ApartmentDetailsDTO  apartmentDetails = data["apartmentDetails"].ToObject<ApartmentDetailsDTO>();          
            new BL.ApartmentBL().PostApartment(apartment, apartmentDetails);
        }


        // PUT: api/Apartment/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Apartment/5
        public void Delete(int id)
        {
        }
    }
}
