using System;
using System.Collections.Generic;

namespace MovieTicket.Models;

public partial class Seat
{
    public int SeatId { get; set; }

    public int TicketPrice { get; set; }

    public string SeatStatus { get; set; } = null!;

    public string? SeatType { get; set; }

    public int? ShowId { get; set; }

    public virtual ShowTime? Show { get; set; }

    public virtual ICollection<Theatre> Theatres { get; set; } = new List<Theatre>();
}
