using System;
using System.Collections.Generic;

namespace AngularBigbang.Models;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string EmailId { get; set; } = null!;

    public string UserName { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public string Address { get; set; } = null!;

    public string? Role { get; set; }

    public byte[]? HashKey { get; set; }

    public byte[]? Password { get; set; }
}
