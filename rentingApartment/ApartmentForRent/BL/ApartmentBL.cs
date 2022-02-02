using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using Dal;
using Common;

namespace BL
{
   public class ApartmentBL
    {
        public string  Image { get; set; }
        public IEnumerable<ApartmentDTO> GetApartments()
        {
            var list = new Dal.ApartmentDAL().GetAllApartments();

            foreach (var item in list)
            {
                yield return Converters.ApartmentConverter.GetApartmentDTOFromEntity(item);
            }

        }
        public IEnumerable<ApartmentDTO> SearchApartments(SearchAppeartment searchAppeartment)
        {
            var list = new Dal.ApartmentDAL().SearchApartment(searchAppeartment);

            foreach (var item in list)
            {
                yield return Converters.ApartmentConverter.GetApartmentDTOFromEntity(item);
            }

        }

        public IEnumerable<ApartmentDTO> RentorApartments(int id)
        {
            var list = new Dal.ApartmentDAL().RentorApartments(id);

            foreach (var item in list)
            {
                yield return Converters.ApartmentConverter.GetApartmentDTOFromEntity(item);
            }

        }
        public ApartmentDTO GetApartment(int id)
        {
            return Converters.ApartmentConverter.GetApartmentDTOFromEntity(new Dal.ApartmentDAL().GetApartment(id));
        }
        public void PostApartment(ApartmentDTO apartment,ApartmentDetailsDTO apartmentDetails)
        {
            new Dal.ApartmentDAL().PostNewApartment(Converters.ApartmentConverter.GetApartmentFromDTO(apartment), Converters.ApartmentDetailsConverter.GetApartmentDetailsFromDTO(apartmentDetails));
        }
        public void Update(ApartmentDTO apartment)
        {
            new Dal.ApartmentDAL().Put(Converters.ApartmentConverter.GetApartmentFromDTO(apartment));
        }

        public void Delete(int id)
        {
            new Dal.ApartmentDAL().Delete(id);
        }
    }
}
