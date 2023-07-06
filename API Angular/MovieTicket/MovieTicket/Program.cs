using Microsoft.EntityFrameworkCore;
using MovieTicket.Models;
using MovieTicket.Services.Booking_Details;
using MovieTicket.Services.Movies;
using MovieTicket.Services.Seats;
using MovieTicket.Services.ShowTimes;
using MovieTicket.Services.Theatres;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//DbConnection
builder.Services.AddDbContext<BooknowTicketsContext>(opt=>opt.UseSqlServer(builder.Configuration.GetConnectionString("connstr")));
builder.Services.AddScoped<IBooking_Details_Services, Booking_Details_Services>();
builder.Services.AddScoped<IMovie_Service, Movie_Service>(); 
builder.Services.AddScoped<ISeat_Service, Seat_Service>();
builder.Services.AddScoped<IShowTime_Service, ShowTime_Service>();
builder.Services.AddScoped<ITheatre_Service, Theatre_Service>();

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
