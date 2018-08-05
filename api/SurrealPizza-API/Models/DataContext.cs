using Microsoft.EntityFrameworkCore;

namespace api.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        } 

        public DbSet<Pizza> Pizzas {get; set;}

    }
}