using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace api.Models
{
    public class Pizza : IValidatableObject
    {
        public int Id { get; set; }
        [Required(ErrorMessage="You must provide a pizza name.")]
        public string Name { get; set; }
        [Required(ErrorMessage="You must provide a short description.")]
        public string ShortDescription { get; set; }
        [Required(ErrorMessage="You must provide a long description.")]
        public string LongDescription { get; set; }
        [Required(ErrorMessage="You must provide a price.")]
        public string Price { get; set; }
        public string PictureUrl { get; set; }

        public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        {
            //this is good for more complex validation. Better than making a custom annotation
            var errors = new List<ValidationResult>();

            if (!string.IsNullOrEmpty(Price)) {
                float f;
                if (!float.TryParse(Price, out f)) {
                         errors
                        .Add(new ValidationResult("Price must be a valid float", 
                        new string[] {"Price"}));
                }
            }

            return errors;
        }
    }
}