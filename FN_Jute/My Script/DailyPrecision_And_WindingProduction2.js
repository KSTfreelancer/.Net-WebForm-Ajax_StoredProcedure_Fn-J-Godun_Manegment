
var lastDate;
$(document).ready(function () {
    GetFactoryUnit();

    $("#finalizeSelectDate").datepicker({
        "autoclose": true,
        format: "dd/mm/yyyy"
    });
    $("#finalizeSelectDate").datepicker("setDate", new Date());

    lastDate = $("#finalizeSelectDate").val();
});

function dateSet() {
    /* event.preventDefault();*/
    if (lastDate == $("#finalizeSelectDate").val()) {
        return;
    } else {
        lastDate = $("#finalizeSelectDate").val();
    }
    topMainTablePrecision();
    packingTable();
    loomTable();

    GetSummarySpining();
    GetSummaryLoom();
    GetPowerHistory();
    GetPowerHistoryLoom();

    SpinningTotalHands();
    LoomTotalHands();
    PowerHistoryTotal();
    PowerHistoryLoomTotal();

    $('#summary_spining_tbody tr td input').on('change', function () {
        SpinningTotalHands();
        HandsPerTonSpinningQtyPerPersonLoomBags();
    });
    $('#summary_loom_tbody tr td input').on('change', function () {
        LoomTotalHands();
        HandsPerTonSpinningQtyPerPersonLoomBags();
    });
    $('#power_history_tbody tr td input').on('change', function () {
        PowerHistoryTotal();
    });
    $('#power_history_loom_tbody tr td input').on('change', function () {
        PowerHistoryLoomTotal();
    });
    /*  event.getSource().getParams();*/
};
function factoryChange() {
    topMainTablePrecision();
    packingTable();
    loomTable();

    GetSummarySpining();
    GetSummaryLoom();
    GetPowerHistory();
    GetPowerHistoryLoom();

    SpinningTotalHands();
    LoomTotalHands();
    PowerHistoryTotal();
    PowerHistoryLoomTotal();

    $('#summary_spining_tbody tr td input').on('change', function () {
        SpinningTotalHands();
        HandsPerTonSpinningQtyPerPersonLoomBags();
    });
    $('#summary_loom_tbody tr td input').on('change', function () {
        LoomTotalHands();
        HandsPerTonSpinningQtyPerPersonLoomBags();
    });
    $('#power_history_tbody tr td input').on('change', function () {
        PowerHistoryTotal();
    });
    $('#power_history_loom_tbody tr td input').on('change', function () {
        PowerHistoryLoomTotal();
    });
};
//GetFactoryUnit
function GetFactoryUnit() {
    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetFactoryUnit",
        data: JSON.stringify({}),
        type: "POST",
        async: false,
        dataType: "Json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var option = "";
            //if (data.d.length > 1) {
            //    option += "<option value='-1'>--Select Factory--</option>";
            //}

            $.each(data.d, function (key, value) {
                option += "<option value='" + value.Id + "'>" + value.FactoryUnitName + "</option>";
            });

            $("#FactorySelect").empty();
            $("#FactorySelect").append(option);
        },
        error: function () {
            alert("OPtions not Selected")
        }
    });
}

//Top MainTable DataBase To Data Collections PrectionTable and SpinningTable and TwistingTabel!

