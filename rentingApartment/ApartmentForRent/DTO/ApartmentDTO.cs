using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
   public class ApartmentDTO
    {
        public int ApartmentId { get; set; }
        public Nullable<int> RentorId { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public Nullable<int> Floor { get; set; }
        public Nullable<bool> Elevator { get; set; }
        public Nullable<int> NumberOfRooms { get; set; }
        public Nullable<int> NumberOfBeds { get; set; }
        public Nullable<int> NumberOfAirConditioners { get; set; }
        public Nullable<bool> IsRentingImmediately { get; set; }
        public string ImmediatePrice { get; set; }
        public string Price { get; set; }
        public string Img { get; set; }
        public string DiscountPercentages { get; set; }
        public string NumberOfDiscountDays { get; set; }
    }
}
