namespace E_com_backend.Models
{
    public class CartItem
    {
        public int CartItemId { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }
        public int Quantity { get; set; }
        public int Id { get; set; }
        public Product Product { get; set; }
    }
}
