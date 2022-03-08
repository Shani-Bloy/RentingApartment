using BL.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;
namespace BL
{
    public class RentorBL
    {
        public static  ApartmentsForRentEntities rentEntities = new ApartmentsForRentEntities();
        public static List<RentorDTO> GetRentor()
        {
            List<RentorDTO> r = new List<RentorDTO>();
            List<RentorDetails> rentor = new List<RentorDetails>();
            rentor = rentEntities.RentorDetails.ToList();
            foreach (var item in rentor)
            {
                RentorDTO r1 = RentorConverter.GetRentorDTOFromEntity(item);
                r.Add(r1);
            }
            return r;
            
        }
    }
}
