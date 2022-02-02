using API.Model;
using BL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Web.Http;

namespace API.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/email")]
    public class EmailController : ApiController
    {
        public EmailController()
        {
            rentorBL = new RentorBL();
        }
        public static RentorBL rentorBL;

        [HttpGet]
        public Response SendEmail(string rentorId, string senderName, string senderPhone, string senderEmail, string remarks)
        {
            Response result = new Response();
                     
            try
            {
                var res = rentorBL.GetRentor(int.Parse(rentorId));
                string email = res.Mail;

                String subject = "Renting apartment ";
                String body = "<p>Hi " + res.FirstName + " " + res.LastName + "</p><br/> <p>I want to rent your apartment </p>" +               
                "<h1 >:my details</h1> <br/>"+
                "<p>name: " + senderName +"</p><br/>" +
                "<p>phone: " + senderPhone + "</p><br/>" +
                "<p>email: " + senderEmail + "</p><br/>" +
                "<p>remarks: " + remarks + "</p><br/>" +
                "<form action=\"http://localhost:4200/login\"> " +
                "<input type=\"submit\" style=\"background-color:rgb(244, 189, 50); width: 144px; height: 55px;\" value=\"enter to yor account\" /></form>" +
                "<a href=\"http://localhost:4200/login\"> here you can enter your account </a> "+
                "<h2>thank you</h2>";

                MailMessage mail = new MailMessage();
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                mail.From = new MailAddress("apartments.shortRent@gmail.com");
                mail.To.Add(email);
                mail.Subject = subject; //מה יהיה הנושא
                mail.IsBodyHtml = true;
                mail.Body = body; //מה יהיה הגוף

                SmtpServer.Host = "smtp.gmail.com";
                SmtpServer.Port = 25;
                SmtpServer.Credentials = new System.Net.NetworkCredential("apartments.shortRent@gmail.com", "apartments100");
                SmtpServer.EnableSsl = true;

                SmtpServer.Send(mail);
                result.IsSuccess = true;
                result.StatusCode = HttpStatusCode.OK;
                result.Data = res;
            }
            catch (Exception ex)
            {
                result.IsSuccess = false;
                result.Message = $"Temp error in sending email. Error: {ex}";
                result.StatusCode = HttpStatusCode.Unauthorized;
            }
            return result;
        }

    }
}
