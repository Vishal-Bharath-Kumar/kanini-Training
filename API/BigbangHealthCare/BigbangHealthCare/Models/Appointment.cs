using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BigbangHealthCare.Models
{
    public class Appointment
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AppointmentId { get; set; }

        public string? PatientId { get; set; }


        public string? doctorId { get; set; }

        public DateTime Date { get; set; }

        public string? TimeSlot { get; set; }
  

    }
}
