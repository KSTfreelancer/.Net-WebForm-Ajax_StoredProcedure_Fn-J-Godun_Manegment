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
    public class DailyPrecision_And_WindingProduction2Manager
    {
        DailyPrecision_And_WindingProduction2Gateway aGateway = new DailyPrecision_And_WindingProduction2Gateway();


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
        public string SaveFinalize2(List<SpinningTwistingProductionFinalize2> aSTP, List<PrecisionProductionFinalize2> aPrecision, List<PackingFinalize2> aPackingFinalize2, List<LoomFinalize2> aLoomFinalize2, List<SummarySpinningFinalize2> aSuSpinning, List<SummaryLoomFinalize2> aSuLoom, PowerHistoryFinalize2 aPowerHistory, PowerHistoryLoomFinalize2 aPowerHistoryLoom, DateTime date, int Unit, DailyFinalize2 aDailyFinalize2)
        {
            //int msg = aGateway.SaveFinalize2(aSTP,aPackingFinalize2, aLoomFinalize2,aSuSpinning, aSuLoom, aPowerHistory, aPowerHistoryLoom);

            //int x = 0;
            //Branch_tbl branch = (Branch_tbl)HttpContext.Current.Session["operatorBranch"];
            //string newSerialString = itemSerial;
            //expenseDetailString = "",

            string STP_ProductionFinalize2String = "", Precision_ProductionFinalize2String = "", PackingFinalize2String = "", LoomFinalize2String = "", SummarySpinningFinalize2String = "", SummaryLoomFinalize2String = "", PowerHistoryFinalize2String = "", PowerHistoryLoomFinalize2String = "", pdFirst = "^#^", pdSecond = "^*^", pFirst = "^%^", DailyFinalize2String="";
            if (aSTP != null)
            {
                foreach (SpinningTwistingProductionFinalize2 aaSTP in aSTP)
                {
                    STP_ProductionFinalize2String +=
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
                if (STP_ProductionFinalize2String != "")
                {
                    STP_ProductionFinalize2String = STP_ProductionFinalize2String.Substring(0, STP_ProductionFinalize2String.Length - 3);
                }

            }

            //Precision

            if (aPrecision != null)
            {
                foreach (PrecisionProductionFinalize2 aaPrecision in aPrecision)
                {
                    Precision_ProductionFinalize2String +=
                        aaPrecision.Unit + pdSecond +
                        aaPrecision.ItemName + pdSecond +
                        aaPrecision.ShiftAMC + pdSecond +
                        aaPrecision.ShiftASize + pdSecond +
                        aaPrecision.ShiftAProduction + pdSecond +
                        aaPrecision.ShiftBMC + pdSecond +
                        aaPrecision.ShiftBSize + pdSecond +
                        aaPrecision.ShiftBProduction + pdSecond +
                        aaPrecision.ShiftCMC + pdSecond +
                        aaPrecision.ShiftCSize + pdSecond +
                        aaPrecision.ShiftCProduction + pdSecond +
                        aaPrecision.TotalProductionKg + pdSecond +
                        aaPrecision.TotalMC + pdSecond +
                        aaPrecision.AverageSize + pdSecond +
                        aaPrecision.Remarks + pdSecond +
                        aaPrecision.DDate + pdFirst;

                }
                if (Precision_ProductionFinalize2String != "")
                {
                    Precision_ProductionFinalize2String = Precision_ProductionFinalize2String.Substring(0, Precision_ProductionFinalize2String.Length - 3);
                }

            }
            //--PackingFinalize2------------------------------------------------------------------------------------------

            if (aPackingFinalize2 != null)
            {
                foreach (PackingFinalize2 aDetailes in aPackingFinalize2)
                {
                    PackingFinalize2String +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Item + pdSecond +
                        aDetailes.McA + pdSecond +
                        aDetailes.ProductionA + pdSecond +
                        aDetailes.McB + pdSecond +
                        aDetailes.ProductionB + pdSecond +
                        aDetailes.EntryDate + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (PackingFinalize2String != "")
                {
                    PackingFinalize2String = PackingFinalize2String.Substring(0, PackingFinalize2String.Length - 3);
                }

            }
            //--LoomFinalize2String------------------------------------------------------------------------------------------
            if (aLoomFinalize2 != null)
            {
                foreach (LoomFinalize2 aDetailes in aLoomFinalize2)
                {
                    LoomFinalize2String +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Yearn + pdSecond +
                        aDetailes.Item + pdSecond +
                        aDetailes.Weight + pdSecond +
                        aDetailes.QtyPcs + pdSecond +
                        aDetailes.EntryDate + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (LoomFinalize2String != "")
                {
                    LoomFinalize2String = LoomFinalize2String.Substring(0, LoomFinalize2String.Length - 3);
                }

            }
            //--SummarySpinningFinalize2String------------------------------------------------------------------------------------------
            if (aSuSpinning != null)
            {
                foreach (SummarySpinningFinalize2 aDetailes in aSuSpinning)
                {
                    SummarySpinningFinalize2String +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Section + pdSecond +
                        aDetailes.A_Hands + pdSecond +
                        aDetailes.B_Hands + pdSecond +
                        aDetailes.C_Hands + pdSecond +
                        aDetailes.Total_ABC_Hands + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (SummarySpinningFinalize2String != "")
                {
                    SummarySpinningFinalize2String = SummarySpinningFinalize2String.Substring(0, SummarySpinningFinalize2String.Length - 3);
                }
            }
            //--SummaryLoomFinalize2------------------------------------------------------------------------------------------
            
                 if (aSuLoom != null)
            {
                    foreach (SummaryLoomFinalize2 aDetailes in aSuLoom)
                {
                    SummaryLoomFinalize2String +=
                        aDetailes.Unit + pdSecond +
                        aDetailes.Section + pdSecond +
                        aDetailes.A_Hands + pdSecond +
                        aDetailes.B_Hands + pdSecond +
                        aDetailes.C_Hands + pdSecond +
                        aDetailes.Total_ABC_Hands + pdSecond +
                        aDetailes.DDate + pdFirst;

                }
                if (SummaryLoomFinalize2String != "")
                {
                    SummaryLoomFinalize2String = SummaryLoomFinalize2String.Substring(0, SummaryLoomFinalize2String.Length - 3);
                }
            }

            //--PowerHistoryFinalize2------------------------------------------------------------------------------------------

               if (aPowerHistory != null)
            {
                PowerHistoryFinalize2String =
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
            //--PowerHistoryLoomFinalize2------------------------------------------------------------------------------------------

              if (aPowerHistoryLoom != null)
            {
                PowerHistoryLoomFinalize2String =
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

            //--DailyFinalize2------------------------------------------------------------------------------------------

            if (aDailyFinalize2 != null)
            {
                DailyFinalize2String =
                    aDailyFinalize2.Unit + pFirst +
                    aDailyFinalize2.TotalSP + pFirst +
                    aDailyFinalize2.TotalTW + pFirst +
                    aDailyFinalize2.TotalPR + pFirst +
                    aDailyFinalize2.TotalPK + pFirst +
                    aDailyFinalize2.TotalLM + pFirst +
                    aDailyFinalize2.TotalHandPerTon + pFirst +
                    aDailyFinalize2.TotalBagPerPerson + pFirst +
                    aDailyFinalize2.EntryDate + pFirst +
                    aDailyFinalize2.DDate + pFirst;
                    

            }
            string result = aGateway.SaveFinalize2(STP_ProductionFinalize2String, Precision_ProductionFinalize2String, PackingFinalize2String, LoomFinalize2String,SummarySpinningFinalize2String,SummaryLoomFinalize2String,PowerHistoryFinalize2String, PowerHistoryLoomFinalize2String,pdFirst, pdSecond,pFirst, date, Unit, DailyFinalize2String);
            return result;
        }
        //Get Summary Spining
        public List<SummarySpinningFinalize2> GetSummarySpining(SummarySpinningFinalize2 aSummarySpinning)
        {
            return aGateway.GetSummarySpining(aSummarySpinning);
        }
        //Get Summary Loom
        public List<SummaryLoomFinalize2> GetSummaryLoom(SummaryLoomFinalize2 aSummaryLoom)
        {
            return aGateway.GetSummaryLoom(aSummaryLoom);
        }
        //Get PowerHistory
        public PowerHistoryFinalize2 GetPowerHistory(PowerHistoryFinalize2 aPowerHistory)
        {
            return aGateway.GetPowerHistory(aPowerHistory);
        }
        //Get PowerHistoryLoom
        public PowerHistoryLoomFinalize2 GetPowerHistoryLoom(PowerHistoryLoomFinalize2 aPowerHistoryLoom)
        {
            return aGateway.GetPowerHistoryLoom(aPowerHistoryLoom);
        }

        //-------------------------------------------
    }
}