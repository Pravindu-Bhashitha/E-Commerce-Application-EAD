using E_com_backend.Data;
using E_com_backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;


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

        [HttpGet("UserDetails")]
        public async Task<ActionResult<Users>> GetUserDetails(int id)
        {
            var user = await _dataContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }
            var userDetails = new
            {
                FirstName = user.First_Name,
                LastName = user.Last_Name,
                Email = user.Email,
                PhoneNumber = user.Phone_Number
            };
            return Ok(userDetails);
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
            var user = GetUser(loginRequest.First_Name, loginRequest.Password);

            if (user != null)
            {
                // Return user details or a token indicating successful login
                return Ok(new { Message = "Login successful", UserName = loginRequest.First_Name, UserId = user.User_id });
            }
            else
            {
                return Unauthorized(new { Message = "Invalid username or password" });
            }
        }

        private Users GetUser(string firstName, string password)
        {
            // Replace this with actual logic to validate the user from the database
            var user = _dataContext.Users.FirstOrDefault(u => u.First_Name == firstName && u.Password == password);
            return user;
        }


        [HttpGet("UserProfile")]
        [Authorize]
        public async Task<ActionResult<Users>> GetUserProfile()
        {
            // Retrieve user details from the authentication cookie
            var userIdClaim = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (userIdClaim == null)
            {
                return Unauthorized("User not authenticated");
            }

            // Fetch user details from the database
            var user = await _dataContext.Users.FindAsync(int.Parse(userIdClaim));

            if (user == null)
            {
                return NotFound("User not found");
            }

            return Ok(user);
        }

    }
}
