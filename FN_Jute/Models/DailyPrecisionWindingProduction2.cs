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
    
    public partial class DailyPrecisionWindingProduction2
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
        public Nullable<double> ShiftAMC { get; set; }
        public Nullable<double> ShiftASize { get; set; }
        public Nullable<double> ShiftAProduction { get; set; }
        public Nullable<double> ShiftBMC { get; set; }
        public Nullable<double> ShiftBSize { get; set; }
        public Nullable<double> ShiftBProduction { get; set; }
        public Nullable<double> ShiftCMC { get; set; }
        public Nullable<double> ShiftCSize { get; set; }
        public Nullable<double> ShiftCProduction { get; set; }
        public Nullable<double> TotalMC { get; set; }
        public Nullable<double> AverageSize { get; set; }
        public Nullable<double> TotalProductionKg { get; set; }
        public Nullable<double> ShiftAEfficiencyAchievedPercent { get; set; }
        public Nullable<double> ShiftBEfficiencyAchievedPercent { get; set; }
        public Nullable<double> ShiftCEfficiencyAchievedPercent { get; set; }
        public string Remarks { get; set; }
        public Nullable<long> EntryByUserId { get; set; }
        public Nullable<System.DateTime> EntryDateTime { get; set; }
    }
}
