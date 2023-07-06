using AdventureLand.Models;
using AdventureLand.Repository.Booking_Details;
using AdventureLand.Repository.Land_Rides;
using AdventureLand.Repository.User_Registration;
using AdventureLand.Repository.Water_Rides;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


#region Configure database
var connectionstring = builder.Configuration.GetConnectionString("SQLConnection");
builder.Services.AddDbContext<AdventureLandDbContext>(options => options.UseSqlServer(connectionstring));
#endregion

builder.Services.AddScoped<IUserServices, UserServices>();
builder.Services.AddScoped<IBookingServices, BookingServices>();
builder.Services.AddScoped<ILandServices, LandServices>();
builder.Services.AddScoped<IWaterServices, WaterServices>();

builder.Services.AddCors(op =>
{
    op.AddPolicy("MyParkPolicy", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();


    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("MyParkPolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();
