using FN_Jute.DAL;
using FN_Jute.Models;
using FN_Jute.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FN_Jute.BLL
{
    public class ProductionsFinalizeManager
    {
        ProductionsFinalizeGateway aGateway = new ProductionsFinalizeGateway();

        ////FactoryUnit
        public List<FactoryUnit> GetFactoryUnit()
        {
            return aGateway.GetFactoryUnit();
        }

        //DateTime date
        public ViewAllDataForProductionFinalize GetAllDataforFinaligProduction(DateTime date, int Unit)
        { 
            return aGateway.GetAllDataforFinaligProduction(date, Unit);
        }
        //Packing
        public List<DailyProductionItem> GetAllDataforPackingtable(DateTime date, int Unit)
        {
            return aGateway.GetAllDataforPackingtable(date, Unit);
        }
        //Loom
        public List<LoomProduction> GetAllDataforLoomtable(DateTime date, int Unit)
        {
            return aGateway.GetAllDataforLoomtable(date, Unit);
        }

        //GetTblTypeSummarySpinningtable
        public List<DepartmentType> GetDepartmentType( string TblType)
        {
            return aGateway.GetDepartmentType(TblType);
        }
        //Get TblType Summary Loom table
        public List<DepartmentType> GetDepartmentTypeL(string TblType)
        {
            return aGateway.GetDepartmentTypeL(TblType);
        }
        //Insert Summary Spinning
        public string SaveFinalize(List<SpinningTwistingPrecisionProductionFinalize> aSTP, List<PackingFinalize> aPackingFinalize, List<LoomFinalize> aLoomFinalize, List<SummarySpinningFinalize> aSuSpinning, List<SummaryLoomFinalize> aSuLoom, PowerHistoryFinalize aPowerHistory, PowerHistoryLoomFinalize aPowerHistoryLoom, DateTime date, int Unit, DailyFinalize aDailyFinalize)
        {
            //int msg = aGateway.SaveFinalize(aSTP,aPackingFinalize, aLoomFinalize,aSuSpinning, aSuLoom, aPowerHistory, aPowerHistoryLoom);

            //int x = 0;
            //Branch_tbl branch = (Branch_tbl)HttpContext.Current.Session["operatorBranch"];
            //string newSerialString = itemSerial;
            //expenseDetailString = "",

            string STP_ProductionFinalizeString = "", PackingFinalizeString = "", LoomFinalizeString = "", SummarySpinningFinalizeString = "", SummaryLoomFinalizeString = "", PowerHistoryFinalizeString = "", PowerHistoryLoomFinalizeString = "", pdFirst = "^#^", pdSecond = "^*^", pFirst = "^%^", DailyFinalizeString="";
            if (aSTP != null)
            {
                foreach (SpinningTwistingPrecisionProductionFinalize aaSTP in aSTP)
                {
                    STP_ProductionFinalizeString +=
                        aaSTP.Unit + pdSecond +
                        aaSTP.SLNo + pdSecond +
                        aaSTP.TType + pdSecond +
                        aaSTP.ItemName + pdSecond +
                        aaSTP.ExpType +  pdSecond +
                        aaSTP.MachineRPM + pdSecond +
                        aaSTP.MachineTPI + pdSecond +
                        aaSTP.ShiftAHours + pdSecond +
                        aaSTP.ShiftAMC + pdSecond +
                        aaSTP.ShiftASpandle + pdSecond +
                        aaSTP.ShiftAProduction + pdSecond +
                        aaSTP.ShiftBHours + pdSecond +
                        aaSTP.ShiftBMC + pdSecond +
                        aaSTP.ShiftBSpandle + pdSecond +
                        aaSTP.ShiftBProduction + pdSecond +
                        aaSTP.ShiftCHours + pdSecond +
                        aaSTP.ShiftCMC + pdSecond +
                        aaSTP.ShiftCSpandle + pdSecond +
                        aaSTP.ShiftCProduction + pdSecond +
                        aaSTP.TotalProductionKg + pdSecond +
                        aaSTP.TargetEfficiencyPercent + pdSecond +
                        aaSTP.TargetEfficiency + pdSecond +
                        aaSTP.EfficiencyAchievedPercent + pdSecond +
                        aaSTP.HundredPercentEfficiencyProduction + pdSecond +
                        aaSTP.EntryDateTime + pdSecond +
                        aaSTP.DDate + pdFirst;

                }
                if (STP_ProductionFinalizeString != "")
                {
                    STP_ProductionFinalizeString = STP_ProductionFinalizeString.Substring(0, STP_ProductionFinalizeString.Length - 3);
                }

            }
            //--PackingFinalize------------------------------------------------------------------------------------------

            if (aPackingFinalize != null)
            {
                foreach (PackingFinalize aDetailes in aPackingFinalize)
                {
                    PackingFinalizeString +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Item + pdSecond +
                        aDetailes.McA + pdSecond +
                        aDetailes.ProductionA + pdSecond +
                        aDetailes.McB + pdSecond +
                        aDetailes.ProductionB + pdSecond +
                        aDetailes.EntryDate + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (PackingFinalizeString != "")
                {
                    PackingFinalizeString = PackingFinalizeString.Substring(0, PackingFinalizeString.Length - 3);
                }

            }
            //--LoomFinalizeString------------------------------------------------------------------------------------------
            if (aLoomFinalize != null)
            {
                foreach (LoomFinalize aDetailes in aLoomFinalize)
                {
                    LoomFinalizeString +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Yearn + pdSecond +
                        aDetailes.Item + pdSecond +
                        aDetailes.Weight + pdSecond +
                        aDetailes.QtyPcs + pdSecond +
                        aDetailes.EntryDate + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (LoomFinalizeString != "")
                {
                    LoomFinalizeString = LoomFinalizeString.Substring(0, LoomFinalizeString.Length - 3);
                }

            }
            //--SummarySpinningFinalizeString------------------------------------------------------------------------------------------
            if (aSuSpinning != null)
            {
                foreach (SummarySpinningFinalize aDetailes in aSuSpinning)
                {
                    SummarySpinningFinalizeString +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Section + pdSecond +
                        aDetailes.A_Hands + pdSecond +
                        aDetailes.B_Hands + pdSecond +
                        aDetailes.C_Hands + pdSecond +
                        aDetailes.Total_ABC_Hands + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (SummarySpinningFinalizeString != "")
                {
                    SummarySpinningFinalizeString = SummarySpinningFinalizeString.Substring(0, SummarySpinningFinalizeString.Length - 3);
                }
            }
            //--SummaryLoomFinalize------------------------------------------------------------------------------------------
            
                 if (aSuLoom != null)
            {
                    foreach (SummaryLoomFinalize aDetailes in aSuLoom)
                {
                    SummaryLoomFinalizeString +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Section + pdSecond +
                        aDetailes.A_Hands + pdSecond +
                        aDetailes.B_Hands + pdSecond +
                        aDetailes.C_Hands + pdSecond +
                        aDetailes.Total_ABC_Hands + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (SummaryLoomFinalizeString != "")
                {
                    SummaryLoomFinalizeString = SummaryLoomFinalizeString.Substring(0, SummaryLoomFinalizeString.Length - 3);
                }
            }

            //--PowerHistoryFinalize------------------------------------------------------------------------------------------

               if (aPowerHistory != null)
            {
                PowerHistoryFinalizeString =
                    aPowerHistory.Unit + pFirst +
                    aPowerHistory.AshiftPowerLoseT + pFirst +
                    aPowerHistory.AshiftPowerFailm + pFirst +
                    aPowerHistory.AshiftGRunning + pFirst +
                    aPowerHistory.BshiftPowerLoseT + pFirst +
                    aPowerHistory.BshiftPowerFailm + pFirst +
                    aPowerHistory.BshiftGRunning + pFirst +
                    aPowerHistory.CshiftPowerLoseT + pFirst +
                    aPowerHistory.CshiftPowerFailm + pFirst +
                    aPowerHistory.CshiftGRunning + pFirst +
                    aPowerHistory.EntryDate + pFirst +
                    aPowerHistory.DDate + pFirst +
                    aPowerHistory.ABCTotalPowerLoseT + pFirst +
                    aPowerHistory.ABCTotalPowerFailm + pFirst +
                    aPowerHistory.ABCTotalGRunning + pFirst;

            }
            //--PowerHistoryLoomFinalize------------------------------------------------------------------------------------------

              if (aPowerHistoryLoom != null)
            {
                PowerHistoryLoomFinalizeString =
                    aPowerHistoryLoom.Unit + pFirst +
                    aPowerHistoryLoom.AshiftPowerLoseT + pFirst +
                    aPowerHistoryLoom.AshiftPowerFailm + pFirst +
                    aPowerHistoryLoom.AshiftGRunning + pFirst +
                    aPowerHistoryLoom.BshiftPowerLoseT + pFirst +
                    aPowerHistoryLoom.BshiftPowerFailm + pFirst +
                    aPowerHistoryLoom.BshiftGRunning + pFirst +
                    aPowerHistoryLoom.CshiftPowerLoseT + pFirst +
                    aPowerHistoryLoom.CshiftPowerFailm + pFirst +
                    aPowerHistoryLoom.CshiftGRunning + pFirst +
                    aPowerHistoryLoom.EntryDate + pFirst +
                    aPowerHistoryLoom.DDate + pFirst +
                    aPowerHistoryLoom.ABCTotalPowerLoseT + pFirst +
                    aPowerHistoryLoom.ABCTotalPowerFailm + pFirst +
                    aPowerHistoryLoom.ABCTotalGRunning + pFirst;

            }

            //--DailyFinalize------------------------------------------------------------------------------------------

            if (aDailyFinalize != null)
            {
                DailyFinalizeString =
                    aDailyFinalize.Unit + pFirst +
                    aDailyFinalize.TotalSP + pFirst +
                    aDailyFinalize.TotalTW + pFirst +
                    aDailyFinalize.TotalPR + pFirst +
                    aDailyFinalize.TotalPK + pFirst +
                    aDailyFinalize.TotalLM + pFirst +
                    aDailyFinalize.TotalHandPerTon + pFirst +
                    aDailyFinalize.TotalBagPerPerson + pFirst +
                    aDailyFinalize.EntryDate + pFirst +
                    aDailyFinalize.DDate + pFirst;
                    

            }
            string result = aGateway.SaveFinalize(STP_ProductionFinalizeString,PackingFinalizeString,LoomFinalizeString,SummarySpinningFinalizeString,SummaryLoomFinalizeString,PowerHistoryFinalizeString, PowerHistoryLoomFinalizeString,pdFirst, pdSecond,pFirst, date, Unit, DailyFinalizeString);
            return result;
        }
        //Get Summary Spining
        public List<SummarySpinningFinalize> GetSummarySpining(SummarySpinningFinalize aSummarySpinning)
        {
            return aGateway.GetSummarySpining(aSummarySpinning);
        }
        //Get Summary Loom
        public List<SummaryLoomFinalize> GetSummaryLoom(SummaryLoomFinalize aSummaryLoom)
        {
            return aGateway.GetSummaryLoom(aSummaryLoom);
        }
        //Get PowerHistory
        public PowerHistoryFinalize GetPowerHistory(PowerHistoryFinalize aPowerHistory)
        {
            return aGateway.GetPowerHistory(aPowerHistory);
        }
        //Get PowerHistoryLoom
        public PowerHistoryLoomFinalize GetPowerHistoryLoom(PowerHistoryLoomFinalize aPowerHistoryLoom)
        {
            return aGateway.GetPowerHistoryLoom(aPowerHistoryLoom);
        }

        //-------------------------------------------
    }
}