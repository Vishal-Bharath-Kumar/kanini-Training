using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Intrest : Bankdetails
    {
        private double intrest_percent;

        public Intrest(double intrest_percent, int acc_no, string name, double balance, double intrest_amt):base(acc_no,name, balance, intrest_amt)
        {
            this.Intrest_percent = intrest_percent;
        }

        public double Intrest_percent { get => intrest_percent; set => intrest_percent = value; }

        public override double CalculateIntrest()
        {
            return (Balance * 1 * intrest_percent) /100;
          
        }
    }
}
