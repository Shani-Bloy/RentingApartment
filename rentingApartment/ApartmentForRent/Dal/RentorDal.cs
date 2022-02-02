using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class RentorDal
    {
        public IEnumerable<RentorDetails> GetAll()
        {
            try
            {
                using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
                {
                    return ctx.RentorDetails.ToList();
                }
            }
            catch (Exception ex)
            {
                throw new Exception(" ", ex);
            }
        }

        public RentorDetails GetRentor(int id)
        {
            using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
            {
                return ctx.RentorDetails.Single(x => x.IdRentor == id);
            }
        }

        public void PostNewRentor(RentorDetails rentor)
        {
            using (var ctx = new ApartmentsForRentEntities())
            {
                ctx.RentorDetails.Add(new RentorDetails()
                {
                    FirstName = rentor.FirstName,
                    LastName = rentor.LastName,
                    Password = rentor.Password,
                    Mail = rentor.Mail,
                    Phone = rentor.Phone,
                    AddaitionalPhone = rentor.AddaitionalPhone
                });

                ctx.SaveChanges();
            }
        }

        public void Put(RentorDetails rentor)
        {
            using (var ctx = new ApartmentsForRentEntities())
            {
                var existingRentor = ctx.RentorDetails.Where(s => s.IdRentor == rentor.IdRentor)
                                                        .FirstOrDefault<RentorDetails>();
                if (existingRentor != null)
                {
                    existingRentor.FirstName = rentor.FirstName;
                    existingRentor.LastName = rentor.LastName;
                    ctx.SaveChanges();
                }
            }
        }

        public int login(RentorDetails r)
        {
            using (ApartmentsForRentEntities ctx = new ApartmentsForRentEntities())
            {
                var y = ctx.RentorDetails.FirstOrDefault(x => x.Mail == r.Mail && x.Password == r.Password);
                return y != null ? y.IdRentor : 0;

            }
        }
    }
}
