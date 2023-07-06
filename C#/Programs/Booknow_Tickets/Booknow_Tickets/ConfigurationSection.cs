using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Booknow_Tickets
{
    internal class ConfigurationSection
    {
        public string con = ConfigurationManager.ConnectionStrings["connection"].ConnectionString;
        public SqlConnection connect;
        public void openconn()
        {
            connect = new SqlConnection(con);
            try
            {
                connect.Open();
                Console.WriteLine("------------------------------------------");
            }
            catch (SqlException ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}

