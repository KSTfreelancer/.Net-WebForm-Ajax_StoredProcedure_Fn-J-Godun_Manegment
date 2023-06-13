using FN_Jute.BLL;
using FN_Jute.DAL;
using FN_Jute.Models;
using FN_Jute.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web;
using System.Web.Services;
using System.Web.UI;
using System.Web.UI.WebControls;


namespace FN_Jute.UI
{
    public partial class Fn_Jute : System.Web.UI.Page
    {
        public static ProductionsFinalizeManager aManager = new ProductionsFinalizeManager();
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        [WebMethod]
        public static List<FactoryUnit> GetFactoryUnit()
        {
            return aManager.GetFactoryUnit();
        }
        //ViewAllDataForProductionFinalize
        [WebMethod]
        public static ViewAllDataForProductionFinalize GetAllDataforFinaligProduction(DateTime date ,int Unit)
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
            return aManager.GetAllDataforLoomtable(date,Unit);
        }
        //Insert Summary Spinning
        [WebMethod]
        public static string SaveFinalize(List<SpinningTwistingPrecisionProductionFinalize> aSTP,List<PackingFinalize> aPackingFinalize,List<LoomFinalize> aLoomFinalize, List<SummarySpinningFinalize> aSuSpinning, List<SummaryLoomFinalize> aSuLoom, PowerHistoryFinalize aPowerHistory, PowerHistoryLoomFinalize aPowerHistoryLoom, DateTime date, int Unit, DailyFinalize aDailyFinalize)
        {
            return aManager.SaveFinalize(aSTP,aPackingFinalize, aLoomFinalize, aSuSpinning, aSuLoom, aPowerHistory, aPowerHistoryLoom,date,Unit, aDailyFinalize);
        }
        //Get Summary Spining
        [WebMethod]
        public static List<SummarySpinningFinalize> GetSummarySpining(SummarySpinningFinalize aSummarySpinning)
        {
            return aManager.GetSummarySpining(aSummarySpinning);
        }
        //Get TblType Summary Spinning table
        [WebMethod]
        public static List<DepartmentType> GetDepartmentType(string TblType)
        {
            return aManager.GetDepartmentType( TblType);
        }
        //Get TblType Summary Loom table
        [WebMethod]
        public static List<DepartmentType> GetDepartmentTypeL(string TblType)
        {
            return aManager.GetDepartmentTypeL(TblType);
        }
        //Get Summary Loom
        [WebMethod]
        public static List<SummaryLoomFinalize> GetSummaryLoom(SummaryLoomFinalize aSummaryLoom)
        {
            return aManager.GetSummaryLoom(aSummaryLoom);
        }
        //Get PowerHistory
        [WebMethod]
        public static PowerHistoryFinalize GetPowerHistory(PowerHistoryFinalize aPowerHistory)
        {
            return aManager.GetPowerHistory(aPowerHistory);
        }
        //Get PowerHistoryLoom
        [WebMethod]
        public static PowerHistoryLoomFinalize GetPowerHistoryLoom(PowerHistoryLoomFinalize aPowerHistoryLoom)
        {
            return aManager.GetPowerHistoryLoom(aPowerHistoryLoom);
        }

        //-------------------------------------------
    }
}