// See https://aka.ms/new-console-template for more information
using Assessment;
using static Assessment.EBCalculator;

class Program
{
    public static void Main(string[] args)
    {

        Console.Write("Enter Age :");
        int age = Convert.ToInt32(Console.ReadLine());
        Person person = new Person();
        try
        {
            person.CheckAge(age);
        }
        catch (ArithmeticException ex)
        {
            Console.WriteLine("Sorry You are not eligible, " + ex.Message);
        }

        //CurrencyConverter converter = new CurrencyConverter();


        //Console.WriteLine("Please select a currency conversion:");
        //Console.WriteLine("1. INR to USD");
        //Console.WriteLine("2. INR to YEN");
        //Console.WriteLine("3. INR to EURO");
        //Console.WriteLine("4. INR to SGD");
        //Console.WriteLine("5. INR to LKR");

        //Console.Write("Enter Choice : ");
        //int choice = Convert.ToInt32(Console.ReadLine());
        //Console.WriteLine("Enter the amount in Inr");
        //double inr = Convert.ToDouble(Console.ReadLine());

        //switch (choice)
        //{
        //    case 1: Console.WriteLine("INR " + inr + "= Usd " + converter.ConvertInrToUsd(inr));
        //        break;
        //    case 2:
        //        Console.WriteLine("INR " + inr + "= Yen " + converter.ConvertInrToYen(inr));
        //        break;
        //    case 3:
        //        Console.WriteLine("INR " + inr + "= Euro " + converter.ConvertInrToEuro(inr));
        //        break;
        //    case 4:
        //        Console.WriteLine("INR " + inr + "= Sgd " + converter.ConvertInrToSgd(inr));
        //        break;
        //    case 5:
        //        Console.WriteLine("INR " + inr + "= Lkr " + converter.ConvertInrToLkr(inr));
        //        break;


        //}

        //EBCalculator calculator= new EBCalculator();

        //Console.WriteLine("Enter Previous Reading");
        //double pre_read = Convert.ToDouble(Console.ReadLine());
        //Console.WriteLine("Enter current Reading");
        //double curr_read = Convert.ToDouble(Console.ReadLine());

        //calculator.EnterReading(pre_read, curr_read);
        //calculator.CalculateBill(pre_read, curr_read);

        //Console.WriteLine("Enter Celsius");
        //double celsius = Convert.ToDouble( Console.ReadLine()) ;
        //double fahrenheit = TemperatureConverter.CelsiusToFahrenheit(celsius);
        //double kelvin = TemperatureConverter.CelsiusToKelvin(celsius);
        //Console.WriteLine(celsius + "°C = " + fahrenheit + "°F = " + kelvin + "K");

        //Console.WriteLine("Enter Fahrenheit");
        //fahrenheit = Convert.ToDouble(Console.ReadLine());
        //celsius = TemperatureConverter.FahrenheitToCelsius(fahrenheit);
        //kelvin = TemperatureConverter.FahrenheitToKelvin(fahrenheit);
        //Console.WriteLine(fahrenheit + "°F = " + celsius + "°C = " + kelvin + "K");

        //Console.WriteLine("Enter Kelvin");
        //kelvin = Convert.ToDouble(Console.ReadLine());
        //celsius = TemperatureConverter.KelvinToCelsius(kelvin);
        //fahrenheit = TemperatureConverter.KelvinToFahrenheit(kelvin);
        //Console.WriteLine(kelvin + "K = " + celsius + "°C = " + fahrenheit + "°F");

        //TemperatureConverter temperatureConverter = new TemperatureConverter();

        //FileCreate filecrt = new FileCreate();
        //filecrt.Readfile();
    }
}

    
