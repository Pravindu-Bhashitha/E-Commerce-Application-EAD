using System.ComponentModel.DataAnnotations;

namespace E_com_backend.Models
{
    public class Users
    {
        public int User_id { get; set; }
        public string First_Name { get; set; }
        public string Last_Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Phone_Number { get; set; }

    }
}