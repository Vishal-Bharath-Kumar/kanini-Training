using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;
using Booknow_Tickets;

internal class Program
{
    public string username1;
    public string password1;


    private static void Main(string[] args)
    {
        Program p= new Program();

        Console.WriteLine("--------------Book Now Tickets-------------");
        Console.Write("Enter 1 for new account or 2 for login : ");
        int opt = Convert.ToInt32(Console.ReadLine());
        Console.Write("Enter the Username: ");
        string username = Console.ReadLine();
        Console.Write("Enter the Password: ");
        string password = Console.ReadLine();
        UserLogin login = new UserLogin(username, password);
        Movie_Details movie = new Movie_Details();
        login.UserInfo();
        if (opt == 1)
        {
            login.openconn();
            login.InsertVal();
            Console.WriteLine("---------------Login---------------");
            Console.Write("Enter the Username: ");
            p.username1 = Console.ReadLine();
            Console.Write("Enter the Password: ");
            p.password1 = Console.ReadLine();
            UserLogin login1 = new UserLogin(p.username1, p.password1);
            login1.UserInfo();
            login1.check_user();
        }
        else if (opt == 2)
        {
            login.openconn();
            login.check_user();
            movie.M_Details();
           

        }
        else
        {
            Console.WriteLine("Enter a valid number");
        }
    }
}
