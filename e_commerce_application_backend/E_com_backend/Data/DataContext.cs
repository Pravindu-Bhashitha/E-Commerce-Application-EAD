using E_com_backend.Models;
using Microsoft.EntityFrameworkCore;

namespace E_com_backend.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Users> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Explicitly define the primary key for Users
            modelBuilder.Entity<Users>().HasKey(u => u.User_id);

            // Other configurations...

            base.OnModelCreating(modelBuilder);
        }
    }
}
