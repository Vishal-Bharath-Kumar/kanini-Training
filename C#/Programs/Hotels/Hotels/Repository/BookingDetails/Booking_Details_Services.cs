using Hotels.Model;
using Microsoft.EntityFrameworkCore;

namespace Hotels.Repository.BookingDetails
{
    public class Booking_Details_Services : IBooking_Details_Services
    {
        public hotelDbContext _hotelDbcontext;
        public Booking_Details_Services(hotelDbContext hotelDbcontext)
        {
            _hotelDbcontext = hotelDbcontext;
        }
        public async Task<IEnumerable<Booking_Details>> GetBookingDetails()
        {
            return await _hotelDbcontext.Booking_Details.ToListAsync();
        }
        public async Task<Booking_Details>? GetBookingDetail(int id)
        {
            var book = await _hotelDbcontext.Booking_Details.FindAsync(id);
            return book;
        }
        public async Task<Booking_Details> PutBookingDetail(int id, Booking_Details booking_Details)
        {
            var item = await _hotelDbcontext.Booking_Details.FindAsync(id);

            item.Customer_Name = booking_Details.Customer_Name;
            item.CheckIn = booking_Details.CheckIn;
            item.Checkout = booking_Details.Checkout;
            await _hotelDbcontext.SaveChangesAsync();
            return booking_Details;

        }
        public async Task<List<Booking_Details>> PostBookingDetail(Booking_Details booking_Details)
        {
            await _hotelDbcontext.Booking_Details.AddAsync(booking_Details);
            await _hotelDbcontext.SaveChangesAsync();
            return await _hotelDbcontext.Booking_Details.ToListAsync();


        }
        public async Task<Booking_Details>? DeleteBookingDetail(int id)
        {
            var book = await _hotelDbcontext.Booking_Details.FindAsync(id);
            _hotelDbcontext.Booking_Details.Remove(book);
            await _hotelDbcontext.SaveChangesAsync();
            return book;

        }
    }
}