function topMainTablePrecision() {
    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());
    var Unit = $("#FactorySelect option:selected").val();

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetAllDataforFinaligProduction",
        data: JSON.stringify({ date: date, Unit: Unit }),
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var PrecisionList = data.d.DailyPrecisionWindingProductionsList2;
            var SpinningList = data.d.DailySpinningWindingProductionList;
            var TwistingList = data.d.DailyTwistingProductionList;
            var tableData = "";

            var SL = 1;
            var autoRowId = 0;
            var GetProductionFinalligArry = ["Spinning", "Twisting"];
            //var GetProductionFinalligArry = ["Spinning", "Twisting", "Precision"];
            var changListForEach = "";
            var rowClassName = "";
            var TType = "", SLNo = "";
            //if (PrecisionList.length > 0 || SpinningList.length > 0 || TwistingList.length > 0) {
            if (SpinningList.length > 0 || TwistingList.length > 0) {

                for (var i = 0; i < GetProductionFinalligArry.length; i++) {
                    rowClassName = "";
                    tableData += "<tr><td class='text-bold' colspan='21'>" + GetProductionFinalligArry[i] + "</td></tr>";

                    if (GetProductionFinalligArry[i] == "Spinning") { changListForEach = SpinningList; rowClassName = "Spinning"; TType = "S"; SLNo = "1"; };
                    if (GetProductionFinalligArry[i] == "Twisting") { changListForEach = TwistingList; rowClassName = "Twisting"; TType = "T"; SLNo = "2"; };
                    //if (GetProductionFinalligArry[i] == "Precision") { changListForEach = PrecisionList; rowClassName = "Precision"; TType = "P"; SLNo = "3"; };
                    $.each(changListForEach, function (key, value) {
                        tableData += "<tr class='rowItemListRow " + rowClassName + "'id=raw_" + autoRowId + ">";
                        tableData += "<th class='SL hidden'>" + SL + "</th>";
                        tableData += "<td class='TType hidden'>" + TType + "</td>";
                        tableData += "<td class='SLNo hidden'>" + SLNo + "</td>";
                        tableData += "<td class='ItemName'>" + value.ItemName + "</td>";
                        tableData += "<td class='ExpType text-center '>" + value.ExpType + "</td>";
                        tableData += "<td class='MachineRPM text-right '>" + value.MachineRPM + "</td>";
                        tableData += "<td class='MachineTPI text-right '>" + value.MachineTPI + "</td>";

                        tableData += "<td class='ShiftAHours text-right '>" + value.ShiftAHours + "</td>";
                        tableData += "<td class='ShiftAMC text-right'>" + value.ShiftAMC + "</td>";
                        tableData += "<td class='ShiftASpandle text-right'>" + value.ShiftASpandle + "</td>";
                        tableData += "<td class='ShiftAProduction text-right'>" + value.ShiftAProduction + "</td>";

                        tableData += "<td class='ShiftBHours text-right '>" + value.ShiftBHours + "</td>";
                        tableData += "<td class='ShiftBMC text-right'>" + value.ShiftBMC + "</td>";
                        tableData += "<td class='ShiftBSpandle text-right'>" + value.ShiftBSpandle + "</td>";
                        tableData += "<td class='ShiftBProduction text-right'>" + value.ShiftBProduction + "</td>";

                        tableData += "<td class='ShiftCHours text-right '>" + value.ShiftCHours + "</td>";
                        tableData += "<td class='ShiftCMC text-right'>" + value.ShiftCMC + "</td>";
                        tableData += "<td class='ShiftCSpandle text-right'>" + value.ShiftCSpandle + "</td>";
                        tableData += "<td class='ShiftCProduction text-right'>" + value.ShiftCProduction + "</td>";

                        tableData += "<td class='TotalProductionKg text-right'>" + value.TotalProductionKg + "</td>";
                        tableData += "<td class='TargetEfficiencyPercent text-right'>" + value.TargetEfficiencyPercent + "</td>";
                        tableData += "<td class='TargetEfficiency text-right'>" + value.TargetEfficiency + "</td>";
                        tableData += "<td class='EfficiencyAchievedPercent text-right'>" + value.EfficiencyAchievedPercent + "</td>";
                        tableData += "<td class='HundredPercentEfficiencyProduction text-right'>" + value.HundredPercentEfficiencyProduction + "</td>";
                        tableData += "</tr>";
                        SL++;
                        autoRowId++;

                    });
                    var footerSum = "";
                    footerSum += "<tr class='" + rowClassName + "_Sum'>";
                    footerSum += "<td class='text-bold' colspan='4'>" + GetProductionFinalligArry[i] + " Total</td>";
                    //footerSum += "<td class='text-bold'>Total</td>";
                    footerSum += "<td class='text-right text-bold  " + rowClassName + "_SAHoursSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SAMCSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SASpandleSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SAPrdSum'>0</td>";

                    footerSum += "<td class='text-right text-bold  " + rowClassName + "_SBHoursSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SBMCSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SBSpandleSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SBPrdSum'>0</td>";

                    footerSum += "<td class='text-right text-bold  " + rowClassName + "_SCHoursSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SCMCSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SCSpandleSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_SCPrdSum'>0</td>";

                    footerSum += "<td class='text-right text-bold " + rowClassName + "_TotalPrdKgSum'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_TrEffPer'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_TrEff'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_EffAchPer'>0</td>";
                    footerSum += "<td class='text-right text-bold " + rowClassName + "_EffPrd'>0</td>";
                    footerSum += "</tr>";
                    tableData += footerSum;
                };
            };
            if (PrecisionList.length > 0) {
                var Pre_tableData = "";

                Pre_tableData += "<tr><td class='text-bold' colspan='21'>Precision </td></tr>";
                $.each(PrecisionList, function (key, value) {
                    Pre_tableData += "<tr class='rowItemListRow Precision >";
                    Pre_tableData += "<th class='SL hidden'>" + SL + "</th>";
                    Pre_tableData += "<td class='TType hidden'>" + TType + "</td>";
                    Pre_tableData += "<td class='SLNo hidden'>" + SLNo + "</td>";
                    Pre_tableData += "<td class='ItemName'>" + value.ItemName + "</td>";
                    Pre_tableData += "<td class='ExpType text-center hidden '>" + value.ExpType + "</td>";
                    Pre_tableData += "<td class='MachineRPM text-right hidden '>" + value.MachineRPM + "</td>";
                    Pre_tableData += "<td class='MachineTPI text-right hidden '>" + value.MachineTPI + "</td>";

                    Pre_tableData += "<td class='ShiftAHours text-right hidden '>" + value.ShiftAHours + "</td>";
                    Pre_tableData += "<td class='ShiftAMC text-right'>" + value.ShiftAMC + "</td>";
                    Pre_tableData += "<td class='ShiftASize text-right'>" + value.ShiftASize + "</td>";
                    Pre_tableData += "<td class='ShiftAProduction text-right'>" + value.ShiftAProduction + "</td>";

                    Pre_tableData += "<td class='ShiftBHours text-right hidden '>" + value.ShiftBHours + "</td>";
                    Pre_tableData += "<td class='ShiftBMC text-right'>" + value.ShiftBMC + "</td>";
                    Pre_tableData += "<td class='ShiftBSize text-right'>" + value.ShiftBSize + "</td>";
                    Pre_tableData += "<td class='ShiftBProduction text-right'>" + value.ShiftBProduction + "</td>";

                    Pre_tableData += "<td class='ShiftCHours text-right hidden '>" + value.ShiftCHours + "</td>";
                    Pre_tableData += "<td class='ShiftCMC text-right'>" + value.ShiftCMC + "</td>";
                    Pre_tableData += "<td class='ShiftCSize text-right'>" + value.ShiftCSize + "</td>";
                    Pre_tableData += "<td class='ShiftCProduction text-right'>" + value.ShiftCProduction + "</td>";

                    Pre_tableData += "<td class='TotalProductionKg text-right'>" + value.TotalProductionKg + "</td>";

                    Pre_tableData += "<td class='TotalMC text-right'>" + value.TotalMC + "</td>";
                    Pre_tableData += "<td class='AverageSize text-right'>" + value.AverageSize + "</td>";
                    Pre_tableData += "<td class='Remarks text-right'>" + value.Remarks + "</td>";



                    //Pre_tableData += "<td class='HundredPercentEfficiencyProduction text-right'>" + value.ShiftCEfficiencyAchievedPercent + "</td>";
                    Pre_tableData += "</tr>";
                    SL++;
                    autoRowId++;

                });
                var Pre_footerSum = "";

                Pre_footerSum += "<tr class='Precision_Sum'>";
                //footerSum += "<td class='text-bold' colspan='4'>" + GetProductionFinalligArry[i] + " Total</td>";
                Pre_footerSum += "<td class='text-bold'>Precision Total</td>";
                Pre_footerSum += "<td class='text-right text-bold hidden Precision_SAHoursSum'>0</td>";

                Pre_footerSum += "<td class='text-right text-bold Precision_SAMCSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_ShiftASizeSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_SAPrdSum'>0</td>";

                Pre_footerSum += "<td class='text-right text-bold hidden Precision_SBHoursSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_SBMCSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_ShiftBSizeSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_SBPrdSum'>0</td>";

                Pre_footerSum += "<td class='text-right text-bold hidden Precision_SCHoursSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_SCMCSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_ShiftCSizeSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_SCPrdSum'>0</td>";

                Pre_footerSum += "<td class='text-right text-bold Precision_TotalPrdKgSum'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_TotalMC'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_AverageSize'>0</td>";
                Pre_footerSum += "<td class='text-right text-bold Precision_Remark'></td>";




                Pre_footerSum += "</tr>";
                Pre_tableData += Pre_footerSum;
                //};


            }

            $("#TopMainTableBody").empty();
            $("#TopMainTableBody").append(tableData);
            $("#Top_Pre_TableBody").empty();
            $("#Top_Pre_TableBody").append(Pre_tableData);

            SP_TSP_FooterTotal();

            $("input#T_Precision").val($("#Top_Pre_TableBody .Precision_TotalPrdKgSum").text());
            $("input#T_Spinning").val($("#TopMainTableBody .Spinning_TotalPrdKgSum").text());
            $("input#T_Twisting").val($("#TopMainTableBody .Twisting_TotalPrdKgSum").text());

        },
        error: function (ex) {
            alert("TopMainTable error " + ex);
        }
    });
};
//Top Main TableBody sum of  Precision Table
//function Precision_FooterTotal() {
//    var ShiftAMCSum = 0, ShiftASizeSum = 0, ShiftAProductionSum = 0,
//        ShiftBMCSum = 0, ShiftBSizeSum = 0, ShiftBProductionSum = 0,
//        ShiftCMCSum = 0, ShiftCSizeSum = 0, ShiftCProductionSum = 0,
//        TotalProductionKgSum = 0, TotalMCSum = 0, AverageSizeSum = 0, RemarkSum = 0,
//        ShiftAMC = 0, ShiftASize = 0, ShiftAProduction = 0,
//        ShiftBMC = 0, ShiftBSize = 0, ShiftBProduction = 0,
//        ShiftCMC = 0, ShiftCSize = 0, ShiftCProduction = 0,
//        TotalProductionKg = 0, TotalMC = 0, AverageSize = 0, Remark = 0;
//    //Sum Each Function
//    var PS = $("#Top_Pre_TableBody tr.Precision");
//    PS.each(function () {
//        ShiftAMC = parseFloat($(this).find("td.ShiftAMC").text());
//        ShiftASize = parseFloat($(this).find("td.ShiftASize").text());
//        ShiftAProduction = parseFloat($(this).find("td.ShiftAProduction").text());
//        //ShiftBHours = parseFloat($(this).find("td.ShiftBHours").text());
//        ShiftBMC = parseFloat($(this).find("td.ShiftBMC").text());
//        ShiftBSize = parseFloat($(this).find("td.ShiftBSize").text());
//        ShiftBProduction = parseFloat($(this).find("td.ShiftBProduction").text());
//        //ShiftCHours = parseFloat($(this).find("td.ShiftCHours").text());
//        ShiftCMC = parseFloat($(this).find("td.ShiftCMC").text());
//        ShiftCSize = parseFloat($(this).find("td.ShiftCSize").text());
//        ShiftCProduction = parseFloat($(this).find("td.ShiftCProduction").text());

