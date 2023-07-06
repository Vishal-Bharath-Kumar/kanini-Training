using System;
using System.Collections.Generic;

namespace MovieTicket.Models;

public partial class Theatre
{
    public int MovieId { get; set; }

    public int TheatreId { get; set; }

    public string TheatreName { get; set; } = null!;

    public string TheatreArea { get; set; } = null!;

    public int SeatId { get; set; }

    public int ShowId { get; set; }

    public virtual Movie Movie { get; set; } = null!;

    public virtual Seat Seat { get; set; } = null!;

    public virtual ShowTime Show { get; set; } = null!;
}
