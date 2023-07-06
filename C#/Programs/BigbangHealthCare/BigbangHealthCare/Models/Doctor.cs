using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace BigbangHealthCare.Models
{
    public class Doctor
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string? Id { get; set; }
        public string? Email { get; set; }
        public string Role { get; set; } = string.Empty;
        public string Specialization { get; set; } = string.Empty;
        public int Experiance { get; set; }
        public string requestStatus { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
        public string phone { get; set; } = string.Empty;
        public string image { get; set; } = string.Empty;
    }
}
