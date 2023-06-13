using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FN_Jute.Models
{
    public class ReportsModel
    {
        public string ReportName { get; set; }
        public string InvoiceNo { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public int Type { get; set; }
        public string ReportType { get; set; }
        public int SandType { get; set; }
        public string SalesType { get; set; }
        public Int64 DepotId { get; set; }
        public Int64 UserId { get; set; }
        public string UserName { get; set; }
        public string PartyId { get; set; }
        public Int64 GhatId { get; set; }
        public string ItemCode { get; set; }
        public int BranchId { get; set; }
        public int AccHeadId { get; set; }
        public string AccHeadName { get; set; }
        public int ItemGroupId { get; set; }
        public string ItemGroups { get; set; }
        public string ItemGroupsExc { get; set; }
        public string ItemCategories { get; set; }
        public string ItemCategoriesExc { get; set; }
        public string ExportType { get; set; }
        public DateTime Month { get; set; }
        public string StrMonth { get; set; }
        public string Format { get; set; }
    }
}