using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using Dal;

namespace BL
{
   public class ApartmentDetailsBL
    {
        public IEnumerable<ApartmentDetailsDTO> GetApartmentsDetails()
        {
            var list = new Dal.ApartmentDetailsDAL().GetAllApartmentsDetails();

            foreach (var item in list)
            {
                yield return Converters.ApartmentDetailsConverter.GetApartmentDetailsDTOFromEntity(item);
            }

        }
        public ApartmentDetailsDTO GetApartmentDetails(int id)
        {
            return Converters.ApartmentDetailsConverter.GetApartmentDetailsDTOFromEntity(new Dal.ApartmentDetailsDAL().GetApartmentDetails(id));
        }       

        
    }
}
