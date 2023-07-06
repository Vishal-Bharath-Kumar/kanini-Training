//// See https://aka.ms/new-console-template for more information
using Demo;
using System.Transactions;

//Console.Write("Hello!");
///* Author : Vishal 
// * Date : 22/03/2023
// * Description : Simple Program
// */
//System.Console.WriteLine("Spark");
//System.Console.WriteLine("Welcome");

//int num1 , num2, ans;
//Console.WriteLine("Enter Two Numbers ");
//num1 = Convert.ToInt32(Console.ReadLine()); 
//num2= Convert.ToInt32(Console.ReadLine());
//ans= num1+num2;
//System.Console.WriteLine(num1+"+"+num2+ "="+ans) ;

//double sqrans =Math.Sqrt(ans);
//Console.WriteLine(sqrans);

//// Date : 23/03/2023
//int number1, number2;
//Console.WriteLine("Enter Two Numbers");
//number1 = Convert.ToInt32(Console.ReadLine());
//number2 = Convert.ToInt32(Console.ReadLine());
//if (number1 == number2)
//    Console.WriteLine("Both are equal");
//else if (number1 > number2)
//    Console.WriteLine(number1 + "is Greater");
//else
//    Console.WriteLine(number2 + "is Greater");


//do while in function
//class Program { 
// static void loopfn()
//{
//    int max,count=1,sum=0;
//    Console.WriteLine("Enter max number");
//    max=Convert.ToInt32(Console.ReadLine());
//    do
//    {
//        sum=sum+count;
//        count++;
//    }while(count<=max);
//    Console.WriteLine("Total :" + sum);
//}
//static void Main(string[] args)
//{
//    loopfn();
//}
//}

class Program
{
    public static void Main(string[] args)
    {
        BankTransactions bankTransactions= new BankTransactions();
        bankTransactions.ReadCustomerDetails();
       
       

    }
}





