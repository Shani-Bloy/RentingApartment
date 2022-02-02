using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class DatesDal
    {
        public void PostDates(Dates dates)
        {
            using (var ctx = new ApartmentsForRentEntities())
            {
                ctx.Dates.Add(new Dates()
                {
                    ApartmentId=dates.ApartmentId,
                    StartDate = dates.StartDate,
                    EndDate = dates.EndDate,
                    Status=true
                });

                ctx.SaveChanges();
            }
        }
    }
}
