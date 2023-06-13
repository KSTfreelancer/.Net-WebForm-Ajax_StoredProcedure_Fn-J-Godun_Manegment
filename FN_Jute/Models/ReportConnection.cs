using CrystalDecisions.CrystalReports.Engine;
using CrystalDecisions.Shared;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace FN_Jute.Models
{
    public class ReportConnection : WebService
    {
        #region Common

        public ReportDocument GetReport(string reportName)
        {
            ReportDocument rd = new ReportDocument();
            TableLogOnInfos crtableLogoninfos = new TableLogOnInfos();
            TableLogOnInfo crtableLogoninfo = new TableLogOnInfo();
            ConnectionInfo crConnectionInfo = new ConnectionInfo();
            Tables CrTables;
            rd.Load(Server.MapPath("~/Reports/" + reportName + ".rpt"));

            crConnectionInfo.ServerName = ".";
            var conn = ConfigurationManager.ConnectionStrings["ProductionsFinalize"].ConnectionString;
            var csb = new SqlConnectionStringBuilder(conn);
            crConnectionInfo.DatabaseName = csb.InitialCatalog;
            crConnectionInfo.UserID = "sa";
            crConnectionInfo.Password = "sst@123";

            CrTables = rd.Database.Tables;
            foreach (CrystalDecisions.CrystalReports.Engine.Table CrTable in CrTables)
            {
                crtableLogoninfo = CrTable.LogOnInfo;
                crtableLogoninfo.ConnectionInfo = crConnectionInfo;
                CrTable.ApplyLogOnInfo(crtableLogoninfo);
            }

            return rd;
        }

        public ReportDocument GetReportAcc(string reportName)
        {
            ReportDocument rd = new ReportDocument();
            TableLogOnInfos crtableLogoninfos = new TableLogOnInfos();
            TableLogOnInfo crtableLogoninfo = new TableLogOnInfo();
            ConnectionInfo crConnectionInfo = new ConnectionInfo();
            Tables CrTables;
            rd.Load(Server.MapPath("~/Report/" + reportName + ".rpt"));

            crConnectionInfo.ServerName = ".";
            var conn = ConfigurationManager.ConnectionStrings["BoatManagementConnectionString"].ConnectionString;
            var csb = new SqlConnectionStringBuilder(conn);
            crConnectionInfo.DatabaseName = csb.InitialCatalog;
            crConnectionInfo.UserID = "sa";
            crConnectionInfo.Password = "sst@123";

            CrTables = rd.Database.Tables;
            foreach (CrystalDecisions.CrystalReports.Engine.Table CrTable in CrTables)
            {
                crtableLogoninfo = CrTable.LogOnInfo;
                crtableLogoninfo.ConnectionInfo = crConnectionInfo;
                CrTable.ApplyLogOnInfo(crtableLogoninfo);
            }

            return rd;
        }

        #endregion
    }
}