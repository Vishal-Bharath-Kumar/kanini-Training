using Hotels.Model;
using Hotels.Repository.BookingDetails;
using Hotels.Repository.Hotels;
using Hotels.Repository.Hotels.Rooms;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<hotelDbContext>(optionsAction:options => options.UseSqlServer(builder.Configuration.GetConnectionString(name: "SQLConnection")));
builder.Services.AddScoped<IHotels_Services, Hotels_Services>();
//builder.Services.AddScoped<IRooms_Services,Rooms_Services>();   
builder.Services.AddScoped<IBooking_Details_Services, Booking_Details_Services>();



var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
