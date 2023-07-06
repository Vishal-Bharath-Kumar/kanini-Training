using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Assignment
{
    internal class Animals : Sound, Animaltype
    {
        private string name;
        private int eyes, mouth, legs, tail;

        public Animals(string name, int eyes, int mouth, int legs, int tail)
        {
            this.Name = name;
            this.Eyes = eyes;
            this.Mouth = mouth;
            this.Legs = legs;
            this.Tail = tail;
        }

        public string Name { get => name; set => name = value; }
        public int Eyes { get => eyes; set => eyes = value; }
        public int Mouth { get => mouth; set => mouth = value; }
        public int Legs { get => legs; set => legs = value; }
        public int Tail { get => tail; set => tail = value; }

        public void Makesound(string Name)
        {
            if (name == "dog")
                Console.WriteLine("Bow Bow");
            else if (name == "cat")
                Console.WriteLine("Meow Meow");
            else if (name == "cow")
                Console.WriteLine("Moo Moo");

          
        }

        public void Type(string Name)
        {
            if (name == "dog")
                Console.WriteLine("Carnivore");
            else if (name == "cow")
                Console.WriteLine("Herbivore");
            else if (name == "cat")
                Console.WriteLine("omnivore");   
        }
    }
}