//        TotalProductionKg = parseFloat($(this).find("td.TotalProductionKg").text());
//        TotalMC = parseFloat($(this).find("td.TotalMC").text());
//        AverageSize = parseFloat($(this).find("td.AverageSize").text());
//        Remark = parseFloat($(this).find("td.Remarks").text());
//        //HundredPercentEfficiencyProduction = parseFloat($(this).find("td.HundredPercentEfficiencyProduction").text());

//        ShiftAMCSum += ShiftAMC; ShiftASizeSum += ShiftASize; ShiftAProductionSum += ShiftAProduction;
//        ShiftBMCSum += ShiftBMC; ShiftBSizeSum += ShiftBSize; ShiftBProductionSum += ShiftBProduction;
//        ShiftCMCSum += ShiftCMC; ShiftCSizeSum += ShiftCSize; ShiftCProductionSum += ShiftCProduction;
//        TotalProductionKgSum += TotalProductionKg; TotalMCSum += TotalMC; AverageSizeSum += AverageSize; RemarkSum += Remark;
//    });

//    //$(".Precision_SAHoursSum").text(ShiftAHoursSum.toFixed(2));
//    $(".Precision_SAMCSum").text(ShiftAMCSum.toFixed(2));
//    $(".Precision_SASpandleSum").text(ShiftASizeSum.toFixed(2));
//    $(".Precision_SAPrdSum").text(ShiftAProductionSum.toFixed(2));

//    //$(".Precision_SBHoursSum").text(ShiftBHoursSum.toFixed(2));
//    $(".Precision_SBMCSum").text(ShiftBMCSum.toFixed(2));
//    $(".Precision_SBSpandleSum").text(ShiftBSizeSum.toFixed(2));
//    $(".Precision_SBPrdSum").text(ShiftBProductionSum.toFixed(2));

//    //$(".Precision_SCHoursSum").text(ShiftCHoursSum.toFixed(2));
//    $(".Precision_SCMCSum").text(ShiftCMCSum.toFixed(2));
//    $(".Precision_SCSpandleSum").text(ShiftCSizeSum.toFixed(2));
//    $(".Precision_SCPrdSum").text(ShiftCProductionSum.toFixed(2));

//    $(".Precision_TotalPrdKgSum").text(TotalProductionKgSum.toFixed(2));
//    $(".Precision_TrEffPer").text(TotalMCSum.toFixed(2));
//    $(".Precision_TrEff").text(AverageSizeSum.toFixed(2));
//    $(".Precision_EffAchPer").text(RemarkSum.toFixed(2));

//    //$(".Precision_EffPrd").text(HundredPercentEfficiencyProductionSum.toFixed(2));




//}

