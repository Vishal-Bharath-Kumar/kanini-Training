// See https://aka.ms/new-console-template for more information
using System.Data;
using System.Data.SqlClient;
using DBConnect;
using System.Configuration;

class Program
{
    public static void Main(string[] args)
    {
        //DB db = new DB();
        //db.OpenConnection();
        ////db.CreateTable();
        ////db.InsertTable();
        ////db.UpdateTable();
        //db.ReadTable();
        ////db.DeleteTable();
        //db.CloseConnection();

        //Disconnected disconnected = new Disconnected();
        //disconnected.OpenConnection();

        DataTable dt = new DataTable("Student");
        //add rows
        dt.Columns.Add("S.no", typeof(int));
        dt.Columns.Add("Name", typeof(string));
        dt.Columns.Add("Age", typeof(int));

        //add columns
        DataRow dr1 = dt.NewRow();
        dr1["S.no"] = 1001;
        dr1["Name"] = "Vishal";
        dr1["Age"] = 21;
        dt.Rows.Add(dr1);

        DataRow dr2 = dt.NewRow();
        dr2[0] = 1002;
        dr2[1] = "Bharath";
        dr2[2] = 21;
        dt.Rows.Add(dr2);

        //ADOConnect ado = new ADOConnect();
        //ado.OpenConnection();
        //ado.Region();
        //ado.Customer_Nodes();
        //ado.Customer_Transaction();
        //ado.Insert_Region();
        //ado.insert_Customer_Nodes();
        // ado.insert_Customer_transaction();



    }
}
