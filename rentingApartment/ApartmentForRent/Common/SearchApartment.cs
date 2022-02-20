using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Common
{
    public class SearchAppeartment
    {
        
        public string City     { get; set; }        
        public  DateTime? StartDate { get; set; }
        public  int? NumChildren     { get; set; }
        public DateTime? EndDate { get; set; }
        public bool? Parking { get; set; }
        public string PriceFrom { get; set; }
        public string PriceTo { get; set; }
        public bool? DisableAccess { get; set; }
        public bool? Pool { get; set; }
        public bool? Porch { get; set; }
        public bool? Crib { get; set; }
        public bool? Elevator { get; set; }
        public bool? ImmediatelyRenting { get; set; }


    }
}