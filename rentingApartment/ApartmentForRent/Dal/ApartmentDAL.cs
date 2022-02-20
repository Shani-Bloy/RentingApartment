﻿using Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public class ApartmentDAL
    {
        public IEnumerable<Apartment> GetAllApartments()
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    return ctx.Apartment.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error!!!!", ex);
            }
        }
        public IEnumerable<Apartment> SearchApartment(SearchAppeartment searchAppeartment)
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    var q = ctx.Apartment.Include("Dates").Include("ApartmentDetails").Where(x => 
                    (searchAppeartment.City == "" || x.City == searchAppeartment.City) &&(x.ApartmentId==x.ApartmentId) &&                                                                      
                    (searchAppeartment.NumChildren == null ||x.NumberOfBeds == searchAppeartment.NumChildren) &&
                    ( (x.Dates.FirstOrDefault().StartDate ==null && x.Dates.FirstOrDefault().EndDate==null)||
                    (searchAppeartment.StartDate != null && searchAppeartment.EndDate != null
                    &&(searchAppeartment.StartDate >= x.Dates.FirstOrDefault().EndDate || (searchAppeartment.StartDate<=x.Dates.FirstOrDefault().StartDate && searchAppeartment.EndDate<=x.Dates.FirstOrDefault().EndDate))))||                   
                    (searchAppeartment.Parking==true && x.ApartmentDetails.FirstOrDefault().Parking==searchAppeartment.Parking)
                    )
                     .ToList();
                    //var a = q.Select(t => t.Dates.FirstOrDefault().Apartment).ToList();
                    return q;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error!!!!", ex);
            }
        }

        public void Put(Apartment apartment)
        {
            using (var ctx = new ApartmentsForRentEntities())
            {
                var existingApartment = ctx.Apartment.Where(s => s.ApartmentId == apartment.ApartmentId)
                                                        .FirstOrDefault<Apartment>();
                if (existingApartment != null)
                {
                    existingApartment.RentorId = apartment.RentorId;
                    existingApartment.City = apartment.City;
                    existingApartment.Street = apartment.Street;
                    existingApartment.Floor = apartment.Floor;
                    existingApartment.NumberOfRooms = apartment.NumberOfRooms;
                    existingApartment.NumberOfBeds = apartment.NumberOfBeds;
                    existingApartment.NumberOfAirConditioners = apartment.NumberOfAirConditioners;
                    ctx.SaveChanges();
                }
            }
        }

        public void Delete(int id)
        {
            using (var ctx = new ApartmentsForRentEntities())
            {
                var a = ctx.Dates.SingleOrDefault(t => t.ApartmentId == id); //returns a single item.
                if (a != null)
                {
                    ctx.Dates.Remove(a);                    
                }
               
                var b = ctx.ApartmentDetails.SingleOrDefault(t => t.IdApartment == id);
                if (b != null)
                {
                    ctx.ApartmentDetails.Remove(b);
                }
                
                var c = ctx.Apartment.SingleOrDefault(t => t.ApartmentId == id);
                if (c != null)
                {
                    ctx.Apartment.Remove(c);
                } 
                ctx.SaveChanges();
            }                                           
        }

        public IEnumerable<Apartment> RentorApartments(int id)
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    var q = ctx.Apartment.AsEnumerable().Where(x => x.RentorId == id ).ToList();
                    return q;
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" error!!!!", ex);
            }
        }

        public Apartment GetApartment(int id)
        {
            using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
            {
                return ctx.Apartment.Single(x => x.ApartmentId == id);
            }
        }
        public void PostNewApartment(Apartment apartment,ApartmentDetails apartmentDetails)
        {
            using (var ctx = new ApartmentsForRentEntities())
            {
                ctx.Apartment.Add(new Apartment()
                {
                    RentorId = apartment.RentorId,
                    City = apartment.City,
                    Street = apartment.Street,
                    Floor = apartment.Floor,
                    NumberOfRooms = apartment.NumberOfRooms,
                    NumberOfBeds = apartment.NumberOfBeds,
                    NumberOfAirConditioners = apartment.NumberOfAirConditioners,
                    Img = "https://localhost:44312/images/" + apartmentDetails.ImageSrc
                }); ctx.SaveChanges();

                ApartmentDetailsDAL dal = new ApartmentDetailsDAL();
                dal.PostNewApartmentDetails(apartmentDetails);
            }
            
        }
     

    }    
}



