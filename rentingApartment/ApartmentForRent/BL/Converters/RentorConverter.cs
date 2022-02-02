using Dal;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Converters
{
    public class RentorConverter
    {
        public static RentorDetails ConvertFromDTO(RentorDTO r)
        {
            RentorDetails rentor = new RentorDetails();
            rentor.IdRentor = r.IdRentor;
            rentor.FirstName = r.FirstName;
            rentor.LastName = r.LastName;
            rentor.Mail = r.Mail;
            rentor.Password = r.Password;
            rentor.Phone = r.Phone;
            rentor.AddaitionalPhone = r.AddaitionalPhone;
            return rentor;
        }
        public static RentorDTO ConvertToDTO(RentorDetails entity)
        {
            RentorDTO rentor = new RentorDTO();
            rentor.IdRentor = entity.IdRentor;
            rentor.FirstName = entity.FirstName;
            rentor.LastName = entity.LastName;
            rentor.Mail = entity.Mail;
            rentor.Password = entity.Password;
            rentor.Phone = entity.Phone;
            rentor.AddaitionalPhone = entity.AddaitionalPhone;
            return rentor;
        }
        public static RentorDetails ConvertFromDTO(string userName,string password)
        {
            RentorDetails rentor = new RentorDetails();            
            rentor.Mail = userName;
            rentor.Password = password;            
            return rentor;
        }
    }
}
