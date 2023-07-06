using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Enum_demo
    {
        enum Colors
        {
           Red, Green, Blue
        }
        public void display()
        {
            Colors color1= Colors.Red;
            Colors color2= Colors.Green;
            Colors color3= Colors.Blue;
            Console.WriteLine(color1+" "+color2+" "+color3);
        }
    }
}
