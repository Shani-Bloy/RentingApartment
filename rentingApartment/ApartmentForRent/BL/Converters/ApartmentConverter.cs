using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;

namespace BL.Converters
{
    class ApartmentConverter
    {
        public static Apartment GetApartmentFromDTO(ApartmentDTO a)
        {
            Apartment apartment = new Apartment();
            apartment.ApartmentId = a.ApartmentId;
            apartment.City = a.City;
            apartment.DiscountPercentages = a.DiscountPercentages;
            apartment.Elevator = a.Elevator;
            apartment.Floor = a.Floor;
            apartment.ImmediatePrice = a.ImmediatePrice;
            apartment.IsRentingImmediately = a.IsRentingImmediately;
            apartment.NumberOfAirConditioners = a.NumberOfAirConditioners;
            apartment.NumberOfBeds = a.NumberOfBeds;
            apartment.NumberOfDiscountDays = a.NumberOfDiscountDays;
            apartment.NumberOfRooms = a.NumberOfRooms;
            apartment.Price = a.Price;
            apartment.RentorId = a.RentorId;
            apartment.Street = a.Street;
            return apartment;
        }
        public static ApartmentDTO GetApartmentDTOFromEntity(Apartment a)
        {
            ApartmentDTO apartment = new ApartmentDTO();
            apartment.ApartmentId = a.ApartmentId;
            apartment.City = a.City;
            apartment.DiscountPercentages = a.DiscountPercentages;
            apartment.Elevator = a.Elevator;
            apartment.Floor = a.Floor;
            apartment.ImmediatePrice = a.ImmediatePrice;
            apartment.IsRentingImmediately = a.IsRentingImmediately;
            apartment.NumberOfAirConditioners = a.NumberOfAirConditioners;
            apartment.NumberOfBeds = a.NumberOfBeds;
            apartment.NumberOfDiscountDays = a.NumberOfDiscountDays;
            apartment.NumberOfRooms = a.NumberOfRooms;
            apartment.Price = a.Price;
            apartment.RentorId = a.RentorId;
            apartment.Street = a.Street;
            apartment.Img = a.Img;
            
            return apartment;
        }
    }
}
