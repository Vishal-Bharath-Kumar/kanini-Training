using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MovieTicket.Models;

public partial class BooknowTicketsContext : DbContext
{
    public BooknowTicketsContext()
    {
    }

    public BooknowTicketsContext(DbContextOptions<BooknowTicketsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<BookingDetail> BookingDetails { get; set; }

    public virtual DbSet<LogIn> LogIns { get; set; }

    public virtual DbSet<Movie> Movies { get; set; }

    public virtual DbSet<Seat> Seats { get; set; }

    public virtual DbSet<ShowTime> ShowTimes { get; set; }

    public virtual DbSet<Theatre> Theatres { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) { }
//#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
  //      => optionsBuilder.UseSqlServer("data source=SPARK\\SQLEXPRESS;database=BooknowTickets;integrated security=true;trustservercertificate=true");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<BookingDetail>(entity =>
        {
           
                entity.HasKey(e => e.BookingId).HasName("PK_bookId");
                entity.ToTable("Booking_Details");

            entity.Property(e => e.BookingDate)
                .HasMaxLength(20)
                .HasColumnName("booking_date");
            entity.Property(e => e.BookingId)
                .ValueGeneratedOnAdd()
                .HasColumnName("booking_id");
            entity.Property(e => e.MovieName)
                .HasMaxLength(20)
                .HasColumnName("movie_name");
            entity.Property(e => e.SeatId).HasColumnName("seat_id");
            entity.Property(e => e.ShowId).HasColumnName("show_id");
            entity.Property(e => e.TheatreName)
                .HasMaxLength(20)
                .HasColumnName("theatre_name");
        });

        modelBuilder.Entity<LogIn>(entity =>
        {
            entity.HasKey(e => e.LoginId).HasName("PK_LOGIN");

            entity.ToTable("LogIn");

            entity.Property(e => e.LoginId).HasColumnName("Login_Id");
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .HasColumnName("password");
            entity.Property(e => e.Username)
                .HasMaxLength(20)
                .HasColumnName("username");
        });

        modelBuilder.Entity<Movie>(entity =>
        {
            entity.HasKey(e => e.MovieId).HasName("PK_MOVIES");

            entity.Property(e => e.MovieId).HasColumnName("movie_id");
            entity.Property(e => e.MovieLang)
                .HasMaxLength(20)
                .HasColumnName("movie_lang");
            entity.Property(e => e.MovieName)
                .HasMaxLength(20)
                .HasColumnName("movie_name");
        });

        modelBuilder.Entity<Seat>(entity =>
        {
            entity.HasKey(e => e.SeatId).HasName("PK_SEAT");

            entity.ToTable("Seat");

            entity.Property(e => e.SeatId).HasColumnName("seat_id");
            entity.Property(e => e.SeatStatus)
                .HasMaxLength(20)
                .HasColumnName("seat_status");
            entity.Property(e => e.SeatType)
                .HasMaxLength(10)
                .HasColumnName("seat_type");
            entity.Property(e => e.ShowId).HasColumnName("show_id");
            entity.Property(e => e.TicketPrice).HasColumnName("ticket_price");

            entity.HasOne(d => d.Show).WithMany(p => p.Seats)
                .HasForeignKey(d => d.ShowId)
                .HasConstraintName("FKSID");
        });

        modelBuilder.Entity<ShowTime>(entity =>
        {
            entity.HasKey(e => e.ShowId).HasName("PK_SHOW_TIME");

            entity.ToTable("Show_Time");

            entity.Property(e => e.ShowId).HasColumnName("show_id");
            entity.Property(e => e.ShowTime1).HasColumnName("show_time");
        });

        modelBuilder.Entity<Theatre>(entity =>
        {
            entity.HasKey(e => e.TheatreId).HasName("PK_THEATRE");

            entity.ToTable("Theatre");

            entity.Property(e => e.TheatreId).HasColumnName("theatre_id");
            entity.Property(e => e.MovieId).HasColumnName("movie_id");
            entity.Property(e => e.SeatId).HasColumnName("seat_id");
            entity.Property(e => e.ShowId).HasColumnName("show_id");
            entity.Property(e => e.TheatreArea)
                .HasMaxLength(20)
                .HasColumnName("theatre_area");
            entity.Property(e => e.TheatreName)
                .HasMaxLength(20)
                .HasColumnName("theatre_name");

            entity.HasOne(d => d.Movie).WithMany(p => p.Theatres)
                .HasForeignKey(d => d.MovieId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Theatre_fk0");

            entity.HasOne(d => d.Seat).WithMany(p => p.Theatres)
                .HasForeignKey(d => d.SeatId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Theatre_fk1");

            entity.HasOne(d => d.Show).WithMany(p => p.Theatres)
                .HasForeignKey(d => d.ShowId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("Theatre_fk2");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
