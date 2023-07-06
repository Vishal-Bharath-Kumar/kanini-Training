using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assessment
{

    internal class Person
    {
        private int age;

        public int Age
        {
            get => age;
            set => age = value;
        }

        public void CheckAge(int age)
        {

            if (age >= 18 && age <= 120)
            {
                Console.WriteLine("You are Eligible to vote");
            }
            else
            {
                throw new ArithmeticException("You must be at least 18 years old to vote.");
            }



        }

    }
    internal class CurrencyConverter
    {
        private double inrtousd = 0.012;
        private double inrtoyen = 1.63;
        private double inrtoeuro = 0.011;
        private double inrtosgd = 0.016;
        private double inrtolkr = 3.89;

        public double Inrtousd { get => inrtousd; set => inrtousd = value; }
        public double Inrtoyen { get => inrtoyen; set => inrtoyen = value; }
        public double Inrtoeuro { get => inrtoeuro; set => inrtoeuro = value; }
        public double Inrtosgd { get => inrtosgd; set => inrtosgd = value; }
        public double Inrtolkr { get => inrtolkr; set => inrtolkr = value; }

        public double ConvertInrToUsd(double inr)
        {
            return inr * inrtousd;
        }

        public double ConvertInrToYen(double inr)
        {
            return inr * inrtoyen;
        }

        public double ConvertInrToEuro(double inr)
        {
            return inr * inrtoeuro;
        }

        public double ConvertInrToSgd(double inr)
        {
            return inr * inrtosgd;
        }

        public double ConvertInrToLkr(double inr)
        {
            return inr * inrtolkr;
        }
    }

    internal class EBCalculator
    {

        private double pre_read;
        private double curr_read;

        public double Pre_read { get => pre_read; set => pre_read = value; }
        public double Curr_read { get => curr_read; set => curr_read = value; }

        public const double unit_charge = 10;

        public void EBReading(double pre_read, double curr_read)
        {
            Pre_read = pre_read;
            Curr_read = curr_read;
        }

        public void EnterReading(double pre_read, double curr_read)
        {
            EBReading(Pre_read, Curr_read);
        }

        public void CalculateBill(double pre_read, double curr_read)
        {
            if (Pre_read == null || Curr_read == null)
            {
                throw new InvalidOperationException("Electricity readings have not been entered.");
            }
            double units = curr_read - pre_read;
            double bill = units * unit_charge;
            Console.WriteLine("Total Amount You have to Pay : " + bill);

        }


        internal class TemperatureConverter
        {
            public static double CelsiusToFahrenheit(double celsius)
            {
                return (celsius * 9 / 5) + 32;
            }

            public static double CelsiusToKelvin(double celsius)
            {
                return celsius + 273.15;
            }

            public static double FahrenheitToCelsius(double fahrenheit)
            {
                return (fahrenheit - 32) * 5 / 9;
            }

            public static double FahrenheitToKelvin(double fahrenheit)
            {
                return (fahrenheit + 459.67) * 5 / 9;
            }

            public static double KelvinToCelsius(double kelvin)
            {
                return kelvin - 273.15;
            }

            public static double KelvinToFahrenheit(double kelvin)
            {
                return (kelvin * 9 / 5) - 459.67;
            }
        }

        internal class FileCreate
        {
            public void file()
            {
                //CREATING ALL YEAR FILE WITH YEARS FROM 2000 TO 2050

                FileInfo fi = new FileInfo("D:\\C#\\Programs");
                using StreamWriter stwr = fi.CreateText();
                Console.WriteLine("File has been created");
                for (int i = 2000; i < 2050; i++)
                {
                    stwr.WriteLine(i);
                }
            }
            public void Readfile()
            {


                string file_details = "D:\\C#\\Programs";
                try
                {
                    StreamReader sr = new StreamReader(file_details);
                    string text = File.ReadAllText(file_details);
                    Console.WriteLine(text);
                }
                catch (FileNotFoundException e)
                {
                    Console.WriteLine(e.Message);
                }



            }
        }
    }
}
    


    

