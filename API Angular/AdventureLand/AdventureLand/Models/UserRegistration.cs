using System.ComponentModel.DataAnnotations;

namespace AdventureLand.Models
{
    public class UserRegistration
    {
        [Key]
        public int userId { get; set; }

        public string? UserName { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }
    }
}
