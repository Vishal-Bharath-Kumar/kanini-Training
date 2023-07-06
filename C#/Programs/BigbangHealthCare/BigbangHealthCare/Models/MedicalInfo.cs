using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BigbangHealthCare.Models
{
    public class MedicalInfo
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public int AppointmentId { get; set; }

        public string? PatientId { get; set; }


        public string? doctorId { get; set; }

        public string? description { get; set; }

        public string? TestName { get; set; }
        public string? TestResult { get; set;}



    }
}
