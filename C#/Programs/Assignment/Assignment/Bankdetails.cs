using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal abstract class Bankdetails
    {
        private int acc_no;
        private string name;
        private double balance;
        private double intrest_amt;

       public Bankdetails(int acc_no, string name, double balance, double intrest_amt)
        {
            this.Acc_no = 0;
            this.Name= name;
            this.Balance = balance; 
            this.Intrest_amt = intrest_amt;

        }

        public int Acc_no { get => acc_no; set => acc_no = value; }
        public string Name { get => name; set => name = value; }
        public double Balance { get => balance; set => balance = value; }
        public double Intrest_amt { get => intrest_amt; set => intrest_amt = value; }

        public abstract double CalculateIntrest();
    }
}
