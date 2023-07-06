using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal static class EB
    {
        static int c_num=123, pre_read=100, cur_read=200;
        static double amt;

        public static int C_num { get => c_num; set => c_num = value; }
        public static int Pre_read { get => pre_read; set => pre_read = value; }
        public static int Cur_read { get => cur_read; set => cur_read = value; }
        public static double Amt { get => amt; set => amt = value; }

        public static void Calculate()
        {
            Amt = (cur_read - pre_read)*5;
        }
        public static void disp()
        {
            EB.Calculate();
            Console.WriteLine("You have to pay Rs." + amt);
        }

    }
}
