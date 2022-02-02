using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;

namespace BL.Converters
{

   
    class DatesConverter
    {
        public static Dates GetDatesFromDTO(DatesDTO d)
        {
            Dates dates = new Dates();
            dates.StartDate = d.StartDate;
            dates.EndDate = d.EndDate;
            dates.ApartmentId = d.ApartmentId;
            dates.Status = d.Status;
            return dates;
        }
        public static DatesDTO GetDatesDTOFromEntity(Dates d)
        {
            DatesDTO dates = new DatesDTO();
            dates.StartDate = d.StartDate;
            dates.EndDate = d.EndDate;
            dates.ApartmentId = d.ApartmentId;
            dates.Status = d.Status;
            return dates;
        }
    }
}
