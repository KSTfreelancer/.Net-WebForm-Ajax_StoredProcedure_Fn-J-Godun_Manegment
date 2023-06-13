using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Web;
using FN_Jute.Connection;
using FN_Jute.Models;
using FN_Jute.Models.ViewModels;
using System.Web.UI.WebControls;

namespace FN_Jute.DAL
{
    public class ProductionsFinalizeGateway:ConnectionGateway
    {

        //GetFactoryUnit
        public List<FactoryUnit> GetFactoryUnit()
        {
            List<FactoryUnit> AllFactoryUnit = new List<FactoryUnit>();
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }
            try
            {
                Query = @"select * from FactoryUnit";
                Command = new SqlCommand(Query, Connection);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    FactoryUnit aFactoryUnit = new FactoryUnit();
                    aFactoryUnit.Id = (long)Reader["Id"];
                    aFactoryUnit.FactoryUnitName = (string)Reader["FactoryUnitName"];

                    AllFactoryUnit.Add(aFactoryUnit);
                }
            }
            catch
            {

            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return AllFactoryUnit;

        }
        //GetAllDataforFinaligProduction
        public ViewAllDataForProductionFinalize GetAllDataforFinaligProduction(DateTime date, int Unit)
        {
            ViewAllDataForProductionFinalize AllData = new ViewAllDataForProductionFinalize();
            //Connection.Close();
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"select * From DailyPrecisionWindingProduction where convert(date,PrDate )= @PrecisionData and Unit = @Unit; select * From DailySpinningWindingProduction where convert(date,PrDate )= @SpinnigDate and Unit = @Unit; select * From DailyTwistingProduction where convert(date,PrDate )= @TwistingDate and Unit = @Unit";
                
                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@PrecisionData", date);
                Command.Parameters.AddWithValue("@SpinnigDate", date);
                Command.Parameters.AddWithValue("@TwistingDate", date);
                Command.Parameters.AddWithValue("@Unit", Unit);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    DailyPrecisionWindingProduction aPrecisionProduction = new DailyPrecisionWindingProduction();

                    aPrecisionProduction.ItemName = Reader["ItemName"].ToString();
                    aPrecisionProduction.ExpType = Reader["ExpType"].ToString();
                    aPrecisionProduction.MachineRPM = (double?)Reader["MachineRPM"];
                    aPrecisionProduction.MachineTPI = (double?)Reader["MachineTPI"];
                    aPrecisionProduction.ShiftAHours = (double?)Reader["ShiftAHours"];
                    aPrecisionProduction.ShiftAMC = (double?)Reader["ShiftAMC"];
                    aPrecisionProduction.ShiftASpandle = (double?)Reader["ShiftASpandle"];
                    aPrecisionProduction.ShiftAProduction = (double?)Reader["ShiftAProduction"];

                    aPrecisionProduction.ShiftBHours = (double?)Reader["ShiftBHours"];
                    aPrecisionProduction.ShiftBMC = (double?)Reader["ShiftBMC"];
                    aPrecisionProduction.ShiftBSpandle = (double?)Reader["ShiftBSpandle"];
                    aPrecisionProduction.ShiftBProduction = (double?)Reader["ShiftBProduction"];

                    aPrecisionProduction.ShiftCHours = (double?)Reader["ShiftCHours"];
                    aPrecisionProduction.ShiftCMC = (double?)Reader["ShiftCMC"];
                    aPrecisionProduction.ShiftCSpandle = (double?)Reader["ShiftCSpandle"];
                    aPrecisionProduction.ShiftCProduction = (double?)Reader["ShiftCProduction"];

                    aPrecisionProduction.TotalProductionKg = (double?)Reader["TotalProductionKg"];
                    aPrecisionProduction.TargetEfficiencyPercent = (double?)Reader["TargetEfficiencyPercent"];
                    aPrecisionProduction.TargetEfficiency = (double?)Reader["TargetEfficiency"];
                    aPrecisionProduction.EfficiencyAchievedPercent = (double?)Reader["EfficiencyAchievedPercent"];
                    aPrecisionProduction.HundredPercentEfficiencyProduction = (double?)Reader["HundredPercentEfficiencyProduction"];

                    AllData.DailyPrecisionWindingProductionsList.Add(aPrecisionProduction);

                }
                Reader.NextResult();
                while (Reader.Read())
                {
                    DailySpinningWindingProduction aSpinningProduction = new DailySpinningWindingProduction();
                    aSpinningProduction.ItemName = Reader["ItemName"].ToString();
                    aSpinningProduction.ExpType = Reader["ExpType"].ToString();
                    aSpinningProduction.MachineRPM = (double?)Reader["MachineRPM"];
                    aSpinningProduction.MachineTPI = (double?)Reader["MachineTPI"];
                    aSpinningProduction.ShiftAHours = (double?)Reader["ShiftAHours"];
                    aSpinningProduction.ShiftAMC = (double?)Reader["ShiftAMC"];
                    aSpinningProduction.ShiftASpandle = (double?)Reader["ShiftASpandle"];
                    aSpinningProduction.ShiftAProduction = (double?)Reader["ShiftAProduction"];

                    aSpinningProduction.ShiftBHours = (double?)Reader["ShiftBHours"];
                    aSpinningProduction.ShiftBMC = (double?)Reader["ShiftBMC"];
                    aSpinningProduction.ShiftBSpandle = (double?)Reader["ShiftBSpandle"];
                    aSpinningProduction.ShiftBProduction = (double?)Reader["ShiftBProduction"];

                    aSpinningProduction.ShiftCHours = (double?)Reader["ShiftCHours"];
                    aSpinningProduction.ShiftCMC = (double?)Reader["ShiftCMC"];
                    aSpinningProduction.ShiftCSpandle = (double?)Reader["ShiftCSpandle"];
                    aSpinningProduction.ShiftCProduction = (double?)Reader["ShiftCProduction"];

                    aSpinningProduction.TotalProductionKg = (double?)Reader["TotalProductionKg"];
                    aSpinningProduction.TargetEfficiencyPercent = (double?)Reader["TargetEfficiencyPercent"];
                    aSpinningProduction.TargetEfficiency = (double?)Reader["TargetEfficiency"];
                    aSpinningProduction.EfficiencyAchievedPercent = (double?)Reader["EfficiencyAchievedPercent"];
                    aSpinningProduction.HundredPercentEfficiencyProduction = (double?)Reader["HundredPercentEfficiencyProduction"];

                    AllData.DailySpinningWindingProductionList.Add(aSpinningProduction);
                }
                Reader.NextResult();
                while (Reader.Read())
                {
                    DailyTwistingProduction aTwistingProduction = new DailyTwistingProduction();
                    aTwistingProduction.ItemName = Reader["ItemName"].ToString();
                    aTwistingProduction.ExpType = Reader["ExpType"].ToString();
                    aTwistingProduction.MachineRPM = (double?)Reader["MachineRPM"];
                    aTwistingProduction.MachineTPI = (double?)Reader["MachineTPI"];
                    aTwistingProduction.ShiftAHours = (double?)Reader["ShiftAHours"];
                    aTwistingProduction.ShiftAMC = (double?)Reader["ShiftAMC"];
                    aTwistingProduction.ShiftASpandle = (double?)Reader["ShiftASpandle"];
                    aTwistingProduction.ShiftAProduction = (double?)Reader["ShiftAProduction"];

                    aTwistingProduction.ShiftBHours = (double?)Reader["ShiftBHours"];
                    aTwistingProduction.ShiftBMC = (double?)Reader["ShiftBMC"];
                    aTwistingProduction.ShiftBSpandle = (double?)Reader["ShiftBSpandle"];
                    aTwistingProduction.ShiftBProduction = (double?)Reader["ShiftBProduction"];

                    aTwistingProduction.ShiftCHours = (double?)Reader["ShiftCHours"];
                    aTwistingProduction.ShiftCMC = (double?)Reader["ShiftCMC"];
                    aTwistingProduction.ShiftCSpandle = (double?)Reader["ShiftCSpandle"];
                    aTwistingProduction.ShiftCProduction = (double?)Reader["ShiftCProduction"];

                    aTwistingProduction.TotalProductionKg = (double?)Reader["TotalProductionKg"];
                    aTwistingProduction.TargetEfficiencyPercent = (double?)Reader["TargetEfficiencyPercent"];
                    aTwistingProduction.TargetEfficiency = (double?)Reader["TargetEfficiency"];
                    aTwistingProduction.EfficiencyAchievedPercent = (double?)Reader["EfficiencyAchievedPercent"];
                    aTwistingProduction.HundredPercentEfficiencyProduction = (double?)Reader["HundredPercentEfficiencyProduction"];

                    AllData.DailyTwistingProductionList.Add(aTwistingProduction);
                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            
            return AllData;

        }
        //Get Packing
        public List<DailyProductionItem> GetAllDataforPackingtable(DateTime date, int Unit)
        {
            List<DailyProductionItem> AllDataForPacking = new List<DailyProductionItem>();
            //Connection.Close();
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from DailyProductionItem  where convert(date,ProductionDate)=@DailyPackingDate and FactoryUnitId=@Unit";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@DailyPackingDate", date);
                Command.Parameters.AddWithValue("@Unit", Unit);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    DailyProductionItem aPacking = new DailyProductionItem();

