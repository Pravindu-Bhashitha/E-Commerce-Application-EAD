using E_com_backend.Data;
using E_com_backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace E_com_backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public UsersController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet("AllUsers")]

        public async Task<ActionResult<IEnumerable<Users>>> GetUsers()
        {
            return await _dataContext.Users.ToListAsync();
        }

        [HttpGet("UserName")]
        public async Task<ActionResult<Users>> GetUser(int id)
        {
            var user = await _dataContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user.First_Name);

        }

        [HttpPost("Add User")]
        public async Task<ActionResult<Users>> PostUser(Users user)
        {
            _dataContext.Users.Add(user);
            await _dataContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.User_id }, user);
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] LoginRequestModel loginRequest)
        {
            // Replace this logic with actual authentication and user validation
            if (IsValidUser(loginRequest.First_Name, loginRequest.Password))
            {
                // Return a token or any information indicating successful login
                return Ok(new { Message = "Login successful", UserName = loginRequest.First_Name });

            }
            else
            {
                return Unauthorized(new { Message = "Invalid username or password" });
            }
        }

        private bool IsValidUser(string firstName, string password)
        {
            // Replace this with actual logic to validate the user from the database
            var user = _dataContext.Users.FirstOrDefault(u => u.First_Name == firstName && u.Password == password);
            return user != null;
        }
    }
}
