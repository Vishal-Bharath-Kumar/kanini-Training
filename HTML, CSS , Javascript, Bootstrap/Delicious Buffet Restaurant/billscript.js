function  billCalculation() {

    var vegad = document.getElementById('vegAdult').value;
    var vegkid = document.getElementById('vegKids').value;
    var nonvad = document.getElementById('nonVegAdult').value;
    var nonvkid = document.getElementById('nonVegKids').value;  
   
    var totalcost = (599 * vegad) + (249 * vegkid) + (699 * nonvad) + (349 * nonvkid);
   
    totalcost += totalcost * 0.12;
   
    totalcost = totalcost.toFixed(2);
    if((vegad + vegkid+ nonvad + nonvkid) >= 10)
    {
       totalcost = totalcost * 0.9;
       totalcost = totalcost.toFixed(2);
    }
   
    var cusName = document.getElementById('customerName').value;
   
   document.getElementById('result').innerHTML ='Hai ' + cusName + ', You have to pay Rs.'+totalcost +'. Thanks for coming!!!';
   return false;
   }