//Top Main TableBody sum of  Spinning and Twisting!
function SP_TSP_FooterTotal() {
    //var GetProductionFinalligArry = ["Spinning", "Twisting"];
    var GetProductionFinalligArry = ["Precision", "Spinning", "Twisting"];
    var changProductionFinalligClass = "";
    for (var i = 0; i < GetProductionFinalligArry.length; i++) {
        if (GetProductionFinalligArry[i] == "Precision") { changProductionFinalligClass = $("#Top_Pre_TableBody .Precision") };
        if (GetProductionFinalligArry[i] == "Spinning") { changProductionFinalligClass = $("#TopMainTableBody tr.Spinning") };
        if (GetProductionFinalligArry[i] == "Twisting") { changProductionFinalligClass = $("#TopMainTableBody tr.Twisting") };

        var ShiftAHoursSum = 0, ShiftAMCSum = 0, ShiftASpandleSum = 0, ShiftAProductionSum = 0, ShiftASizeSum = 0,
            ShiftBHoursSum = 0, ShiftBMCSum = 0, ShiftBSpandleSum = 0, ShiftBProductionSum = 0, ShiftBSizeSum = 0,
            ShiftCHoursSum = 0, ShiftCMCSum = 0, ShiftCSpandleSum = 0, ShiftCProductionSum = 0, ShiftCSizeSum = 0,
            TotalProductionKgSum = 0, TargetEfficiencyPercentSum = 0, TargetEfficiencySum = 0, EfficiencyAchievedPercentSum = 0, HundredPercentEfficiencyProductionSum = 0,
            TotalMCSum = 0, AverageSizeSum = 0, RemarkSum = '',
            ShiftAHours = 0, ShiftAMC = 0, ShiftASpandle = 0, ShiftAProduction = 0, ShiftASize = 0,

            ShiftBHours = 0, ShiftBMC = 0, ShiftBSpandle = 0, ShiftBProduction = 0, ShiftBSize = 0,
            ShiftCHours = 0, ShiftCMC = 0, ShiftCSpandle = 0, ShiftCProduction = 0, ShiftCSize = 0,
            TotalProductionKg = 0, TargetEfficiencyPercent = 0, TargetEfficiency = 0, EfficiencyAchievedPercent = 0, HundredPercentEfficiencyProduction = 0,
            TotalMC = 0, AverageSize = 0, Remark = 0;
        //Sum Each Function
        changProductionFinalligClass.each(function () {
            ShiftAHours = parseFloat($(this).find("td.ShiftAHours").text());
            ShiftAMC = parseFloat($(this).find("td.ShiftAMC").text());
            ShiftASpandle = parseFloat($(this).find("td.ShiftASpandle").text());
            ShiftAProduction = parseFloat($(this).find("td.ShiftAProduction").text());
            ShiftBHours = parseFloat($(this).find("td.ShiftBHours").text());
            ShiftBMC = parseFloat($(this).find("td.ShiftBMC").text());
            ShiftBSpandle = parseFloat($(this).find("td.ShiftBSpandle").text());
            ShiftBProduction = parseFloat($(this).find("td.ShiftBProduction").text());
            ShiftCHours = parseFloat($(this).find("td.ShiftCHours").text());
            ShiftCMC = parseFloat($(this).find("td.ShiftCMC").text());
            ShiftCSpandle = parseFloat($(this).find("td.ShiftCSpandle").text());
            ShiftCProduction = parseFloat($(this).find("td.ShiftCProduction").text());
            TotalProductionKg = parseFloat($(this).find("td.TotalProductionKg").text());
            TargetEfficiencyPercent = parseFloat($(this).find("td.TargetEfficiencyPercent").text());
            TargetEfficiency = parseFloat($(this).find("td.TargetEfficiency").text());
            EfficiencyAchievedPercent = parseFloat($(this).find("td.EfficiencyAchievedPercent").text());
            HundredPercentEfficiencyProduction = parseFloat($(this).find("td.HundredPercentEfficiencyProduction").text());

            ShiftASize = parseFloat($(this).find("td.ShiftASize").text());
            ShiftBSize = parseFloat($(this).find("td.ShiftBSize").text());
            ShiftCSize = parseFloat($(this).find("td.ShiftCSize").text());

            TotalMC = parseFloat($(this).find("td.TotalMC").text());
            AverageSize = parseFloat($(this).find("td.AverageSize").text());
            Remark = parseFloat($(this).find("td.Remarks").text());





            ShiftAHoursSum += ShiftAHours; ShiftAMCSum += ShiftAMC; ShiftASpandleSum += ShiftASpandle; ShiftAProductionSum += ShiftAProduction; ShiftASizeSum += ShiftASize;
            ShiftBHoursSum += ShiftBHours; ShiftBMCSum += ShiftBMC; ShiftBSpandleSum += ShiftBSpandle; ShiftBProductionSum += ShiftBProduction; ShiftBSizeSum += ShiftBSize;
            ShiftCHoursSum += ShiftCHours; ShiftCMCSum += ShiftCMC; ShiftCSpandleSum += ShiftCSpandle; ShiftCProductionSum += ShiftCProduction; ShiftCSizeSum += ShiftCSize;
            TotalProductionKgSum += TotalProductionKg; TargetEfficiencyPercentSum += TargetEfficiencyPercent; TargetEfficiencySum += TargetEfficiency; EfficiencyAchievedPercentSum += EfficiencyAchievedPercent; HundredPercentEfficiencyProductionSum += HundredPercentEfficiencyProduction;
            TotalMCSum += TotalMC; AverageSizeSum += AverageSize; RemarkSum += '';
        });

        if (GetProductionFinalligArry[i] == "Precision") {
            $(".Precision_SAHoursSum").text(ShiftAHoursSum.toFixed(2));
            $(".Precision_SAMCSum").text(ShiftAMCSum.toFixed(2));
            $(".Precision_SASpandleSum").text(ShiftASpandleSum.toFixed(2));
            $(".Precision_SAPrdSum").text(ShiftAProductionSum.toFixed(2));
            $(".Precision_SBHoursSum").text(ShiftBHoursSum.toFixed(2));
            $(".Precision_SBMCSum").text(ShiftBMCSum.toFixed(2));
            $(".Precision_SBSpandleSum").text(ShiftBSpandleSum.toFixed(2));
            $(".Precision_SBPrdSum").text(ShiftBProductionSum.toFixed(2));
            $(".Precision_SCHoursSum").text(ShiftCHoursSum.toFixed(2));
            $(".Precision_SCMCSum").text(ShiftCMCSum.toFixed(2));
            $(".Precision_SCSpandleSum").text(ShiftCSpandleSum.toFixed(2));
            $(".Precision_SCPrdSum").text(ShiftCProductionSum.toFixed(2));
            $(".Precision_TotalPrdKgSum").text(TotalProductionKgSum.toFixed(2));
            $(".Precision_TrEffPer").text(TargetEfficiencyPercentSum.toFixed(2));
            $(".Precision_TrEff").text(TargetEfficiencySum.toFixed(2));
            $(".Precision_EffAchPer").text(EfficiencyAchievedPercentSum.toFixed(2));
            $(".Precision_EffPrd").text(HundredPercentEfficiencyProductionSum.toFixed(2));


            $(".Precision_ShiftASizeSum").text(ShiftASizeSum.toFixed(2));
            $(".Precision_ShiftBSizeSum").text(ShiftBSizeSum.toFixed(2));
            $(".Precision_ShiftCSizeSum").text(ShiftCSizeSum.toFixed(2));
            $(".Precision_TotalMC").text(TotalMCSum.toFixed(2));
            $(".Precision_AverageSize").text(AverageSizeSum.toFixed(2));
            $(".Precision_Remark").text(RemarkSum);

        };
        if (GetProductionFinalligArry[i] == "Spinning") {
            $(".Spinning_SAHoursSum").text(ShiftAHoursSum.toFixed(2));
            $(".Spinning_SAMCSum").text(ShiftAMCSum.toFixed(2));
            $(".Spinning_SASpandleSum").text(ShiftASpandleSum.toFixed(2));
            $(".Spinning_SAPrdSum").text(ShiftAProductionSum.toFixed(2));
            $(".Spinning_SBHoursSum").text(ShiftBHoursSum.toFixed(2));
            $(".Spinning_SBMCSum").text(ShiftBMCSum.toFixed(2));
            $(".Spinning_SBSpandleSum").text(ShiftBSpandleSum.toFixed(2));
            $(".Spinning_SBPrdSum").text(ShiftBProductionSum.toFixed(2));
            $(".Spinning_SCHoursSum").text(ShiftCHoursSum.toFixed(2));
            $(".Spinning_SCMCSum").text(ShiftCMCSum.toFixed(2));
            $(".Spinning_SCSpandleSum").text(ShiftCSpandleSum.toFixed(2));
            $(".Spinning_SCPrdSum").text(ShiftCProductionSum.toFixed(2));
            $(".Spinning_TotalPrdKgSum").text(TotalProductionKgSum.toFixed(2));
            $(".Spinning_TrEffPer").text(TargetEfficiencyPercentSum.toFixed(2));
            $(".Spinning_TrEff").text(TargetEfficiencySum.toFixed(2));
            $(".Spinning_EffAchPer").text(EfficiencyAchievedPercentSum.toFixed(2));
            $(".Spinning_EffPrd").text(HundredPercentEfficiencyProductionSum.toFixed(2));
        };
        if (GetProductionFinalligArry[i] == "Twisting") {
            $(".Twisting_SAHoursSum").text(ShiftAHoursSum.toFixed(2));
            $(".Twisting_SAMCSum").text(ShiftAMCSum.toFixed(2));
            $(".Twisting_SASpandleSum").text(ShiftASpandleSum.toFixed(2));
            $(".Twisting_SAPrdSum").text(ShiftAProductionSum.toFixed(2));
            $(".Twisting_SBHoursSum").text(ShiftBHoursSum.toFixed(2));
            $(".Twisting_SBMCSum").text(ShiftBMCSum.toFixed(2));
            $(".Twisting_SBSpandleSum").text(ShiftBSpandleSum.toFixed(2));
            $(".Twisting_SBPrdSum").text(ShiftBProductionSum.toFixed(2));
            $(".Twisting_SCHoursSum").text(ShiftCHoursSum.toFixed(2));
            $(".Twisting_SCMCSum").text(ShiftCMCSum.toFixed(2));
            $(".Twisting_SCSpandleSum").text(ShiftCSpandleSum.toFixed(2));
            $(".Twisting_SCPrdSum").text(ShiftCProductionSum.toFixed(2));
            $(".Twisting_TotalPrdKgSum").text(TotalProductionKgSum.toFixed(2));
            $(".Twisting_TrEffPer").text(TargetEfficiencyPercentSum.toFixed(2));
            $(".Twisting_TrEff").text(TargetEfficiencySum.toFixed(2));
            $(".Twisting_EffAchPer").text(EfficiencyAchievedPercentSum.toFixed(2));
            $(".Twisting_EffPrd").text(HundredPercentEfficiencyProductionSum.toFixed(2));
        };
    };
};
//Packing
function packingTable() {

    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());
    var Unit = $("#FactorySelect option:selected").val();

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetAllDataforPackingtable",
        data: JSON.stringify({ date: date, Unit: Unit }),
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var tableData = "";
            var SL = 1;
            if (data.d.length > 0) {
                tableData += "<tr><td class='text-bold' colspan='6'>Packing</td></tr>";
                $.each(data.d, function (key, value) {
                    tableData += "<tr class='PackingRow'>";
                    tableData += "<th class='SL hidden'>" + SL + "</th>";

                    tableData += "<td class='VarItemName'>" + value.VarItemName + "</td>";
                    tableData += "<td class='McA text-right'>" + value.McA + "</td>";
                    tableData += "<td class='AKg text-right'>" + value.AKg + "</td>";
                    tableData += "<td class='McB text-right '>" + value.McB + "</td>";
                    tableData += "<td class='BKg text-right'>" + value.BKg + "</td>";
                    //tableData += "<td class='PackingProductionKG text-right '>" + value.PackingProductionKG + "</td>";
                    var RowSum = ( value.AKg + value.BKg);
                    tableData += "<td class='PackingProductionKG text-right '>" + RowSum.toFixed(2) + "</td>";

                    tableData += "</tr>";
                    SL++;
                });
                var footerSum = "";
                footerSum += "<tr class='PackingFoot_Sum'>";
                footerSum += "<td class='text-bold' >Packing Total</td>";
                footerSum += "<td class='text-right text-bold ' id='Packing_McA_Sum'>0</td>";
                footerSum += "<td class='text-right text-bold '  id='Packing_AKg_Sum'>0</td>";
                footerSum += "<td class='text-right text-bold '  id='Packing_McB_Sum'>0</td>";
                footerSum += "<td class='text-right text-bold '  id='Packing_BKg_Sum'>0</td>";
                footerSum += "<td class='text-right text-bold '  id='Packing_Total_Sum'>0</td>";
                footerSum += "</tr>";
                tableData += footerSum;

            };
            $("#PackingTableBody").empty();
            $("#PackingTableBody").append(tableData);
            PackingTotal();
            $("input#T_Packaging").val($("td#Packing_Total_Sum").text());
        },
        error: function (ex) {
            alert("There are no supplier");
        }
    });
};
function PackingTotal() {
    var McASum = 0, PrdASum = 0, McBSun = 0, PrdBSum = 0, TotalSum = 0, q = 0, w = 0, x = 0, y = 0, z = 0;
    $("#PackingTabl tbody tr.PackingRow").each(function () {
        q = parseFloat($(this).find("td.McA").text());
        w = parseFloat($(this).find("td.AKg").text());
        x = parseFloat($(this).find("td.McB").text());
        y = parseFloat($(this).find("td.BKg").text());
        z = parseFloat($(this).find("td.PackingProductionKG").text());

        McASum += q; PrdASum += w; McBSun += x; PrdBSum += y; TotalSum += z;
    });
    $("#Packing_McA_Sum").text(McASum.toFixed(2));
    $("#Packing_AKg_Sum").text(PrdASum.toFixed(2));
    $("#Packing_McB_Sum").text(McBSun.toFixed(2));
    $("#Packing_BKg_Sum").text(PrdBSum.toFixed(2));
    $("#Packing_Total_Sum").text(TotalSum.toFixed(2));
};
//Loom
function loomTable() {

    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());
    var Unit = $("#FactorySelect option:selected").val();

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetAllDataforLoomtable",
        data: JSON.stringify({ date: date, Unit: Unit }),
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var tableData = "";
            var SL = 1;
            if (data.d.length > 0) {
                tableData += "<tr><td class='text-bold' colspan='4'>Loom</td></tr>";
                $.each(data.d, function (key, value) {
                    tableData += "<tr class='LoomRow'>";
                    tableData += "<th class='SL hidden'>" + SL + "</th>";

                    tableData += "<td class='YarnName'>" + value.YarnName + "</td>";
                    tableData += "<td class='ItemName text-right'>" + value.ItemName + "</td>";
                    tableData += "<td class='WeightPerPcs text-right'>" + value.WeightPerPcs + "</td>";
                    tableData += "<td class='QtyPcs text-right '>" + value.QtyPcs + "</td>";

                    tableData += "</tr>";
                    SL++;
                });
                var footerSum = "";
                footerSum += "<tr class='LoomFoot_Sum'>";
                footerSum += "<td class='text-bold' colspan='2'>Loom Total</td>";
                footerSum += "<td class='text-right text-bold '  id='WeightPerPcs_Sum'>0</td>";
                footerSum += "<td class='text-right text-bold '  id='QtyPcs_Sum'>0</td>";
                footerSum += "</tr>";
                tableData += footerSum;
            };
            $("#LoomTableBody").empty();
            $("#LoomTableBody").append(tableData);
            LoomTotal();
            $("input#T_Loom").val($("td#QtyPcs_Sum").text());
        },
        error: function (ex) {
            alert("There are no supplier");
        }
    });
};

