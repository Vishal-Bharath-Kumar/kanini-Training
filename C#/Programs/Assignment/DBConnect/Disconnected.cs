using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBConnect
{
    internal class Disconnected
    {
        SqlConnection conn;
        DataAdapter da;
        DataSet ds;
        public void OpenConnection()
        {
            conn = new SqlConnection("data source = SPARK\\SQLEXPRESS; " +
               "database = student; " +
               "integrated security = SSPI");
            try
            {
                conn.Open();
                Console.WriteLine("Opened");
            }
            catch (SqlException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }

        }

        public void ReadData()
        {
            ReadData(da);
        }

        public void ReadData(DataAdapter da)
        {
            da = new SqlDataAdapter("select * from stud_details", conn);
            ds = new DataSet();
           
        }
        public void InsertRecord()
        {

        }
    }
}
