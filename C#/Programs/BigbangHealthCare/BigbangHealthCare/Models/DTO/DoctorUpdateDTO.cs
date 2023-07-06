namespace BigbangHealthCare.Models.DTO
{
    public class DoctorUpdateDTO
    {
     /*   public string? Id { get; set; }*/
        public string? Email { get; set; }
        public string Specialization { get; set; } = string.Empty;
        public int Experiance { get; set; }
        public string phone { get; set; } = string.Empty;
        public string image { get; set; } = string.Empty;
    }
}
