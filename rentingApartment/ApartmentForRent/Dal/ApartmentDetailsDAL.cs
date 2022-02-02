using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class ApartmentDetailsDAL
    {
        public IEnumerable<ApartmentDetails> GetAllApartmentsDetails()
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    return ctx.ApartmentDetails.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error in GetAllApartmentsDetails!!!!", ex);
            }
        }

        public ApartmentDetails GetApartmentDetails(int id)
        {
            using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
            {
                return ctx.ApartmentDetails.FirstOrDefault(x => x.IdApartment == id);
            }
        }
        public void PostNewApartmentDetails(ApartmentDetails apartmentDetails)
        {
            try
            {
                using (var ctx = new ApartmentsForRentEntities())
                {
                    int id = ctx.Apartment.OrderByDescending(x => x.ApartmentId).FirstOrDefault().ApartmentId;

                    ctx.ApartmentDetails.Add(new ApartmentDetails()
                    {
                        IdApartment = id,
                        ImageSrc = "https://localhost:44312/images/"+apartmentDetails.ImageSrc
                    });
                    ctx.SaveChanges();
                }
            }
            catch (DbEntityValidationException dbEx)
            {
                foreach (var validationErrors in dbEx.EntityValidationErrors)
                {
                    foreach (var validationError in validationErrors.ValidationErrors)
                    {
                        Trace.TraceInformation("Property: {0} Error: {1}",
                                                validationError.PropertyName,
                                                validationError.ErrorMessage);
                    }
                }
            }


        }
    }
}
