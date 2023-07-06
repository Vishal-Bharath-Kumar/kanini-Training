using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MovieTicket.Models;

public partial class BookingDetail
{
    [Key]
    public int BookingId { get; set; }

    public string? TheatreName { get; set; }

    public string? MovieName { get; set; }

    public int? SeatId { get; set; }

    public int? ShowId { get; set; }

    public string? BookingDate { get; set; }
}
