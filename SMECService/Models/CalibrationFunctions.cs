using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace SMECService.Models
{
    [Table("CalibrationFunctions")]
    public class CalibrationFunctions
    {
        public int CalibrationFunctionsId { get; set; }
        public double a { get; set; }
        public double b { get; set; }
        public int SensorId { get; set;}
        public DateTime Date { get; set;}



     
    }
}
