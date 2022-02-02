using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ApartmentDetailsDTO
    {
        public int ApartmentDetailsID { get; set; }
        public Nullable<int> IdApartment { get; set; }
        public Nullable<bool> Pool { get; set; }
        public Nullable<bool> DisableAccess { get; set; }
        public Nullable<int> Porch { get; set; }
        public string ImageSrc { get; set; }
        public Nullable<bool> Parking { get; set; }
        public string AdditionalDescription { get; set; }
        public Nullable<int> Crib { get; set; }
    }
}
