using BL.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
using DTO;
namespace BL
{
    public class RentorBL
    {
        private ApartmentsForRentEntities db = new ApartmentsForRentEntities();

        public IEnumerable<RentorDTO> GetRentors()
        {
            var list = new Dal.RentorDal().GetAll();
            foreach (var item in list)
            {
                yield return Converters.RentorConverter.ConvertToDTO(item);
            }
        }
        public RentorDTO GetRentor(int id)
        {
            return Converters.RentorConverter.ConvertToDTO(new Dal.RentorDal().GetRentor(id));
        }
        
        public RentorDTO PostRentor(RentorDTO rentor)
        {
            RentorDetails rentorDetails = db.RentorDetails.Add(new RentorDetails()
            {
                FirstName = rentor.FirstName,
                LastName = rentor.LastName,
                Password = rentor.Password,
                Mail = rentor.Mail,
                Phone = rentor.Phone,
                AddaitionalPhone = rentor.AddaitionalPhone
            });

            db.SaveChanges();

            return RentorConverter.ConvertToDTO(rentorDetails);
        }
        public void PutRentor(RentorDTO rentor)
        {
            new Dal.RentorDal().Put(Converters.RentorConverter.ConvertFromDTO(rentor));
        }
        public int login(string userName ,string password)
        {
            return new Dal.RentorDal().login(Converters.RentorConverter.ConvertFromDTO(userName, password));
        }
    }
}
