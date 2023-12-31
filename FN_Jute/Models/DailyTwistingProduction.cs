//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FN_Jute.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class DailyTwistingProduction
    {
        public long Id { get; set; }
        public string ProductionId { get; set; }
        public string SINo { get; set; }
        public string JobProcessId { get; set; }
        public string RefOrderNo { get; set; }
        public Nullable<System.DateTime> PrDate { get; set; }
        public string ItemCode { get; set; }
        public string ItemName { get; set; }
        public string ExpType { get; set; }
        public Nullable<long> Unit { get; set; }
        public Nullable<double> MachineRPM { get; set; }
        public Nullable<double> MachineTPI { get; set; }
        public Nullable<double> ShiftAHours { get; set; }
        public Nullable<double> ShiftAMC { get; set; }
        public Nullable<double> ShiftASpandle { get; set; }
        public Nullable<double> ShiftAProduction { get; set; }
        public Nullable<double> ShiftBHours { get; set; }
        public Nullable<double> ShiftBMC { get; set; }
        public Nullable<double> ShiftBSpandle { get; set; }
        public Nullable<double> ShiftBProduction { get; set; }
        public Nullable<double> ShiftCHours { get; set; }
        public Nullable<double> ShiftCMC { get; set; }
        public Nullable<double> ShiftCSpandle { get; set; }
        public Nullable<double> ShiftCProduction { get; set; }
        public Nullable<double> TotalMC { get; set; }
        public Nullable<double> AverageSize { get; set; }
        public Nullable<double> TotalProductionKg { get; set; }
        public Nullable<double> TargetEfficiencyPercent { get; set; }
        public Nullable<double> TargetEfficiency { get; set; }
        public Nullable<double> EfficiencyAchievedPercent { get; set; }
        public Nullable<double> HundredPercentEfficiencyProduction { get; set; }
        public Nullable<double> AverageCountOperated { get; set; }
        public string Remarks { get; set; }
        public Nullable<long> EntryByUserId { get; set; }
        public Nullable<System.DateTime> EntryDateTime { get; set; }
    }
}
