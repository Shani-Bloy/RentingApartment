using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class DatesDTO
    {
        public int DatesId { get; set; }
        public Nullable<int> ApartmentId { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public Nullable<bool> Status { get; set; }
    
    }
}
