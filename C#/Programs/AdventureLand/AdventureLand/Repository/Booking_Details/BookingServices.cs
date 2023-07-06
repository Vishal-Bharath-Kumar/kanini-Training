using AdventureLand.Models;
using Microsoft.EntityFrameworkCore;

namespace AdventureLand.Repository.Booking_Details
{
    public class BookingServices : IBookingServices
    {
        public AdventureLandDbContext _adventureLandDbcontext;
        public BookingServices(AdventureLandDbContext adventureLandDbcontext)
        {
            _adventureLandDbcontext = adventureLandDbcontext;
        }
        public async Task<IEnumerable<BookingDetails>> GetBookingDetails()
        {
            return await _adventureLandDbcontext.BookingDetails.ToListAsync();
        }
        public async Task<BookingDetails>? GetBookingDetail(int id)
        {
            var book = await _adventureLandDbcontext.BookingDetails.FindAsync(id);
            return book;
        }
        public async Task<BookingDetails> PutBookingDetail(int id, BookingDetails bookingDetails)
        {
            var item = await _adventureLandDbcontext.BookingDetails.FindAsync(id);

            item.userName = bookingDetails.userName;
            item.emailId = bookingDetails.emailId;
            item.bookingId = bookingDetails.bookingId;
            item.price = bookingDetails.price;
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }

            return bookingDetails;

        }
        public async Task<List<BookingDetails>> PostBookingDetail(BookingDetails bookingDetails)
        {
            await _adventureLandDbcontext.BookingDetails.AddAsync(bookingDetails);
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return await _adventureLandDbcontext.BookingDetails.ToListAsync();


        }
        public async Task<BookingDetails>? DeleteBookingDetail(int id)
        {
            var book = await _adventureLandDbcontext.BookingDetails.FindAsync(id);
            _adventureLandDbcontext.BookingDetails.Remove(book);
            try
            {
                await _adventureLandDbcontext.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
            return book;

        }
    }
}
