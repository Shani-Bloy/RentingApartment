using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;
using Dal;

namespace BL
{
    public class DatesBL
    {
        public void PostDates(DatesDTO dates)
        {
            new Dal.DatesDal().PostDates(Converters.DatesConverter.GetDatesFromDTO(dates));
        }

        
    }
}
