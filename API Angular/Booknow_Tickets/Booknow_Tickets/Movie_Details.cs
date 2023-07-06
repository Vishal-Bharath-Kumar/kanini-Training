using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Booknow_Tickets;
namespace Booknow_Tickets
{
    internal class Movie_Details:ConfigurationSection
    {
        SqlDataReader s=null;

       
        public void M_Details()
        {
           
            Console.WriteLine("--------------Choose Language--------------");
            Console.WriteLine("1 for movies in tamil");
            Console.WriteLine("2 for movies in english");
            Console.WriteLine("3 for movies in telugu");
            Console.Write("Enter the option in which language you prefer : ");
            int opt = Convert.ToInt32(Console.ReadLine());
            switch (opt)
            {
                case 1:
                    TamilLang();
                    break;
                case 2:
                    EnglishLang();
                    break;
                case 3:
                    TeluguLang();
                    break;

            
            }
           
        }
       public void TamilLang()
       {
             connect = new SqlConnection(con);
             connect.Open();
            SqlCommand cmd = new SqlCommand("select movie_name from Movies where movie_lang ='Tamil'", connect);
            if (connect != null)
            {
                //Console.WriteLine("Inside if");
                SqlDataReader s = cmd.ExecuteReader();
                Console.WriteLine("------------------------------------------");
                while (s.Read())
                {
                    Console.WriteLine(s[0].ToString());
                }
                Console.WriteLine("------------------------------------------");
            }
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter the movie name : ");
            string m_name = Console.ReadLine();
       
            SqlCommand cmd1 = new SqlCommand($" SELECT Theatre.theatre_name,Theatre.theatre_area, Movies.movie_name  FROM Theatre INNER JOIN Movies ON Theatre.movie_id = Movies.movie_id where movie_name='{m_name}'",connect);
            
                SqlDataReader s12 = cmd1.ExecuteReader();
            Console.WriteLine("------------------------------------------");
            while (s12.Read())
            {
                    Console.WriteLine("Theatre Name : " + s12[0].ToString() + "     Area : " + s12[1].ToString());

            }
            Console.WriteLine("------------------------------------------");
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter theatre name :");
            string tname=Console.ReadLine();
            SqlCommand cmd11 = new SqlCommand($" SELECT * FROM show_time INNER JOIN theatre ON Theatre.show_id = show_time.show_id where theatre_name='{tname}'", connect);

            SqlDataReader s11 = cmd11.ExecuteReader();
            Console.WriteLine("------------------------------------------");
            while (s11.Read())
            {
                Console.WriteLine("Screen : " + s11[0].ToString() + "   Show time : " + s11[1].ToString() + "pm");

            }
            Console.WriteLine("------------------------------------------");
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter the screen : ");
            int screen = Convert.ToInt32(Console.ReadLine());
            Console.Write($"Enter the date you want to book (yyyy mm dd) : ");
            string dt = Console.ReadLine();
            Console.WriteLine("------------------------------------------");
            Console.WriteLine("Seat Type : VIP       Ticket Price : 200");
            Console.WriteLine("Seat Type : Premium   Ticket Price : 150");
            Console.WriteLine("Seat Type : ELite     Ticket Price : 100");
            Console.WriteLine("------------------------------------------");
            Console.Write("Enter Seat Type : ");
            string Stype = Console.ReadLine();

            SqlCommand cmd32 = new SqlCommand($" SELECT seat_id from seat where show_id='{screen}' and seat_type ='{Stype}'and seat_status ='available'", connect);

            SqlDataReader s32 = cmd32.ExecuteReader();
            Console.WriteLine("------------------------------------------");
            while (s32.Read())
            {
                Console.WriteLine("Available Seats :  " + s32[0].ToString());

            }
            connect.Close();
            Console.WriteLine("------------------------------------------");

            Console.Write("Enter the Total No of Seats you want : ");
            int total_seats = Convert.ToInt32(Console.ReadLine());
           
            for (int i = 0;i < total_seats; i++)
            {
                Console.Write($"Enter Seat Number {i+1} : ");
                int sno=Convert.ToInt32(Console.ReadLine());
                connect = new SqlConnection(con);
                connect.Open();
                SqlCommand cmd5 = new SqlCommand($"Insert into booking_details values('{tname}','{m_name}',{sno},{screen},'{dt}')", connect);
                SqlCommand cmd6 = new SqlCommand($"update Seat set seat_status = 'unavailable' where seat_id = {sno}",connect);
                cmd6.ExecuteNonQuery();
                cmd5.ExecuteNonQuery();


            }
            //Payment Method
            int amt = 0;
            if (Stype.ToLower() == "vip")
            {
                amt = 200;
            }
            else if(Stype.ToLower() == "premium")
            {
                amt = 150;
            }
            else
            {
                amt = 100;
            }
            int price = total_seats * amt;
            Console.WriteLine("The Total Amount to be paid is : " + price +" rupees.");



            

            Console.Write("Enter Amount to pay : ");
            int c_amt = Convert.ToInt32(Console.ReadLine());

            if (c_amt == price)
            {
                Console.WriteLine("------------------------------------------");

                Console.WriteLine("Ticket booked successfully !!!!");
            }
            else
            {
                connect.Close();

                connect = new SqlConnection(con);
                connect.Open();

                for (int i = 0; i < total_seats; i++)
                {
                    Console.WriteLine("------------------------------------------");

                    Console.WriteLine("Enter Valid amount");
                    
                    SqlCommand cmd9 = new SqlCommand($"update Booking_Details set amount_status = 'invalid'",connect);
                    cmd9.ExecuteNonQuery();
                   

                }
            }

            


            Console.WriteLine("------------------------------------------");

           

            connect.Close();



        }
    public void EnglishLang()
    {
            connect = new SqlConnection(con);
            connect.Open();
            SqlCommand cmd = new SqlCommand("select movie_name from Movies where movie_lang='English'", connect);
             if (connect != null)
                {
                SqlDataReader s = cmd.ExecuteReader();
                Console.WriteLine("------------------------------------------");
                while (s.Read())
                {
                Console.WriteLine(s[0].ToString());
                }
                Console.WriteLine("------------------------------------------");
            }
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter the movie name : ");
            string m_name = Console.ReadLine();
            SqlCommand cmd1 = new SqlCommand($" SELECT Theatre.theatre_name,Theatre.theatre_area, Movies.movie_name  FROM Theatre INNER JOIN Movies ON Theatre.movie_id = Movies.movie_id where movie_name='{m_name}'", connect);
            if (connect != null)
            {
                SqlDataReader s1 = cmd1.ExecuteReader();
                Console.WriteLine("------------------------------------------");
                while (s1.Read())
                {
                    Console.WriteLine("Theatre Name : " + s1[0].ToString() + "    Area : " + s1[1].ToString());

                }
                Console.WriteLine("------------------------------------------");
            }
            connect.Close();

           

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter theatre name :");
            string t_name = Console.ReadLine();
            SqlCommand cmd12 = new SqlCommand($" SELECT * FROM show_time INNER JOIN theatre ON Theatre.show_id = show_time.show_id where theatre_name='{t_name}'", connect);

            SqlDataReader s12 = cmd12.ExecuteReader();
            Console.WriteLine("------------------------------------------");
            while (s12.Read())
            {
                Console.WriteLine("Screen : " + s12[0].ToString() + "   Show time : " + s12[1].ToString() + "pm");

            }
            Console.WriteLine("------------------------------------------");
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter the screen : ");
            int screen = Convert.ToInt32(Console.ReadLine());
            Console.Write($"Enter the date you want to book (yyyy mm dd) : ");
            string dt = Console.ReadLine();
            Console.WriteLine("------------------------------------------");
            Console.WriteLine("Seat Type : VIP       Ticket Price : 200");
            Console.WriteLine("Seat Type : Premium   Ticket Price : 150");
            Console.WriteLine("Seat Type : ELite     Ticket Price : 100");
            Console.WriteLine("------------------------------------------");
            Console.Write("Enter Seat Type : ");
            string Stype = Console.ReadLine();

            SqlCommand cmd32 = new SqlCommand($" SELECT seat_id from seat where show_id='{screen}' and seat_type ='{Stype}'and seat_status ='available'", connect);

            SqlDataReader s32 = cmd32.ExecuteReader();
            Console.WriteLine("------------------------------------------");
            while (s32.Read())
            {
                Console.WriteLine("Available Seats :  " + s32[0].ToString());

            }
            connect.Close();
            Console.WriteLine("------------------------------------------");

            Console.Write("Enter the Total No of Seats you want : ");
            int total_seats = Convert.ToInt32(Console.ReadLine());

            for (int i = 0; i < total_seats; i++)
            {
                Console.Write($"Enter Seat Number {i + 1} : ");
                int sno = Convert.ToInt32(Console.ReadLine());
                connect = new SqlConnection(con);
                connect.Open();
                SqlCommand cmd5 = new SqlCommand($"Insert into booking_details values('{t_name}','{m_name}',{sno},{screen},'{dt}')", connect);
                SqlCommand cmd6 = new SqlCommand($"update Seat set seat_status = 'unavailable' where seat_id = {sno}", connect);
                cmd6.ExecuteNonQuery();
                cmd5.ExecuteNonQuery();


            }
            //Payment Method
            int amt = 0;
            if (Stype.ToLower() == "vip")
            {
                amt = 200;
            }
            else if (Stype.ToLower() == "premium")
            {
                amt = 150;
            }
            else
            {
                amt = 100;
            }
            int price = total_seats * amt;
            Console.WriteLine("The Total Amount to be paid is : " + price + " rupees.");





            Console.Write("Enter Amount to pay : ");
            int c_amt = Convert.ToInt32(Console.ReadLine());

            if (c_amt == price)
            {
                Console.WriteLine("------------------------------------------");

                Console.WriteLine("Ticket booked successfully !!!!");
            }
            else
            {
                connect.Close();

                connect = new SqlConnection(con);
                connect.Open();

                for (int i = 0; i < total_seats; i++)
                {
                    Console.WriteLine("------------------------------------------");

                    Console.WriteLine("Enter Valid amount");

                    SqlCommand cmd9 = new SqlCommand($"update Booking_Details set amount_status = 'invalid'", connect);
                    cmd9.ExecuteNonQuery();


                }
            }




            Console.WriteLine("------------------------------------------");



            connect.Close();

        }
        public void TeluguLang()
    {
            connect = new SqlConnection(con);
            connect.Open();
            SqlCommand cmd = new SqlCommand("select movie_name from Movies where movie_lang='Telugu'", connect);
            if (connect != null)
            {
                SqlDataReader s = cmd.ExecuteReader();
                Console.WriteLine("------------------------------------------");
                while (s.Read())
                {
                    Console.WriteLine(s[0].ToString());
                }
                Console.WriteLine("------------------------------------------");
            }
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter the movie name : ");
            string m_name = Console.ReadLine();
            SqlCommand cmd1 = new SqlCommand($" SELECT Theatre.theatre_name,Theatre.theatre_area, Movies.movie_name  FROM Theatre INNER JOIN Movies ON Theatre.movie_id = Movies.movie_id where movie_name='{m_name}'", connect);
            if (connect != null)
            {
                SqlDataReader s1 = cmd1.ExecuteReader();
                Console.WriteLine("------------------------------------------");
                while (s1.Read())
                {
                    Console.WriteLine("Theatre Name : " + s1[0].ToString() + "    Area : " + s1[1].ToString());

                }
                Console.WriteLine("------------------------------------------");
            }
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter theatre name :");
            string tname = Console.ReadLine();
            SqlCommand cmd113 = new SqlCommand($" SELECT * FROM show_time INNER JOIN theatre ON Theatre.show_id = show_time.show_id where theatre_name='{tname}'", connect);

            SqlDataReader s113 = cmd113.ExecuteReader();
            Console.WriteLine("------------------------------------------");
            while (s113.Read())
            {
                Console.WriteLine("Screen : " + s113[0].ToString() + "   Show time : " + s113[1].ToString() + "pm");

            }
            Console.WriteLine("------------------------------------------");

            
           
            connect.Close();

            connect = new SqlConnection(con);
            connect.Open();
            Console.Write("Enter the screen : ");
            int screen = Convert.ToInt32(Console.ReadLine());
            Console.Write($"Enter the date you want to book (yyyy mm dd) : ");
            string dt = Console.ReadLine();
            Console.WriteLine("------------------------------------------");
            Console.WriteLine("Seat Type : VIP       Ticket Price : 200");
            Console.WriteLine("Seat Type : Premium   Ticket Price : 150");
            Console.WriteLine("Seat Type : ELite     Ticket Price : 100");
            Console.WriteLine("------------------------------------------");
            Console.Write("Enter Seat Type : ");
            string Stype = Console.ReadLine();

            SqlCommand cmd32 = new SqlCommand($" SELECT seat_id from seat where show_id='{screen}' and seat_type ='{Stype}'and seat_status ='available'", connect);

            SqlDataReader s32 = cmd32.ExecuteReader();
            Console.WriteLine("------------------------------------------");
            while (s32.Read())
            {
                Console.WriteLine("Available Seats :  " + s32[0].ToString());

            }
            connect.Close();
            Console.WriteLine("------------------------------------------");

            Console.Write("Enter the Total No of Seats you want : ");
            int total_seats = Convert.ToInt32(Console.ReadLine());

            for (int i = 0; i < total_seats; i++)
            {
                Console.Write($"Enter Seat Number {i + 1} : ");
                int sno = Convert.ToInt32(Console.ReadLine());
                connect = new SqlConnection(con);
                connect.Open();
                SqlCommand cmd5 = new SqlCommand($"Insert into booking_details values('{tname}','{m_name}',{sno},{screen},'{dt}')", connect);
                SqlCommand cmd6 = new SqlCommand($"update Seat set seat_status = 'unavailable' where seat_id = {sno}", connect);
                cmd6.ExecuteNonQuery();
                cmd5.ExecuteNonQuery();


            }
            //Payment Method
            int amt = 0;
            if (Stype.ToLower() == "vip")
            {
                amt = 200;
            }
            else if (Stype.ToLower() == "premium")
            {
                amt = 150;
            }
            else
            {
                amt = 100;
            }
            int price = total_seats * amt;
            Console.WriteLine("The Total Amount to be paid is : " + price + " rupees.");





            Console.Write("Enter Amount to pay : ");
            int c_amt = Convert.ToInt32(Console.ReadLine());

            if (c_amt == price)
            {
                Console.WriteLine("------------------------------------------");

                Console.WriteLine("Ticket booked successfully !!!!");
            }
            else
            {
                connect.Close();

                connect = new SqlConnection(con);
                connect.Open();

                for (int i = 0; i < total_seats; i++)
                {
                    Console.WriteLine("------------------------------------------");

                    Console.WriteLine("Enter Valid amount");

                    SqlCommand cmd9 = new SqlCommand($"update Booking_Details set amount_status = 'invalid'", connect);
                    cmd9.ExecuteNonQuery();


                }
            }




            Console.WriteLine("------------------------------------------");



            connect.Close();
        }
        

    }
}
