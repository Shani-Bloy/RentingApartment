//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class RentedApartment
    {
        public int RentedApartmentId { get; set; }
        public Nullable<int> ApartmentId { get; set; }
        public Nullable<int> RentorId { get; set; }
        public Nullable<int> DateId { get; set; }
    
        public virtual ApartmentDetails ApartmentDetails { get; set; }
        public virtual Dates Dates { get; set; }
        public virtual RentorDetails RentorDetails { get; set; }
    }
}
