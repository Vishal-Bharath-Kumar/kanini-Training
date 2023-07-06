using System;
using System.Collections.Generic;

namespace MovieTicket.Models;

public partial class LogIn
{
    public int LoginId { get; set; }

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;
}
