using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Common
{
    public class SearchAppeartment
    {
        
        public string City     { get; set; }
        public  int? NumChildren     { get; set; }
        public  DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        //public bool? Parking { get; set; }
        public string PriceFrom { get; set; }
        public string PriceTo { get; set; }
    }
}