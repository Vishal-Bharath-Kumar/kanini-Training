using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo
{
    public class BankTransactions
    {
        private int custid;
        private long accno;
        private string accname, status;
        private decimal balance, creditamt, debitamt;

        public void ReadCustomerDetails()
        {
            Console.WriteLine("Enter Customer ID, " + "Acc no, " + "Name, " + "balance ");
            custid= Convert.ToInt32(Console.ReadLine());
            accno = Convert.ToInt64(Console.ReadLine());
            accname = Console.ReadLine();
            balance= Convert.ToDecimal(Console.ReadLine());
            status = "Inactive";
            creditamt=debitamt=0;
            PerformTransactions();
        }

        private void PerformTransactions()
        {
            
            Console.WriteLine("1. Credit 2. Debit ");
            int ch = Convert.ToInt32(Console.ReadLine());
            switch (ch)
            {
                case 1:
                    Console.WriteLine("Enter Credit Amount");
                    creditamt=Convert.ToDecimal(Console.ReadLine());
                    balance += creditamt;
                    status = "Active";
                    break;
                case 2:
                    Console.WriteLine("Enter Debit Amount");
                    debitamt = Convert.ToDecimal(Console.ReadLine());
                    balance -= debitamt;
                    status = "Active";
                    break;
                default:
                    Console.WriteLine("Enter 1 or 2 Only");
                    break;
               
            }
            WriteCustomerDetails();
        }
        public void WriteCustomerDetails()
        {
            
            Console.WriteLine($"Account Name :{accname}\nBalance :{balance} \nStatus :{status}");
        }

    }
}
