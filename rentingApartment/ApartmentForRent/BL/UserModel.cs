﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
   public class UserModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }

        public UserModel(string userName, string password)
        {
            UserName = userName;
            Password = password;
        }
    }
}
