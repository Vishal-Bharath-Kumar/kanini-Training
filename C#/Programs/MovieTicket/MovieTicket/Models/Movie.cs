using System;
using System.Collections.Generic;

namespace MovieTicket.Models;

public partial class Movie
{
    public int MovieId { get; set; }

    public string MovieName { get; set; } = null!;

    public string MovieLang { get; set; } = null!;

    public virtual ICollection<Theatre> Theatres { get; set; } = new List<Theatre>();
}