function LoomTotal() {
    var WeightPerPcsSum = 0, QtyPcsSum = 0, x = 0, y = 0;
    $("#LoomTable tbody tr.LoomRow").each(function () {
        x = parseFloat($(this).find("td.WeightPerPcs").text());
        y = parseFloat($(this).find("td.QtyPcs").text());

        WeightPerPcsSum += x; QtyPcsSum += y;
    });
    $("#WeightPerPcs_Sum").text(WeightPerPcsSum.toFixed(2));
    $("#QtyPcs_Sum").text(QtyPcsSum.toFixed(2));
};

//Summary Spinning Table
function SummarySpinningTable() {
    var TblType = 'S';

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetDepartmentType",
        data: JSON.stringify({ TblType: TblType }),
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var tableData = "";
            var footerSum = "";
            if (data.d.length > 0) {
                $.each(data.d, function (key, value) {
                    tableData += "<tr>";
                    tableData += "<td class='Section'>" + value.DepartmentName + "</td>";
                    tableData += "<td class='A-Hands text-right'><input type='text' value='0' /></td>";
                    tableData += "<td class='B-Hands text-right'><input type='text' value='0' /></td>";
                    tableData += "<td class='C-Hands text-right'><input type='text' value='0' /></td>";
                    tableData += "<td class='Total-Hands text-right '><input type='text' value='0.0' disabled/></td>";
                    tableData += "</tr>";
                });

                footerSum += "<tr>";
                footerSum += "<td class='text-bold'>Total Hands:</td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "</tr>";
            };
            $("#summary_spining_tbody").empty();
            $("#summary_spining_tbody").append(tableData);

            $("#summary_spining_tfoot").empty();
            $("#summary_spining_tfoot").append(footerSum);
        },
        error: function (ex) {
            alert("There are incorrect data");
        }
    });
};

function SpinningTotalHands() {
    var TotalAH = 0, TotalBH = 0, TotalCH = 0, AllTotalH = 0;
    $("#summary_spining_tbody tr").each(function () {
        var x = parseFloat($(this).find("td:nth-child(2) input").val());
        var y = parseFloat($(this).find("td:nth-child(3) input").val());
        var z = parseFloat($(this).find("td:nth-child(4) input").val());
        var sum = x + y + z;
        $(this).find("td:nth-child(5) input").val(sum.toFixed(2));
        var w = parseFloat($(this).find("td:nth-child(5) input").val());
        TotalAH += x; TotalBH += y; TotalCH += z; AllTotalH += w;
    });
    $("#summary_spining_tfoot tr td:nth-child(2) input").val(TotalAH.toFixed(2));
    $("#summary_spining_tfoot tr td:nth-child(3) input").val(TotalBH.toFixed(2));
    $("#summary_spining_tfoot tr td:nth-child(4) input").val(TotalCH.toFixed(2));
    $("#summary_spining_tfoot tr td:nth-child(5) input").val(AllTotalH.toFixed(2));
};

