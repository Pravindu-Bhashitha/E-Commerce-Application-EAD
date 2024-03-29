﻿namespace E_com_backend.Models
{
    public class Product
    {
        public int Id { get; set; }
        public double Price { get; set; }   
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public string Category { get; set; }
        public int Quantity { get; set; }  // New property
        public ICollection<CartItem> CartItems { get; set; }
    }
}
