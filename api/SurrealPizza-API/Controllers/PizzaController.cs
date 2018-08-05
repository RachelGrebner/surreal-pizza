using System.Threading.Tasks;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class PizzaController : Controller
    {
        private DataContext _context;
        public PizzaController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetPizzas() 
        {
            var pizzas = await _context.Pizzas.AsNoTracking().ToListAsync();
            return Ok(pizzas);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPizza(int id) 
        {
            var pizza = await _context.Pizzas.AsNoTracking().SingleOrDefaultAsync(p => p.Id == id);

            if (pizza == null) 
            {
                return NotFound();
            }
            return Ok(pizza);
        }

         [HttpPost]
        public async Task<IActionResult> PostPizza([FromBody] Pizza pizza)
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }

            _context.Pizzas.Add(pizza);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetPizza), new { id = pizza.Id }, pizza);
        }

        [HttpPut]
        public async Task<IActionResult> PutPizza([FromBody] Pizza pizza) 
        {
            if (!ModelState.IsValid) 
            {
                return BadRequest(ModelState);
            }

            var dbPizza = await _context.Pizzas.SingleOrDefaultAsync(p => p.Id == pizza.Id);

            if (dbPizza == null) {
                return NotFound();
            }

            dbPizza.Name = pizza.Name;
            dbPizza.ShortDescription = pizza.ShortDescription;
            dbPizza.LongDescription = pizza.LongDescription;
            dbPizza.Price = pizza.Price;
            dbPizza.PictureUrl = pizza.PictureUrl;

            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}