function SummaryLoomTable() {
    var TblType = 'L';

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetDepartmentTypeL",
        data: JSON.stringify({ TblType: TblType }),
        type: "POST",
        async: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var tableData = "";
            var footerSum = "";
            if (data.d.length > 0) {
                $.each(data.d, function (key, value) {
                    tableData += "<tr>";
                    tableData += "<td class='Section'>" + value.DepartmentName + "</td>";
                    tableData += "<td class='A-Hands text-right'><input type='text' value='0' /></td>";
                    tableData += "<td class='B-Hands text-right'><input type='text' value='0' /></td>";
                    tableData += "<td class='C-Hands text-right'><input type='text' value='0' /></td>";
                    tableData += "<td class='Total-Hands text-right '><input type='text' value='0.0' disabled/></td>";
                    tableData += "</tr>";
                });

                footerSum += "<tr>";
                footerSum += "<td class='text-bold'>Total Hands:</td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "<td class='text-right text-bold '><input type='text' value='0.0' disabled/></td>";
                footerSum += "</tr>";
            };

            $("#summary_loom_tbody").empty();
            $("#summary_loom_tbody").append(tableData);

            $("#summary_loom_tfoot").empty();
            $("#summary_loom_tfoot").append(footerSum);

        },
        error: function (ex) {
            alert("There are incorrect data");
        }
    });
};
//Summary Loom Total Hands
function LoomTotalHands() {
    var TotalAH = 0, TotalBH = 0, TotalCH = 0, AllTotalH = 0;
    $("#summary_loom_tbody tr ").each(function () {
        var x = parseFloat($(this).find("td:nth-child(2) input").val());
        var y = parseFloat($(this).find("td:nth-child(3) input").val());
        var z = parseFloat($(this).find("td:nth-child(4) input").val());
        var sum = x + y + z;
        $(this).find("td:nth-child(5) input").val(sum.toFixed(2));
        var w = parseFloat($(this).find("td:nth-child(5) input").val());
        TotalAH += x; TotalBH += y; TotalCH += z; AllTotalH += w;
    });
    $("#summary_loom_tfoot tr td:nth-child(2) input").val(TotalAH.toFixed(2));
    $("#summary_loom_tfoot tr td:nth-child(3) input").val(TotalBH.toFixed(2));
    $("#summary_loom_tfoot tr td:nth-child(4) input").val(TotalCH.toFixed(2));
    $("#summary_loom_tfoot tr td:nth-child(5) input").val(AllTotalH.toFixed(2));
};
//Power History Total 
function PowerHistoryTotal() {
    var TotalPowerLose = 0, TotalPowerFail = 0, TotalGRunning = 0;
    $("#power_history_tbody tr ").each(function () {
        var x = parseFloat($(this).find("td:nth-child(2) input").val());
        var y = parseFloat($(this).find("td:nth-child(3) input").val());
        var z = parseFloat($(this).find("td:nth-child(4) input").val());

        TotalPowerLose += x; TotalPowerFail += y; TotalGRunning += z;
    });
    $("#power_history_tfoot tr td:nth-child(2) input").val(TotalPowerLose.toFixed(2));
    $("#power_history_tfoot tr td:nth-child(3) input").val(TotalPowerFail.toFixed(2));
    $("#power_history_tfoot tr td:nth-child(4) input").val(TotalGRunning.toFixed(2));
};
//Power History(Loom) Total 
function PowerHistoryLoomTotal() {
    var TotalPowerLose = 0, TotalPowerFail = 0, TotalGRunning = 0;
    $("#power_history_loom_tbody tr ").each(function () {
        var x = parseFloat($(this).find("td:nth-child(2) input").val());
        var y = parseFloat($(this).find("td:nth-child(3) input").val());
        var z = parseFloat($(this).find("td:nth-child(4) input").val());

        TotalPowerLose += x; TotalPowerFail += y; TotalGRunning += z;
    });
    $("#power_history_loom_tfoot tr td:nth-child(2) input").val(TotalPowerLose.toFixed(2));
    $("#power_history_loom_tfoot tr td:nth-child(3) input").val(TotalPowerFail.toFixed(2));
    $("#power_history_loom_tfoot tr td:nth-child(4) input").val(TotalGRunning.toFixed(2));
    //Hands Per Ton Spinning && Qty Per Person Loom / Bags
    HandsPerTonSpinningQtyPerPersonLoomBags()

};
//Insert Spinning & Twisting & Precision & Summary Spinning & Summary Loom & Power History & Power History Loom
function finalig() {
    var SPTArray = new Array();
    var PrecisionArray = new Array();
    var PackingArray = new Array();
    var LoomArray = new Array();
    var SummarySpining = new Array();
    var SummaryLoom = new Array();
    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());
    var Unit = $("#FactorySelect option:selected").val();
    //SpinningArray
    $("#TopMainTableBody tr.Spinning").each(function () {
        var STPObj = {
            Unit: $("#FactorySelect option:selected").val(),

            TType: $(this).find("td:nth-child(2)").text(),
            SLNo: $(this).find("td:nth-child(3)").text(),
            ItemName: $(this).find("td:nth-child(4)").text(),
            ExpType: $(this).find("td:nth-child(5)").text(),
            MachineRPM: $(this).find("td:nth-child(6)").text(),
            MachineTPI: $(this).find("td:nth-child(7)").text(),
            ShiftAHours: $(this).find("td:nth-child(8)").text(),
            ShiftAMC: $(this).find("td:nth-child(9)").text(),
            ShiftASpandle: $(this).find("td:nth-child(10)").text(),
            ShiftAProduction: $(this).find("td:nth-child(11)").text(),
            ShiftBHours: $(this).find("td:nth-child(12)").text(),
            ShiftBMC: $(this).find("td:nth-child(13)").text(),
            ShiftBSpandle: $(this).find("td:nth-child(14)").text(),
            ShiftBProduction: $(this).find("td:nth-child(15)").text(),
            ShiftCHours: $(this).find("td:nth-child(16)").text(),
            ShiftCMC: $(this).find("td:nth-child(17)").text(),
            ShiftCSpandle: $(this).find("td:nth-child(18)").text(),
            ShiftCProduction: $(this).find("td:nth-child(19)").text(),
            TotalProductionKg: $(this).find("td:nth-child(20)").text(),
            TargetEfficiencyPercent: $(this).find("td:nth-child(21)").text(),
            TargetEfficiency: $(this).find("td:nth-child(22)").text(),
            EfficiencyAchievedPercent: $(this).find("td:nth-child(23)").text(),
            HundredPercentEfficiencyProduction: $(this).find("td:nth-child(24)").text(),

            DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),
        }
        SPTArray.push(STPObj);
    });
    //TwistingArray
    $("#TopMainTableBody tr.Twisting").each(function () {
        var TwistingObj = {
            Unit: $("#FactorySelect option:selected").val(),

            TType: $(this).find("td:nth-child(2)").text(),
            SLNo: $(this).find("td:nth-child(3)").text(),
            ItemName: $(this).find("td:nth-child(4)").text(),
            ExpType: $(this).find("td:nth-child(5)").text(),
            MachineRPM: $(this).find("td:nth-child(6)").text(),
            MachineTPI: $(this).find("td:nth-child(7)").text(),
            ShiftAHours: $(this).find("td:nth-child(8)").text(),
            ShiftAMC: $(this).find("td:nth-child(9)").text(),
            ShiftASpandle: $(this).find("td:nth-child(10)").text(),
            ShiftAProduction: $(this).find("td:nth-child(11)").text(),
            ShiftBHours: $(this).find("td:nth-child(12)").text(),
            ShiftBMC: $(this).find("td:nth-child(13)").text(),
            ShiftBSpandle: $(this).find("td:nth-child(14)").text(),
            ShiftBProduction: $(this).find("td:nth-child(15)").text(),
            ShiftCHours: $(this).find("td:nth-child(16)").text(),
            ShiftCMC: $(this).find("td:nth-child(17)").text(),
            ShiftCSpandle: $(this).find("td:nth-child(18)").text(),
            ShiftCProduction: $(this).find("td:nth-child(19)").text(),
            TotalProductionKg: $(this).find("td:nth-child(20)").text(),
            TargetEfficiencyPercent: $(this).find("td:nth-child(21)").text(),
            TargetEfficiency: $(this).find("td:nth-child(22)").text(),
            EfficiencyAchievedPercent: $(this).find("td:nth-child(23)").text(),
            HundredPercentEfficiencyProduction: $(this).find("td:nth-child(24)").text(),

            DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),
        }
        SPTArray.push(TwistingObj);
    });
    //PrecisionArray
    $("#Top_Pre_TableBody .Precision").each(function () {
        var PrecisionObj = {
            Unit: $("#FactorySelect option:selected").val(),

            //TType: $(this).find("td:nth-child(2)").text(),
            //SLNo: $(this).find("td:nth-child(3)").text(),
            ItemName: $(this).find("td:nth-child(3)").text(),
            //ExpType: $(this).find("td:nth-child(5)").text(),
            //MachineRPM: $(this).find("td:nth-child(6)").text(),
            //MachineTPI: $(this).find("td:nth-child(7)").text(),

            //ShiftAHours: $(this).find("td:nth-child(8)").text(),
            ShiftAMC: $(this).find("td:nth-child(8)").text(),
            ShiftASize: $(this).find("td:nth-child(9)").text(),
            ShiftAProduction: $(this).find("td:nth-child(10)").text(),


            ShiftBMC: $(this).find("td:nth-child(12)").text(),
            ShiftBSize: $(this).find("td:nth-child(13)").text(),
            ShiftBProduction: $(this).find("td:nth-child(14)").text(),

            //ShiftCHours: $(this).find("td:nth-child(16)").text(),
            ShiftCMC: $(this).find("td:nth-child(16)").text(),
            ShiftCSize: $(this).find("td:nth-child(17)").text(),
            ShiftCProduction: $(this).find("td:nth-child(18)").text(),

            TotalProductionKg: $(this).find("td:nth-child(19)").text(),
            TotalMC: $(this).find("td:nth-child(20)").text(),
            AverageSize: $(this).find("td:nth-child(21)").text(),
            Remarks: $(this).find("td:nth-child(22)").text(),
            //HundredPercentEfficiencyProduction: $(this).find("td:nth-child(22)").text(),

            DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),
        }
        PrecisionArray.push(PrecisionObj);
    });
    //PackingArray
    $("#PackingTableBody tr.PackingRow").each(function () {

        var PackingObj = {
            Unit: $("#FactorySelect option:selected").val(),
            Item: $(this).find("td:nth-child(2)").text(),

            McA: $(this).find("td:nth-child(3)").text(),
            ProductionA: $(this).find("td:nth-child(4)").text(),
            McB: $(this).find("td:nth-child(5)").text(),
            ProductionB: $(this).find("td:nth-child(6)").text(),

            DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),
            /*  EntryDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#DDate").val())*/
        }
        PackingArray.push(PackingObj);
    });
    //LoomArray
    $("#LoomTableBody tr.LoomRow").each(function () {
        var LoomObj = {
            Unit: $("#FactorySelect option:selected").val(),

            Yearn: $(this).find("td:nth-child(2)").text(),
            Item: $(this).find("td:nth-child(3)").text(),
            Weight: $(this).find("td:nth-child(4)").text(),
            QtyPcs: $(this).find("td:nth-child(5)").text(),

            DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),


        }
        LoomArray.push(LoomObj);

    });
    //SummarySpining
    $("#summary_spining_tbody tr").each(function () {

        var SuSpObj = {
            Unit: $("#FactorySelect option:selected").val(),

            Section: $(this).find("td:nth-child(1)").text(),
            A_Hands: $(this).find("td:nth-child(2) input").val(),
            B_Hands: $(this).find("td:nth-child(3) input").val(),
            C_Hands: $(this).find("td:nth-child(4) input").val(),
            Total_ABC_Hands: $(this).find("td:nth-child(5) input").val(),

            DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),
            /*  EntryDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#DDate").val())*/

        }
        SummarySpining.push(SuSpObj);
    });
    //SummaryLoom
    $("#summary_loom_tbody tr").each(function () {

        var SuLoObj = {
            Unit: $("#FactorySelect option:selected").val(),

            Section: $(this).find("td:nth-child(1)").text(),
            A_Hands: $(this).find("td:nth-child(2) input").val(),
            B_Hands: $(this).find("td:nth-child(3) input").val(),
            C_Hands: $(this).find("td:nth-child(4) input").val(),
            Total_ABC_Hands: $(this).find("td:nth-child(5) input").val(),

            DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),
            /*  EntryDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#DDate").val())*/
        }
        SummaryLoom.push(SuLoObj);
    });
    var PowerHistory = {
        AshiftPowerLoseT: parseFloat($("#power_history_tbody tr:nth-child(1) td:nth-child(2) input").val()),
        AshiftPowerFailm: parseFloat($("#power_history_tbody tr:nth-child(1) td:nth-child(3) input").val()),
        AshiftGRunning: parseFloat($("#power_history_tbody tr:nth-child(1) td:nth-child(4) input").val()),
        BshiftPowerLoseT: parseFloat($("#power_history_tbody tr:nth-child(2) td:nth-child(2) input").val()),
        BshiftPowerFailm: parseFloat($("#power_history_tbody tr:nth-child(2) td:nth-child(3) input").val()),
        BshiftGRunning: parseFloat($("#power_history_tbody tr:nth-child(2) td:nth-child(4) input").val()),
        CshiftPowerLoseT: parseFloat($("#power_history_tbody tr:nth-child(3) td:nth-child(2) input").val()),
        CshiftPowerFailm: parseFloat($("#power_history_tbody tr:nth-child(3) td:nth-child(3) input").val()),
        CshiftGRunning: parseFloat($("#power_history_tbody tr:nth-child(3) td:nth-child(4) input").val()),

        Unit: $("#FactorySelect option:selected").val(),
        DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),


        ABCTotalPowerLoseT: parseFloat($("#power_history_tfoot tr:nth-child(1) td:nth-child(2) input").val()),
        ABCTotalPowerFailm: parseFloat($("#power_history_tfoot tr:nth-child(1) td:nth-child(3) input").val()),
        ABCTotalGRunning: parseFloat($("#power_history_tfoot tr:nth-child(1) td:nth-child(4) input").val()),

    }
    var PowerHistoryLoom = {
        AshiftPowerLoseT: parseFloat($("#power_history_loom_tbody tr:nth-child(1) td:nth-child(2) input").val()),
        AshiftPowerFailm: parseFloat($("#power_history_loom_tbody tr:nth-child(1) td:nth-child(3) input").val()),
        AshiftGRunning: parseFloat($("#power_history_loom_tbody tr:nth-child(1) td:nth-child(4) input").val()),
        BshiftPowerLoseT: parseFloat($("#power_history_loom_tbody tr:nth-child(2) td:nth-child(2) input").val()),
        BshiftPowerFailm: parseFloat($("#power_history_loom_tbody tr:nth-child(2) td:nth-child(3) input").val()),
        BshiftGRunning: parseFloat($("#power_history_loom_tbody tr:nth-child(2) td:nth-child(4) input").val()),
        CshiftPowerLoseT: parseFloat($("#power_history_loom_tbody tr:nth-child(3) td:nth-child(2) input").val()),
        CshiftPowerFailm: parseFloat($("#power_history_loom_tbody tr:nth-child(3) td:nth-child(3) input").val()),
        CshiftGRunning: parseFloat($("#power_history_loom_tbody tr:nth-child(3) td:nth-child(4) input").val()),

        Unit: $("#FactorySelect option:selected").val(),
        DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),

        ABCTotalPowerLoseT: parseFloat($("#power_history_loom_tfoot tr:nth-child(1) td:nth-child(2) input").val()),
        ABCTotalPowerFailm: parseFloat($("#power_history_loom_tfoot tr:nth-child(1) td:nth-child(3) input").val()),
        ABCTotalGRunning: parseFloat($("#power_history_loom_tfoot tr:nth-child(1) td:nth-child(4) input").val()),

    }
    var DailyFinalize = {
        TotalSP: parseFloat($("input#T_Spinning").val()),
        TotalTW: parseFloat($("input#T_Twisting").val()),
        TotalPR: parseFloat($("input#T_Precision").val()),
        TotalPK: parseFloat($("input#T_Packaging").val()),
        TotalLM: parseFloat($("input#T_Loom").val()),
        TotalHandPerTon: parseFloat($("#HandsPerTonSpinning").val()),
        TotalBagPerPerson: parseFloat($("#QtyPerPersonLoomBags").val()),

        Unit: $("#FactorySelect option:selected").val(),
        DDate: formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val()),
    }


    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/SaveFinalize2",
        data: JSON.stringify({ aSTP: SPTArray, aPrecision: PrecisionArray, aPackingFinalize2: PackingArray, aLoomFinalize2: LoomArray, aSuSpinning: SummarySpining, aSuLoom: SummaryLoom, aPowerHistory: PowerHistory, aPowerHistoryLoom: PowerHistoryLoom, date: date, Unit: Unit, aDailyFinalize2: DailyFinalize }),
        type: "POST",
        dataType: "Json",
        contentType: "application/json; charset=utf-8",

        success: function (data) {
            alert(data.d);

        },

        error: function () {
            alert("Error!")
        }
    })
}
//--GET Summary Spining------------------------------------------------------------
function GetSummarySpining() {
    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());

    var Unit = $("#FactorySelect option:selected").val();
    var GetDateUnit = {
        DDate: date,
        Unit: Unit
    }

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetSummarySpining",
        data: JSON.stringify({ aSummarySpinning: GetDateUnit }),
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var tableData = "";
            if (data.d.length > 0) {
                $.each(data.d, function (key, value) {
                    tableData += "<tr>";
                    tableData += "<td class='Section'>" + value.Section + "</td>";
                    tableData += "<td class='A-Hands text-right'><input type='text' value='" + value.A_Hands + "' /></td>";
                    tableData += "<td class='B-Hands text-right'><input type='text' value='" + value.B_Hands + "' /></td>";
                    tableData += "<td class='C-Hands text-right'><input type='text' value='" + value.C_Hands + "' /></td>";
                    tableData += "<td class='Total-Hands text-right '><input type='text' value='0.0' disabled/></td>";
                    tableData += "</tr>";
                });

            }
            $("#summary_spining_tbody").empty();
            $("#summary_spining_tbody").append(tableData);
            if (data.d.length == 0) {
                SummarySpinningTable();
            };
        },
        error: function (ex) {
            alert("Not Work GET Propaty Summary Spining!");
        }
    });
}
//--GET Summary Loom------------------------------------------------------------
function GetSummaryLoom() {
    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());
    var Unit = $("#FactorySelect option:selected").val();
    var GetDateUnit = {
        DDate: date,
        Unit: Unit
    }

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetSummaryLoom",
        data: JSON.stringify({ aSummaryLoom: GetDateUnit }),
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            var tableData = "";
            if (data.d.length > 0) {
                $.each(data.d, function (key, value) {
                    tableData += "<tr>";
                    tableData += "<td class='Section'>" + value.Section + "</td>";
                    tableData += "<td class='A-Hands text-right'><input type='text' value='" + value.A_Hands + "' /></td>";
                    tableData += "<td class='B-Hands text-right'><input type='text' value='" + value.B_Hands + "' /></td>";
                    tableData += "<td class='C-Hands text-right'><input type='text' value='" + value.C_Hands + "' /></td>";
                    tableData += "<td class='Total-Hands text-right '><input type='text' value='0.0' disabled/></td>";
                    tableData += "</tr>";
                });
            };
            $("#summary_loom_tbody").empty();
            $("#summary_loom_tbody").append(tableData);
            if (data.d.length == 0) {
                SummaryLoomTable();
            }

        },
        error: function (ex) {
            alert("Not Work GET Propaty Summary Loom!");
        }
    });
}
//--Power History------------------------------------------------------------
function GetPowerHistory() {
    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());
    var Unit = $("#FactorySelect option:selected").val();
    var GetDateUnit = {
        DDate: date,
        Unit: Unit
    }

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetPowerHistory",
        data: JSON.stringify({ aPowerHistory: GetDateUnit }),
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.d.AshiftPowerLoseT != null) {
                $("#power_history_tbody tr:nth-child(1) td:nth-child(2) input").val(data.d.AshiftPowerLoseT)
                $("#power_history_tbody tr:nth-child(1) td:nth-child(3) input").val(data.d.AshiftPowerFailm)
                $("#power_history_tbody tr:nth-child(1) td:nth-child(4) input").val(data.d.AshiftGRunning)
                $("#power_history_tbody tr:nth-child(2) td:nth-child(2) input").val(data.d.BshiftPowerLoseT)
                $("#power_history_tbody tr:nth-child(2) td:nth-child(3) input").val(data.d.BshiftPowerFailm)
                $("#power_history_tbody tr:nth-child(2) td:nth-child(4) input").val(data.d.BshiftGRunning)
                $("#power_history_tbody tr:nth-child(3) td:nth-child(2) input").val(data.d.CshiftPowerLoseT)
                $("#power_history_tbody tr:nth-child(3) td:nth-child(3) input").val(data.d.CshiftPowerFailm)
                $("#power_history_tbody tr:nth-child(3) td:nth-child(4) input").val(data.d.CshiftGRunning)
            }
            else {
                $("#power_history_tbody tr:nth-child(1) td:nth-child(2) input").val("0")
                $("#power_history_tbody tr:nth-child(1) td:nth-child(3) input").val("0")
                $("#power_history_tbody tr:nth-child(1) td:nth-child(4) input").val("0")
                $("#power_history_tbody tr:nth-child(2) td:nth-child(2) input").val("0")
                $("#power_history_tbody tr:nth-child(2) td:nth-child(3) input").val("0")
                $("#power_history_tbody tr:nth-child(2) td:nth-child(4) input").val("0")
                $("#power_history_tbody tr:nth-child(3) td:nth-child(2) input").val("0")
                $("#power_history_tbody tr:nth-child(3) td:nth-child(3) input").val("0")
                $("#power_history_tbody tr:nth-child(3) td:nth-child(4) input").val("0")
            }

        },
        error: function (ex) {
            alert("Not Work GET Power History!");
        }
    });
}
//--GET Power History(Loom)------------------------------------------------------------
function GetPowerHistoryLoom() {
    var date = formatDate("dd/mm/yyyy", "mm-dd-yyyy", $("#finalizeSelectDate").val());
    var Unit = $("#FactorySelect option:selected").val();
    var GetDateUnit = {
        DDate: date,
        Unit: Unit
    }

    $.ajax({
        url: "DailyPrecision_And_WindingProduction2.aspx/GetPowerHistoryLoom",
        data: JSON.stringify({ aPowerHistoryLoom: GetDateUnit }),
        type: "POST",
        async: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            if (data.d.AshiftPowerLoseT != null) {
                $("#power_history_loom_tbody tr:nth-child(1) td:nth-child(2) input").val(data.d.AshiftPowerLoseT);
                $("#power_history_loom_tbody tr:nth-child(1) td:nth-child(3) input").val(data.d.AshiftPowerFailm);
                $("#power_history_loom_tbody tr:nth-child(1) td:nth-child(4) input").val(data.d.AshiftGRunning);
                $("#power_history_loom_tbody tr:nth-child(2) td:nth-child(2) input").val(data.d.BshiftPowerLoseT);
                $("#power_history_loom_tbody tr:nth-child(2) td:nth-child(3) input").val(data.d.BshiftPowerFailm);
                $("#power_history_loom_tbody tr:nth-child(2) td:nth-child(4) input").val(data.d.BshiftGRunning);
                $("#power_history_loom_tbody tr:nth-child(3) td:nth-child(2) input").val(data.d.CshiftPowerLoseT);
                $("#power_history_loom_tbody tr:nth-child(3) td:nth-child(3) input").val(data.d.CshiftPowerFailm);
                $("#power_history_loom_tbody tr:nth-child(3) td:nth-child(4) input").val(data.d.CshiftGRunning);
            }
            else {
                $("#power_history_loom_tbody tr:nth-child(1) td:nth-child(2) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(1) td:nth-child(3) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(1) td:nth-child(4) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(2) td:nth-child(2) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(2) td:nth-child(3) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(2) td:nth-child(4) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(3) td:nth-child(2) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(3) td:nth-child(3) input").val("0");
                $("#power_history_loom_tbody tr:nth-child(3) td:nth-child(4) input").val("0");
            }

        },
        error: function (ex) {
            alert("Not Work GET Power History Loom!");
        }
    });
}
//Hands Per Ton Spinning && Qty Per Person Loom / Bags
function HandsPerTonSpinningQtyPerPersonLoomBags() {
    $("#HandsPerTonSpinning").val((($("input#T_Spinning").val() / 1000) / $("#summary_spining_tfoot tr td:nth-child(5) input").val()).toFixed(2));
    $("#QtyPerPersonLoomBags").val(($("input#T_Loom").val() / $("#summary_loom_tfoot tr td:nth-child(5) input").val()).toFixed(2));

    if ($("#HandsPerTonSpinning").val() == "NaN") {
        $("#HandsPerTonSpinning").val('');
    }
    if ($("#QtyPerPersonLoomBags").val() == "NaN") {
        $("#QtyPerPersonLoomBags").val('');
    }
}

