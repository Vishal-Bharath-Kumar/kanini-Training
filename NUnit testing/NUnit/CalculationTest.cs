using NUnit.Framework;
using Math_Operations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NUnit
{
    [TestFixture]
    public class CalculationTest
    {
        private Calculations? calculations;
        [SetUp] public void SetUp()
        {
            calculations = new Calculations(10, 10);
        }
        [Test]
        [Order(0)]

        public void AddTest()
        {
           
            int res = calculations.Add();
            Assert.AreEqual(20, res);
        }
        [Test]
        [Order(1)]
        public void SubTest()
        {
            
            int res = calculations.Sub();
            Assert.AreEqual(0, res);
        }
        [Test]
        [TearDown]
        public void MulTest()
        {
            
            int res = calculations.Mul();
            Assert.AreEqual(100, res);
        }
    }
}
