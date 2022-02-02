using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;

namespace BL.Converters
{
    public class ApartmentDetailsConverter
    {
        public static ApartmentDetails GetApartmentDetailsFromDTO(ApartmentDetailsDTO a)
        {
            ApartmentDetails apartment = new ApartmentDetails();
            apartment.IdApartment = a.IdApartment;
            apartment.ImageSrc = a.ImageSrc;
            apartment.Parking = a.Parking;
            apartment.Pool = a.Pool;
            apartment.Porch = a.Porch;
            apartment.AdditionalDescription = a.AdditionalDescription;
            apartment.Crib = a.Crib;
            apartment.ApartmentDetailsID = a.ApartmentDetailsID;
            apartment.DisableAccess = a.DisableAccess;
            return apartment;
        }
        public static ApartmentDetailsDTO GetApartmentDetailsDTOFromEntity(ApartmentDetails a)
        {
            ApartmentDetailsDTO apartment = new ApartmentDetailsDTO();
            if (a != null)
            {
                apartment.IdApartment = a.IdApartment;
                apartment.ImageSrc = a.ImageSrc;
                apartment.Parking = a.Parking;
                apartment.Pool = a.Pool;
                apartment.Porch = a.Porch;
                apartment.AdditionalDescription = a.AdditionalDescription;
                apartment.Crib = a.Crib;
                apartment.ApartmentDetailsID = a.ApartmentDetailsID;
                apartment.DisableAccess = a.DisableAccess;
            }
            return apartment;

        }

    }
}
