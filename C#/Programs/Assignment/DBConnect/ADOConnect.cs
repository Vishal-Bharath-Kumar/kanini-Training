using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Configuration;

namespace DBConnect
{

    internal class ADOConnect
    {
        SqlConnection conn;
        public void OpenConnection()
        {
            conn = new SqlConnection("data source = SPARK\\SQLEXPRESS; " + "database = CustBank; " + "integrated security = SSPI");
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


        public void Region()
        {

            SqlCommand cmd = new SqlCommand("create table branch(region_id  int PRIMARY KEY not null, region nvarchar(20))", conn);
            if (conn != null)
            {
                cmd.ExecuteNonQuery();
                Console.WriteLine("Region Table  Created");
            }

        }
        public void Customer_Nodes()
        {

            SqlCommand cmd = new SqlCommand("create table customernodes(region_id int FOREIGN KEY references branch,cust_id int PRIMARY KEY not null, node_name nvarchar(20))", conn);
            if (conn != null)
            {
                cmd.ExecuteNonQuery();
                Console.WriteLine("Customer Nodes Table Created");
            }

        }
        public void Customer_Transaction()
        {

            SqlCommand cmd = new SqlCommand("create table customer_transaction(cust_id int FOREIGN KEY references customernodes, balance int, date_of_transactions date, transaction_amt int, transaction_mode varchar(10))", conn);
            if (conn != null)
            {
                cmd.ExecuteNonQuery();
                Console.WriteLine("Customer Transaction Table Created");
            }

        }

        public void Insert_Region()
        {
            Console.Write("Enter Region ID : ");
            int r_id = int.Parse(Console.ReadLine());
            Console.Write("Enter Branch Name : ");
            string region = Console.ReadLine();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandType = System.Data.CommandType.Text;
            cmd.Connection = conn;
            cmd.CommandText = "insert into branch(region_id,region)values(@regionid, @region)";
            cmd.Parameters.AddWithValue("@regionid", r_id);
            cmd.Parameters.AddWithValue("@region", region);

            int _rows = cmd.ExecuteNonQuery();
            if (_rows > 0)
            {
                Console.WriteLine("Values Inserted");
            }
            else
            {
                Console.WriteLine("Failed to Insert");
            }
        }

        public void insert_Customer_Nodes()
        {
            Console.Write("Enter Region ID : ");
            int r_id = int.Parse(Console.ReadLine());
            Console.Write("Enter Customer ID : ");
            int cust_id = int.Parse(Console.ReadLine());
            Console.Write("Enter Region Name : ");
            string node = Console.ReadLine();
            SqlCommand cmd = new SqlCommand();
            cmd.CommandType = System.Data.CommandType.Text;
            cmd.Connection = conn;
            cmd.CommandText = "insert into customernodes(region_id,cust_id,node_name)values(@regionid, @custid ,@node)";
            cmd.Parameters.AddWithValue("@regionid", r_id);
            cmd.Parameters.AddWithValue("@custid", cust_id);
            cmd.Parameters.AddWithValue("@node", node);

            int _rows = cmd.ExecuteNonQuery();
            if (_rows > 0)
            {
                Console.WriteLine("Values Inserted");
            }
            else
            {
                Console.WriteLine("Failed to Insert");
            }
        }
        public void insert_Customer_transaction()
        {
           
            Console.Write("Enter Customer ID : ");
            int cust_id = int.Parse(Console.ReadLine());
            Console.Write("Enter Balance : ");
            int balance = int.Parse(Console.ReadLine());
            Console.Write("Enter Date of Transaction: ");
            string date_of_transactions =Console.ReadLine();
            Console.Write("Enter Transaction Amount: ");
            int transaction_amount = int.Parse(Console.ReadLine());
            Console.Write("Enter Transaction Mode :");
            string transaction_mode = Console.ReadLine();

            SqlCommand cmd = new SqlCommand();
            cmd.CommandType = System.Data.CommandType.Text;
            cmd.Connection = conn;
            cmd.CommandText = "insert into customer_transaction(cust_id,balance,date_of_transactions,transaction_amt,transaction_mode)values(@custid, @balance ,@date,@transamt,@transmode)";
            cmd.Parameters.AddWithValue("@balance", balance);
            cmd.Parameters.AddWithValue("@custid", cust_id);
            cmd.Parameters.AddWithValue("@date", date_of_transactions);
            cmd.Parameters.AddWithValue("@transamt", transaction_amount);
            cmd.Parameters.AddWithValue("@transmode", transaction_mode);

            int _rows = cmd.ExecuteNonQuery();
            if (_rows > 0)
            {
                Console.WriteLine("Values Inserted");
            }
            else
            {
                Console.WriteLine("Failed to Insert");
            }
        }
    }
}

