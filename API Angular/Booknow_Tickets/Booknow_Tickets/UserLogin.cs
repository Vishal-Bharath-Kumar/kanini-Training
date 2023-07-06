using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Configuration;

namespace Booknow_Tickets
{

    internal class UserLogin:ConfigurationSection
    {
        private string username;
        private string password;

        public string Username { get => username; set => username = value; }
        public string Password { get => password; set => password = value; }

        public UserLogin(string username, string password)
        {
            this.Username = username;
            this.Password = password;
        }
       
        public void UserInfo()
        {

            //Console.WriteLine("UserName: " + this.Username);
            //Console.WriteLine("Password: " + this.Password);
        }
        public void InsertVal()
        {
            string qry = string.Format("insert into LogIn values('{0}','{1}')", this.Username, this.Password);
            SqlCommand cmd = new SqlCommand(qry, connect);
            if (connect != null)
            {
                int n = cmd.ExecuteNonQuery();
                Console.WriteLine("inserted {0} ", n);
            }

        }
        public void check_user()
        {
            SqlCommand cmd = new SqlCommand("select Username,password from LogIn", connect);
            if (connect != null)
            {
                SqlDataReader s = cmd.ExecuteReader();
                while (s.Read())
                {
                    if (s[0].ToString() == Username && s[1].ToString() == Password)
                    {
                        Console.WriteLine("Welcome to Booknow Tickets {0} ,Hold your Happy Time with us!!", s[0]);

                    }
                }
            }
            else
            {
                Console.WriteLine("Table is empty");
            }

        }

    }

}
