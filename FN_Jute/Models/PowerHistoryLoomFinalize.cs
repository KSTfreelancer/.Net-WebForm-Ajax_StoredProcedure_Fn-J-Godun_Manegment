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
    
    public partial class PowerHistoryLoomFinalize
    {
        public long Id { get; set; }
        public Nullable<long> Unit { get; set; }
        public Nullable<double> AshiftPowerLoseT { get; set; }
        public Nullable<double> AshiftPowerFailm { get; set; }
        public Nullable<double> AshiftGRunning { get; set; }
        public Nullable<double> BshiftPowerLoseT { get; set; }
        public Nullable<double> BshiftPowerFailm { get; set; }
        public Nullable<double> BshiftGRunning { get; set; }
        public Nullable<double> CshiftPowerLoseT { get; set; }
        public Nullable<double> CshiftPowerFailm { get; set; }
        public Nullable<double> CshiftGRunning { get; set; }
        public Nullable<System.DateTime> EntryDate { get; set; }
        public Nullable<System.DateTime> DDate { get; set; }
        public Nullable<double> ABCTotalPowerLoseT { get; set; }
        public Nullable<double> ABCTotalPowerFailm { get; set; }
        public Nullable<double> ABCTotalGRunning { get; set; }
    }
}
