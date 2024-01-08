using E_com_backend.Data;
using E_com_backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
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
    }
}
