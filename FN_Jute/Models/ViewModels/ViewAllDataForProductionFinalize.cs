using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FN_Jute.Models.ViewModels
{
    public class ViewAllDataForProductionFinalize
    {
        public List<DailyPrecisionWindingProduction> DailyPrecisionWindingProductionsList { get; set; }
        public List<DailyPrecisionWindingProduction2> DailyPrecisionWindingProductionsList2 { get; set; }
        public List<DailySpinningWindingProduction> DailySpinningWindingProductionList { get; set; }
        public List<DailyTwistingProduction> DailyTwistingProductionList { get; set; }

        public ViewAllDataForProductionFinalize()
        {
            DailyPrecisionWindingProductionsList = new List<DailyPrecisionWindingProduction>();
            DailyPrecisionWindingProductionsList2 = new List<DailyPrecisionWindingProduction2>();
            DailySpinningWindingProductionList = new List<DailySpinningWindingProduction>();
            DailyTwistingProductionList = new List<DailyTwistingProduction>();
        }
    }
    
}