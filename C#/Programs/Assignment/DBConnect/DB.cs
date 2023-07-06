using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DBConnect
{
    internal class DB
    {
        SqlConnection conn;
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
            catch(SqlException e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }
    
        }
        
     
        public void CreateTable()
        {
           
            SqlCommand cmd = new SqlCommand("create table stud_details(rno int, name nvarchar(20))", conn);
            if (conn != null)
            {
                cmd.ExecuteNonQuery();
                Console.WriteLine("Table Created");
            }
           
        }
        public void InsertTable()
        {
            SqlCommand cmd = new SqlCommand("insert into  stud_details values(100, 'Vishal')", conn);
            if (conn != null) 
            { 
                cmd.ExecuteNonQuery();
                Console.WriteLine("Values Inserted");
            }

        }
        public void UpdateTable()
        {
            SqlCommand cmd = new SqlCommand("update stud_details set name='Spark' where rno=100",conn);
            if (conn != null) 
            { 
                cmd.ExecuteNonQuery();
                Console.WriteLine("Table Updated");
            }
        }


        public void ReadTable()
        {
            SqlCommand cmd = new SqlCommand("select * from stud_details", conn);
            if (conn != null)
            { 
                SqlDataReader sdr = cmd.ExecuteReader();
                Console.WriteLine(sdr.HasRows);
                if(!sdr.HasRows)
                {
                    Console.WriteLine("Data set is Empty");
                }
                else
                {
                    while (sdr.Read())
                    {
                        Console.WriteLine(sdr["rno"] + " " + sdr["name"]);
                    }
                }
            }
        }
        public void DeleteTable()
        {
            SqlCommand cmd = new SqlCommand("delete stud_details", conn);
            if (conn != null)
            {
                cmd.ExecuteNonQuery();
                Console.WriteLine("Rows get deleted");
            }
        }
        public void CloseConnection()
        {
            if (conn != null)
            {
                conn.Close();
                Console.WriteLine("Closed");
            }
            
        }

      
    }
}