                    aPacking.VarItemName = Reader["VarItemName"].ToString();
                    aPacking.McA = (double?)Reader["McA"];
                    aPacking.AKg = (double?)Reader["AKg"];
                    aPacking.McB = (double?)Reader["McB"];
                    aPacking.BKg = (double?)Reader["BKg"];
                    aPacking.PackingProductionKG = (double)(double?)Reader["PackingProductionKG"];
                   

                    AllDataForPacking.Add(aPacking);

                }
                Reader.Close();

            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }

            return AllDataForPacking;

        }
        //Get Loom
        public List<LoomProduction> GetAllDataforLoomtable(DateTime date, int Unit)
        {
            List<LoomProduction> AllDataForLoom = new List<LoomProduction>();
           
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from LoomProduction  where convert(date,ProductionDate)=@DailyLoomDate and Unit=@Unit";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@DailyLoomDate", date);
                Command.Parameters.AddWithValue("@Unit", Unit);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    LoomProduction aLoom = new LoomProduction();

                    aLoom.YarnName = Reader["YarnName"].ToString();
                    aLoom.ItemName = Reader["ItemName"].ToString();
                    aLoom.WeightPerPcs = (double?)Reader["WeightPerPcs"];
                    aLoom.QtyPcs = (double?)Reader["QtyPcs"];
                    AllDataForLoom.Add(aLoom);

                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return AllDataForLoom;
        }
        //GetTblTypeSummarySpinningtable
        public List<DepartmentType> GetDepartmentType(string TblType)
        {
            List<DepartmentType> AllDepartmentType = new List<DepartmentType>();

            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from DepartmentType  where TblType=@dptName";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@dptName", TblType);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    DepartmentType aDepartmentType = new DepartmentType();

                    aDepartmentType.DepartmentName = Reader["DepartmentName"].ToString();
                    AllDepartmentType.Add(aDepartmentType);

                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return AllDepartmentType;
        }
        //Get TblType Summary Loom table
        public List<DepartmentType> GetDepartmentTypeL(string TblType)
        {
            List<DepartmentType> AllDepartmentType = new List<DepartmentType>();

            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from DepartmentType  where TblType=@dptName";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@dptName", TblType);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    DepartmentType aDepartmentType = new DepartmentType();

                    aDepartmentType.DepartmentName = Reader["DepartmentName"].ToString();
                    AllDepartmentType.Add(aDepartmentType);

                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return AllDepartmentType;
        }
        //Insert Summary Spinning
        public string SaveFinalize(string STP_ProductionFinalizeString, string PackingFinalizeString, string LoomFinalizeString, string SummarySpinningFinalizeString, string SummaryLoomFinalizeString, string PowerHistoryFinalizeString, string PowerHistoryLoomFinalizeString, string pdFirst, string pdSecond, string pFirst, DateTime date, int Unit,string DailyFinalizeString)
        {
           

            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }
            string result="";
            int msg;
            try
            {
                Query = "Exec SaveFinalize @STP_ProductionFinalizeString,@PackingFinalizeString,@LoomFinalizeString,@SummarySpinningFinalizeString,@SummaryLoomFinalizeString,@PowerHistoryFinalizeString,@PowerHistoryLoomFinalizeString,@OldInvoice,@pdFirst,@pdSecond,@pFirst,@date,@Unit,@DailyFinalize";
                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear(); Command.CommandTimeout = 0;
                Command.Parameters.AddWithValue("@STP_ProductionFinalizeString", STP_ProductionFinalizeString);
                Command.Parameters.AddWithValue("@PackingFinalizeString", PackingFinalizeString);
                Command.Parameters.AddWithValue("@LoomFinalizeString", LoomFinalizeString);
                Command.Parameters.AddWithValue("@SummarySpinningFinalizeString", SummarySpinningFinalizeString);
                Command.Parameters.AddWithValue("@SummaryLoomFinalizeString", SummaryLoomFinalizeString);
                Command.Parameters.AddWithValue("@OldInvoice", "");
                Command.Parameters.AddWithValue("@PowerHistoryFinalizeString", PowerHistoryFinalizeString);
                Command.Parameters.AddWithValue("@PowerHistoryLoomFinalizeString", PowerHistoryLoomFinalizeString);
                Command.Parameters.AddWithValue("@pdFirst", pdFirst);
                Command.Parameters.AddWithValue("@pdSecond", pdSecond);
                Command.Parameters.AddWithValue("@pFirst", pFirst);
                Command.Parameters.AddWithValue("@date", date);
                Command.Parameters.AddWithValue("@Unit", Unit);
                Command.Parameters.AddWithValue("@DailyFinalize", DailyFinalizeString);



                result = (string)Command.ExecuteScalar().ToString();
               
                if (Connection.State == ConnectionState.Open) { Connection.Close(); }
                return result;

            }
            catch 
            {
                return "Error";
            }
            
            
        }
        //Get Summary Spining
        public List<SummarySpinningFinalize> GetSummarySpining(SummarySpinningFinalize aSummarySpinning)
        {
            List<SummarySpinningFinalize> AllSummarySpinningFinalizesList = new List<SummarySpinningFinalize>();
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from SummarySpinningFinalize  where convert(date,DDate)=@DDate and Unit =@Factory";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@DDate", aSummarySpinning.DDate);
                Command.Parameters.AddWithValue("@Factory", aSummarySpinning.Unit);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    SummarySpinningFinalize aSSpinningFinalize = new SummarySpinningFinalize();
                    aSSpinningFinalize.Section = Reader["Section"].ToString();
                    aSSpinningFinalize.A_Hands = (double?)Reader["A_Hands"];
                    aSSpinningFinalize.B_Hands = (double?)Reader["B_Hands"];
                    aSSpinningFinalize.C_Hands = (double?)Reader["C_Hands"];
                    AllSummarySpinningFinalizesList.Add(aSSpinningFinalize);
                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return AllSummarySpinningFinalizesList;
        }
        //Get Summary Loom
        public List<SummaryLoomFinalize> GetSummaryLoom(SummaryLoomFinalize aSummaryLoom)
        {
            List<SummaryLoomFinalize> AllsummaryLoomFinalizeList = new List<SummaryLoomFinalize>();
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from SummaryLoomFinalize  where convert(date,DDate)=@DDate and Unit =@Factory";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@DDate", aSummaryLoom.DDate);
                Command.Parameters.AddWithValue("@Factory", aSummaryLoom.Unit);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    SummaryLoomFinalize aSLoomFinalize = new SummaryLoomFinalize();
                    aSLoomFinalize.Section = Reader["Section"].ToString();
                    aSLoomFinalize.A_Hands = (double?)Reader["A_Hands"];
                    aSLoomFinalize.B_Hands = (double?)Reader["B_Hands"];
                    aSLoomFinalize.C_Hands = (double?)Reader["C_Hands"];
                    AllsummaryLoomFinalizeList.Add(aSLoomFinalize);
                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return AllsummaryLoomFinalizeList;
        }
        //Get PowerHistory
        public PowerHistoryFinalize GetPowerHistory(PowerHistoryFinalize aPowerHistory)
        {
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from PowerHistoryFinalize  where convert(date,DDate)=@DDate and Unit =@Factory";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@DDate", aPowerHistory.DDate);
                Command.Parameters.AddWithValue("@Factory", aPowerHistory.Unit);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    aPowerHistory.AshiftPowerLoseT = (double?)Reader["AshiftPowerLoseT"];
                    aPowerHistory.AshiftPowerFailm = (double?)Reader["AshiftPowerFailm"];
                    aPowerHistory.AshiftGRunning = (double?)Reader["AshiftGRunning"];
                    aPowerHistory.BshiftPowerLoseT = (double?)Reader["BshiftPowerLoseT"];
                    aPowerHistory.BshiftPowerFailm = (double?)Reader["BshiftPowerFailm"];
                    aPowerHistory.BshiftGRunning = (double?)Reader["BshiftGRunning"];
                    aPowerHistory.CshiftPowerLoseT = (double?)Reader["CshiftPowerLoseT"];
                    aPowerHistory.CshiftPowerFailm = (double?)Reader["CshiftPowerFailm"];
                    aPowerHistory.CshiftGRunning = (double?)Reader["CshiftGRunning"];
                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return aPowerHistory;
        }
        //Get PowerHistoryLoom
        public PowerHistoryLoomFinalize GetPowerHistoryLoom(PowerHistoryLoomFinalize aPowerHistoryLoom)
        {
            if (Connection.State == ConnectionState.Closed)
            {
                Connection.Open();
            }

            try
            {
                Query = @"Select * from PowerHistoryLoomFinalize  where convert(date,DDate)=@DDate and Unit =@Factory";

                Command = new SqlCommand(Query, Connection);
                Command.Parameters.Clear();
                Command.Parameters.AddWithValue("@DDate", aPowerHistoryLoom.DDate);
                Command.Parameters.AddWithValue("@Factory", aPowerHistoryLoom.Unit);
                Reader = Command.ExecuteReader();
                while (Reader.Read())
                {
                    aPowerHistoryLoom.AshiftPowerLoseT = (double?)Reader["AshiftPowerLoseT"];
                    aPowerHistoryLoom.AshiftPowerFailm = (double?)Reader["AshiftPowerFailm"];
                    aPowerHistoryLoom.AshiftGRunning = (double?)Reader["AshiftGRunning"];
                    aPowerHistoryLoom.BshiftPowerLoseT = (double?)Reader["BshiftPowerLoseT"];
                    aPowerHistoryLoom.BshiftPowerFailm = (double?)Reader["BshiftPowerFailm"];
                    aPowerHistoryLoom.BshiftGRunning = (double?)Reader["BshiftGRunning"];
                    aPowerHistoryLoom.CshiftPowerLoseT = (double?)Reader["CshiftPowerLoseT"];
                    aPowerHistoryLoom.CshiftPowerFailm = (double?)Reader["CshiftPowerFailm"];
                    aPowerHistoryLoom.CshiftGRunning = (double?)Reader["CshiftGRunning"];
                }
                Reader.Close();
            }
            catch
            {
                //Reader.Close();
            }
            if (Connection.State == ConnectionState.Open)
            {
                Connection.Close();
            }
            return aPowerHistoryLoom;
        }
        //-----------------------------------
    }
}

