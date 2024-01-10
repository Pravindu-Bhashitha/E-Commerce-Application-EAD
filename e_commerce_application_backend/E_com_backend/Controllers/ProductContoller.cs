using E_com_backend.Data;
using E_com_backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http.HttpResults;

namespace E_com_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductContoller : ControllerBase
    {
        private readonly DataContext _dataContext;

        public ProductContoller(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet("AllProductDetails")]

        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _dataContext.Products.ToListAsync();

        }

        private List<CartItem> ShoppingCart = new List<CartItem>();

        [HttpPost("AddToCart/{productId}")]
        public ActionResult AddToCart(int productId)
        {
            var product = _dataContext.Products.Find(productId);

            if (product == null)
            {
                return NotFound("Product not found");
            }

            var cartItem = new CartItem
            {
                CartItemId = product.Id,
                Name = product.Name,
                Price = product.Price,
                Quantity = 1,// You can adjust this based on user input
                
            };
            ShoppingCart.Add(cartItem);

            return Ok(cartItem);
        }

        [HttpGet("GetCart")]
        public ActionResult<IEnumerable<CartItem>> GetCart()
        {
            return Ok(ShoppingCart);
        }
    }
}
