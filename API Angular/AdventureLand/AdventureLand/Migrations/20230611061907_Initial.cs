using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AdventureLand.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BookingDetails",
                columns: table => new
                {
                    bookingId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1001, 1"),
                    userName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    emailId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    bookingDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    price = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BookingDetails", x => x.bookingId);
                });

            migrationBuilder.CreateTable(
                name: "LandRides",
                columns: table => new
                {
                    landrideId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    landrideName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rideStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rideImage = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LandRides", x => x.landrideId);
                });

            migrationBuilder.CreateTable(
                name: "Registration",
                columns: table => new
                {
                    userId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registration", x => x.userId);
                });

            migrationBuilder.CreateTable(
                name: "WaterRides",
                columns: table => new
                {
                    waterRideId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    waterRideName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rideStatus = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    rideImage = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WaterRides", x => x.waterRideId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BookingDetails");

            migrationBuilder.DropTable(
                name: "LandRides");

            migrationBuilder.DropTable(
                name: "Registration");

            migrationBuilder.DropTable(
                name: "WaterRides");
        }
    }
}
