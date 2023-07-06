using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class FileOperations 
    {
        public void CreateFile() 
        {
            FileInfo fi = new
                FileInfo("D:\\C#\\Programs\\Assignment" + "Sample.txt");
            using StreamWriter str = fi.CreateText();
            Console.WriteLine("File has been Created");

            str.WriteLine("Hello");

            //fi.MoveTo("D:\\C#\\Programs\\Demo");
        }
        public void DeleteFile()
        {
            FileInfo fi= new 
            FileInfo("D:\\C#\\Programs\\Assignment" + "Sample.txt");
            fi.Delete();
            Console.WriteLine("File has been deleted");
        }
          
    
    } 
}
