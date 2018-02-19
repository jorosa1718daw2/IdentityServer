using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SMECService.ViewModels
{
    [JsonObject(MemberSerialization.OptOut)]
    public class CalibrationFuncionsViewModel
    {
        #region Constructor
        public CalibrationFuncionsViewModel()
        {

        }
        #endregion

        #region Properties
        public double a { get; set; }
        public double b { get; set; }
        public int SensorId { get; set; }
        public DateTime Date { get; set; }
        #endregion

    }

}
