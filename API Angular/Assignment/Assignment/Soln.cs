using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Assignment
{
    class Soln
    {
        public void coordinates(int x, int y)
        {
            if (x > 0 && y > 0)
            {
                Console.WriteLine("The coordinate point (" + x + " , " + y + ") lies in the First quadrant.");
            }
            else if (x < 0 && y > 0)
            {
                Console.WriteLine("The coordinate point (" + x + " , " + y + ") lies in the Second quadrant.");
            }
            else if (x < 0 && y < 0)
            {
                Console.WriteLine("The coordinate point (" + x + " , " + y + ") lies in the Third quadrant.");
            }
            else if (x > 0 && y < 0)
            {
                Console.WriteLine("The coordinate point (" + x + " , " + y + ") lies in the Fourth quadrant.");
            }
            else
            {
                Console.WriteLine("The coordinate point (" + x + " , " + y + ") lies in the Origin.");
            }
        }

        public void Student(int p_mark, int ch_mark, int cs_mark, double total_marks, double percentage, string division)
        {
            total_marks = p_mark + ch_mark + cs_mark;
            Console.WriteLine("Total Marks = " + total_marks);
            percentage = total_marks / 3;
            string percent = percentage.ToString("0.00");
            Console.WriteLine("Percentage = " + percent);
            if (percentage >= 80)
            {
                division = "First";
                Console.WriteLine("Division = " + division);
            }
            else if (percentage >= 60 && percentage < 80)
            {
                division = "Second";
                Console.WriteLine("Division = " + division);
            }
            else
            {
                division = "Third";
                Console.WriteLine("Division = " + division);
            }
        }

        public void EB(int c_unit, int mincharge, double charge, double total_amt)
        {
            if (c_unit <= 199)
            {
                charge = 1.20;
                total_amt = c_unit * charge;
                if (total_amt > 400)
                {
                    total_amt = (total_amt) + 15 / 100;
                    Console.WriteLine("Total Bill : " + total_amt);
                }
                else if (total_amt < 100)
                {
                    Console.WriteLine("Total Bill : " + mincharge);
                }
                else
                {
                    Console.WriteLine("Total Bill : " + total_amt);
                }
            }
            else if (c_unit >= 200 && c_unit < 400)
            {
                charge = 1.50;
                total_amt = c_unit * charge;
                if (total_amt > 400)
                {
                    total_amt = (total_amt) + 15 / 100;
                    Console.WriteLine("Total Bill : " + total_amt);
                }
                else if (total_amt < 100)
                {
                    Console.WriteLine("Total Bill : " + mincharge);
                }
                else
                {
                    Console.WriteLine("Total Bill : " + total_amt);
                }
            }
            else if (c_unit >= 400 && c_unit < 600)
            {
                charge = 1.80;
                total_amt = c_unit * charge;
                if (total_amt > 400)
                {
                    total_amt = (total_amt) + 15 / 100;
                    Console.WriteLine("Total Bill : " + total_amt);
                }
                else if (total_amt < 100)
                {
                    Console.WriteLine("Total Bill : " + mincharge);
                }
                else
                {
                    Console.WriteLine("Total Bill : " + total_amt);
                }
            }
            else if (c_unit >= 600)
            {
                charge = 2.00;
                total_amt = c_unit * charge;
                if (total_amt > 400)
                {
                    total_amt = (total_amt) + 15 / 100;
                    Console.WriteLine("Total Bill : " + total_amt);
                }
                else if (total_amt < 100)
                {
                    Console.WriteLine("Total Bill : " + mincharge);
                }
                else
                {
                    Console.WriteLine("Total Bill : " + total_amt);
                }
            }

        }

        public void Pattern1(int total_no, int i, int j, int number)
        {
            for (i = 1; i <= total_no; i++)
            {
                for (j = 1; j <= i; j++)
                {
                    Console.Write(number);
                    ++number;
                }
                Console.WriteLine("\n");
            }
        }

        public void pattern2(int i, int j, int k, int rows, int spc, int t)
        {
            spc = rows + 3;
            for (i = 1; i <= rows; i++)
            {
                for (k = spc; k >= 1; k--)
                {
                    Console.Write(" ");
                }
                for (j = 1; j <= i; j++)
                    Console.Write("{0} ", t++);
                Console.Write("\n");
                spc--;
            }
        }

        public void Array(int i, int n)
        {
            //Reverse an array
            int[] arr1 = new int[10];
            Console.Write("Input number of elements in the array :\n", n);
            for (i = 0; i < n; i++)
            {
                Console.Write("element - {0} : ", i);
                arr1[i] = Convert.ToInt32(Console.ReadLine());
            }
            Console.Write("\n\nThe values store into the array in reverse are :\n");
            for (i = n - 1; i >= 0; i--)
            {
                Console.Write("{0} ", arr1[i]);
                Console.Write("\n");
            }
            //Dupicate Array
            int[] arr2 = new int[10];
            for (i = 0; i < n; i++)
            {
                arr2[i] = arr1[i];
            }
            Console.WriteLine("The copied values of arr1 into arr2");
            for (i = 0; i < n; i++)
            {
                Console.WriteLine("{0}  ", arr2[i]);
            }
            //sum of elements in an array
            int sum = 0;
            for (i = 0; i < n; i++)
            {
                sum += arr1[i];
            }

            Console.WriteLine("Sum of all elements stored in the array is : {0}", sum);
            //count total no of duplicate elements in an array
            int[] arr3 = new int[10];
            int mm = 1, ctr = 0, j;
            for (i = 0; i < n; i++)
            {
                for (j = 0; j < n; j++)
                {
                    if (arr1[i] == arr2[j])
                    {
                        arr3[j] = mm;
                        mm++;
                    }
                }
                mm = 1;
            }
            for (i = 0; i < n; i++)
            {
                if (arr3[i] == 2) { ctr++; }
            }
            Console.Write("The number of duplicate elements is: {0} \n", ctr);
            //unique numbers in an array
            int k;
            Console.Write("\nThe unique elements found in the array are : ");
            for (i = 0; i < n; i++)
            {
                ctr = 0;
                for (j = 0; j < i - 1; j++)
                {
                    if (arr2[i] == arr2[j])
                    {
                        ctr++;
                    }
                }
                for (k = i + 1; k < n; k++)
                {
                    if (arr2[i] == arr2[k])
                    {
                        ctr++;
                    }
                    if (arr2[i] == arr2[i + 1])
                    {
                        i++;
                    }
                }

                if (ctr == 0)
                {
                    Console.Write("{0} \n", arr2[i]);
                }
            }
            //second largest number in an array
            int lrg1, lrg2;
            lrg1 = 0;
            j = 0;

            for (i = 0; i < n; i++)
            {
                if (lrg1 < arr2[i])
                {
                    lrg1 = arr2[i];
                    j = i;
                }
            }
            lrg2 = 0;
            for (i = 0; i < n; i++)
            {
                if (i == j)
                {
                    i++;  /* ignoring the largest element */
                    i--;
                }
                else
                {
                    if (lrg2 < arr2[i])
                    {
                        lrg2 = arr2[i];
                    }
                }
            }

            Console.Write("The Second largest element in the array is :  {0} ", lrg2);


        }
        public void matrix(int r, int c)
        {

            int[,] arr1 = new int[30, 30];
            Console.WriteLine("Enter a array elements:");
            for (int i = 0; i < r; i++)
            {
                for (int j = 0; j < c; j++)
                {
                    arr1[i, j] = Convert.ToInt32(Console.ReadLine());
                }
            }



            Console.WriteLine("transpose Matrix is:");

            for (int i = 0; i < r; i++)
            {
                for (int j = 0; j < c; j++)
                {
                    Console.Write(arr1[j, i] + " ");
                }
                Console.WriteLine(" ");
            }
        }
        public void Alph(string str, int i, int wrd, int l)
        {

            l = 0;
            wrd = 1;
            while (l <= str.Length - 1)
            {
                if (str[l] == ' ' || str[l] == '\n' || str[l] == '\t')
                {
                    wrd++;
                }

                l++;
            }

            Console.Write("Total number of words in the string is : {0}\n", wrd);
        }
        public void StringCount(string psw)
        {
            int alphaCount = 0;
            int numCount = 0;
            int splCount = 0;

            for (int i = 0; i < psw.Length; i++)
            {
                if ((psw[i] >= 'a' && psw[i] <= 'z') || (psw[i] >= 'A' && psw[i] <= 'Z'))
                {
                    alphaCount++;
                }
                else if (psw[i] >= '0' && psw[i] <= '9')
                {
                    numCount++;
                }
                else
                {
                    splCount++;
                }
            }
            Console.WriteLine("Alphabets count in a string is: " + alphaCount);
            Console.WriteLine("Numbers count in a string is: " + numCount);
            Console.WriteLine("Special characters count in a string is: " + splCount);
        }
        public void Stringtxt(string txt)
        {
            string x;
            int l = 1 - txt.Length % 2;
            x = txt.Substring(txt.Length / 2 - l, 1 + l);
            Console.WriteLine(x);

        }
        public void fibb(int num1, int num2, int n)
        {
            for (int i = 3; i <= n; ++i)
            {
                Console.Write(num2);
                int temp = num1;
                num1 = num2;
                num2 = temp + num1;
            }

        }
        public void arms(int temp, int num, int r, int sum)
        {
            for (temp = num; num != 0; num = num / 10)
            {
                r = num % 10;
                sum = sum + (r * r * r);
            }
            if (sum == temp)
                Console.Write("{0} is an Armstrong number.\n", temp);
            else
                Console.Write("{0} is not an Armstrong number.\n", temp);
        }
        public void perfect(int i, int n, int sum)
        {
            for (i = 1; i < n; i++)
            {
                if (n % i == 0)
                {
                    sum = sum + i;
                    Console.Write("{0}  ", i);
                }
            }
            Console.Write("\nThe sum of the divisor is : {0}", sum);
            if (sum == n)
                Console.Write("\nSo, the number is perfect.");
            else
                Console.Write("\nSo, the number is not perfect.");
        }  public void palindrome(int num, int sum)
        {
            int t, r;
            for (t = num; num != 0; num = num / 10)
            {
                r = num % 10;
                sum = sum * 10 + r;
            }
            if (t == sum)
                Console.Write("{0} is a palindrome number.\n", t);
            else
                Console.Write("{0} is not a palindrome number.\n", t);


        }
    }
      
}



