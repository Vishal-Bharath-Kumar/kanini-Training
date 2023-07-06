using Hotels.Model;
using Microsoft.EntityFrameworkCore;

namespace Hotels.Repository.Hotels
{
    public class Hotels_Services : IHotels_Services
    {
        public hotelDbContext _hotelDbcontext;
       public Hotels_Services(hotelDbContext hotelDbcontext)
        {
            _hotelDbcontext= hotelDbcontext;
        }
       public async Task<IEnumerable<Hotel>> GetHotels()
        {
           return  await _hotelDbcontext.Hotels.ToListAsync();
        }
            public async Task<Hotel>? GetHotel(int id)
        {
            var hot = await _hotelDbcontext.Hotels.FindAsync(id);
            return hot;
        }
        public async Task<Hotel> PutHotel(int id, Hotel hotel)
        {
            var item = await _hotelDbcontext.Hotels.FindAsync(id);

            item.Hotel_Name = hotel.Hotel_Name;
            item.Hotel_Location = hotel.Hotel_Location;
            item.rating = hotel.rating;
            await _hotelDbcontext.SaveChangesAsync();
            return hotel;

        }
        public async Task<List<Hotel>> PostHotel(Hotel hotel)
        {
           await _hotelDbcontext.Hotels.AddAsync(hotel);
            await _hotelDbcontext.SaveChangesAsync();
            return await _hotelDbcontext.Hotels.ToListAsync() ;
                
                
        }
        public async Task<Hotel>? DeleteHotel(int id)
        {
            var hote = await _hotelDbcontext.Hotels.FindAsync(id) ;
            _hotelDbcontext.Hotels.Remove(hote);
            await _hotelDbcontext.SaveChangesAsync();
            return hote ;

        }
    }
}
