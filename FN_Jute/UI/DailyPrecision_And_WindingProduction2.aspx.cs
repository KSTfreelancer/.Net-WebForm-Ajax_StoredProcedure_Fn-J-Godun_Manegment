using FN_Jute.BLL;
using FN_Jute.Models.ViewModels;
using FN_Jute.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace FN_Jute.UI
{
    public partial class DailyPrecision_And_WindingProduction2 : System.Web.UI.Page
    {
        public static DailyPrecision_And_WindingProduction2Manager aManager = new DailyPrecision_And_WindingProduction2Manager();
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static List<FactoryUnit> GetFactoryUnit()
        {
            return aManager.GetFactoryUnit();
        }


        //GetAllDataforFinaligProduction
        [WebMethod]
        public static ViewAllDataForProductionFinalize GetAllDataforFinaligProduction(DateTime date, int Unit)
        {
            return aManager.GetAllDataforFinaligProduction(date, Unit);
        }
        //Get Packing
        [WebMethod]
        public static List<DailyProductionItem> GetAllDataforPackingtable(DateTime date, int Unit)
        {
            return aManager.GetAllDataforPackingtable(date, Unit);
        }
        //Get Loom
        [WebMethod]
        public static List<LoomProduction> GetAllDataforLoomtable(DateTime date, int Unit)
        {
            return aManager.GetAllDataforLoomtable(date, Unit);
        }
        //Insert Summary Spinning
        [WebMethod]
        public static string SaveFinalize2(List<SpinningTwistingProductionFinalize2> aSTP, List<PrecisionProductionFinalize2> aPrecision, List<PackingFinalize2> aPackingFinalize2, List<LoomFinalize2> aLoomFinalize2, List<SummarySpinningFinalize2> aSuSpinning, List<SummaryLoomFinalize2> aSuLoom, PowerHistoryFinalize2 aPowerHistory, PowerHistoryLoomFinalize2 aPowerHistoryLoom, DateTime date, int Unit, DailyFinalize2 aDailyFinalize2)
        {
            return aManager.SaveFinalize2(aSTP, aPrecision, aPackingFinalize2, aLoomFinalize2, aSuSpinning, aSuLoom, aPowerHistory, aPowerHistoryLoom, date, Unit, aDailyFinalize2);
        }
        //Get Summary Spining
        [WebMethod]
        public static List<SummarySpinningFinalize2> GetSummarySpining(SummarySpinningFinalize2 aSummarySpinning)
        {
            return aManager.GetSummarySpining(aSummarySpinning);
        }
        //Get TblType Summary Spinning table
        [WebMethod]
        public static List<DepartmentType> GetDepartmentType(string TblType)
        {
            return aManager.GetDepartmentType(TblType);
        }
        //Get TblType Summary Loom table
        [WebMethod]
        public static List<DepartmentType> GetDepartmentTypeL(string TblType)
        {
            return aManager.GetDepartmentTypeL(TblType);
        }
        //Get Summary Loom
        [WebMethod]
        public static List<SummaryLoomFinalize2> GetSummaryLoom(SummaryLoomFinalize2 aSummaryLoom)
        {
            return aManager.GetSummaryLoom(aSummaryLoom);
        }
        //Get PowerHistory
        [WebMethod]
        public static PowerHistoryFinalize2 GetPowerHistory(PowerHistoryFinalize2 aPowerHistory)
        {
            return aManager.GetPowerHistory(aPowerHistory);
        }
        //Get PowerHistoryLoom
        [WebMethod]
        public static PowerHistoryLoomFinalize2 GetPowerHistoryLoom(PowerHistoryLoomFinalize2 aPowerHistoryLoom)
        {
            return aManager.GetPowerHistoryLoom(aPowerHistoryLoom);
        }

        //-------------------------------------------
    }
}