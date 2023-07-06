using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class JA
    {
        public void display()
        {
            int[][] numbers = new int[4][];

            numbers[0]=new int [] {1,2,3,4} ;
            numbers[1] = new int[] { 1, 2, 4 };
            numbers[2] = new int[] { 1, 3, 4 };
            numbers[3] = new int[] { 1, 4 };

            Console.WriteLine(numbers[2][1]);
        
        }
       
    }
}
