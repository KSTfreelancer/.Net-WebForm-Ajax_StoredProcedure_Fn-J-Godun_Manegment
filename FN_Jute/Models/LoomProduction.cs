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
    
    public partial class LoomProduction
    {
        public string SerialNo { get; set; }
        public string InvoiceNo { get; set; }
        public string ItemId { get; set; }
        public string ItemName { get; set; }
        public string YarnId { get; set; }
        public string YarnName { get; set; }
        public Nullable<System.DateTime> ProductionDate { get; set; }
        public Nullable<double> QtyPcs { get; set; }
        public Nullable<double> WeightPerPcs { get; set; }
        public Nullable<double> RatePcs { get; set; }
        public Nullable<double> TotalKg { get; set; }
        public Nullable<double> AmountTk { get; set; }
        public string Remarks { get; set; }
        public Nullable<long> EntryBy { get; set; }
        public string Status { get; set; }
        public Nullable<long> Unit { get; set; }
    }
}
