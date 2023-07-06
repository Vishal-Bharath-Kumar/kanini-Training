using System;
using System.Collections.Generic;

namespace MovieTicket.Models;

public partial class ShowTime
{
    public int ShowId { get; set; }

    public TimeSpan ShowTime1 { get; set; }

    public virtual ICollection<Seat> Seats { get; set; } = new List<Seat>();

    public virtual ICollection<Theatre> Theatres { get; set; } = new List<Theatre>();
}
