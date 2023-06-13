<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="DailyPrecision_And_WindingProduction2.aspx.cs" Inherits="FN_Jute.UI.DailyPrecision_And_WindingProduction2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="Header" runat="server">
    <%--Font--%>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <%--Heading Font--%>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <style>
        * {
            margin: 0px;
            padding: 0px;
            box-sizing: border-box;
        }

        .table_maintenance::-webkit-scrollbar {
            width: 5px;
            height: 5px;
        }

        .table_maintenance::-webkit-scrollbar-thumb {
            background-color: rgba(102,51,153,.8);
            border-radius: 10px;
        }

        .table_maintenance::-webkit-scrollbar-track {
            background-color: gainsboro;
        }

        h4 {
            font-size: 14px;
            font-weight: 700;
            color: black;
            font-family: 'Noto Serif Khojki', serif;
            margin: 5px 0 2px 0;
        }

        p {
            padding: 0;
            margin: 0;
        }

        h3 {
            font-size: 16px;
            font-weight: 700;
            color: black;
            font-family: 'Noto Serif Khojki', serif;
            margin: 0;
        }

        .Finalize_Box {
            background-color: aquamarine;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 12px;
        }

        .Finalize_Box_top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 5px 0 2px 0;
        }

        .Finalize_Box_clog {
            height: 15px;
            width: 15px;
            background-color: red;
            line-height: 15px;
            text-align: center;
            cursor: pointer;
            font-size: 10px;
            font-weight: 700;
            color: white;
            border-radius: 3px;
            text-shadow: 0px 0px 5px black;
        }

        .Finalize_Box_top .col-xs-6,
        .Finalize_Box_top .col-xs-6 p {
            padding: 5px 0 0 0;
            margin: 0px;
        }

        .Finalize_Box_top {
            width: 98%;
        }

        .Finalize_Box_body {
            width: 99%;
            background-color: gainsboro;
            margin-bottom: 5px;
        }

        .Finalize_Box_body_head {
            display: flex;
            align-items: center;
            padding: 5px 0;
        }

        .breadcrumbs ul {
            margin: 0px;
        }

            .breadcrumbs ul li a {
                color: black;
            }

            .breadcrumbs ul li {
                display: inline-block;
                font-size: 14px;
                font-weight: 700;
                color: black;
                font-family: 'Noto Serif Khojki', serif;
            }

        .pagination {
            margin: 0px;
            padding: 0px;
            width: 40%;
        }

        .breadcrumbs ul li::after {
            content: " / ";
        }

        .breadcrumbs ul li:last-child::after {
            content: "";
        }

        .finalizedate_Section h4 {
            margin: 0px;
        }

        .factory_unit,
        .finalizedate_Section {
            width: 30%;
            display: flex;
            align-items: center;
        }

            .factory_unit select,
            .finalizedate_Section input {
                width: 100px;
                height: 30px;
                border: none;
                outline: none;
                padding: 2px 2px 2px 5px;
                font-size: 14px;
                font-weight: 700;
                color: black;
                font-family: 'Noto Serif Khojki', serif;
                box-shadow: darkgray 1px 1px 2px .5px inset;
            }

        .factory_unit {
            justify-content: flex-end;
        }

        .table_maintenance {
            background-color: white;
            font-family: 'Noto Sans SC', sans-serif;
            border: 1px solid darkgray;
            max-height: 145px;
            overflow-y: scroll;
        }

            .table_maintenance thead {
                position: sticky;
                top: -1px;
                background-color: white;
            }

        .table {
            margin: 0px;
        }

        .table_maintenance table th {
            font-weight: 700;
            box-shadow: black -1px -1px 2px .5px inset;
            border: none;
        }

        .table_maintenance table > thead > tr > th,
        .table_maintenance table > tfoot > tr > td,
        .table_maintenance table > tbody > tr > td {
            padding: 1px;
        }

        .total_section .col-md-6,
        .total_section .col-md-2 {
            display: flex;
            margin: 5px 0;
            justify-content: center;
            align-items: center;
        }

            .summary_section .col-md-2 input,
            .total_section .col-md-6 input,
            .total_section .col-md-2 input {
                width: 120px;
                min-width: 80px;
                height: 30px;
                text-align: center;
                font-size: 16px;
                font-weight: 700;
                color: black;
                background-color: white;
                font-family: 'Noto Serif Khojki', serif;
                border: none;
                outline: none;
            }

        .total_section {
            border-bottom: 5px solid darkgray;
        }

        .summary_spining,
        .summary_loom {
            background-color: rgba(196,90,203,.3);
            color: black;
        }

        .summary_section .table_maintenance table th,
        .power_section .table_maintenance table th {
            box-shadow: none;
        }

        .summary_section h3 {
            display: inline-block;
        }

        .parborder {
            border: 1px solid darkgray;
            padding: 5px;
            margin: 3px 0;
        }

        .hands_par {
            margin-top: 25px;
        }

        .power_history,
        .power_loom {
            background-color: rgba(243,205,78,.5);
            color: black;
        }

        .power_section .col-md-5 {
            padding-top: 15px;
        }

        .summary_section table tr th:first-child,
        .power_section table tr th:first-child,
        .power_history table tr th:first-child,
        .power_loom table tr th:first-child {
            min-width: 80px;
        }

        tfoot input,
        tbody input {
            width: 100%;
            height: 100%;
            border: none;
            outline: none;
            text-align: right;
            background-color: transparent;
        }

            tfoot input:focus,
            tbody input:focus {
                background-color: white;
                text-align: center;
            }

        .finalige_foot {
            display: flex;
            justify-content: center;
        }

            .finalige_foot button {
                width: 100px;
                height: 30px;
                margin: 20px 5px 5px 5px;
                border-radius: 0px;
                border: none;
                box-shadow: darkgray -1px -1px 2px .5px inset;
                font-size: 16px;
                font-weight: 700;
                color: black;
                font-family: 'Noto Serif Khojki', serif;
            }

                .finalige_foot button:hover {
                    background-color: #009900;
                    color: darkgray;
                    box-shadow: black -1px -1px 2px .5px inset;
                }

        .text-bold {
            font-weight: 700;
        }

        .tableStopScroll {
            max-height: none !important;
            overflow: auto !important;
        }

        @media(max-width:580px) {
            .Finalize_Box_body_head {
                align-items: flex-start;
                flex-direction: column;
            }

            .pagination, .factory_unit, .finalizedate_Section, .factory_unit, .finalizedate_Section {
                width: 100%;
                justify-content: flex-start !important;
            }

            .finalizedate_Section {
                padding: 5px 0;
            }

            h3 {
                font-size: 14px;
            }

            .total_section .col-md-6 input, .total_section .col-md-2 input {
                min-width: 50px;
            }
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">

    <div class="Finalize_Box">
        <div class="Finalize_Box_top ">
            <p>Today Productions Finalize2</p>
            <div class="Finalize_Box_clog">X</div>
        </div>
        <div class="Finalize_Box_body ">
            <div class="Finalize_Box_body_head">
                <div class="pagination">
                    <div class="breadcrumbs">
                        <ul>
                            <li><a href="#" id="">Spinning</a></li>
                            <li><a href="#" id="">Twisting</a></li>
                            <%--<li>Precision</li>--%>
                        </ul>
                    </div>
                </div>
                <div class="finalizedate_Section">
                    <h4>Finalize&nbsp;Date:&nbsp;</h4>
                    <input type="text" name="name" value="" onchange="dateSet()"  id="finalizeSelectDate" />

                </div>
                <div class="factory_unit">
                    <h4>Factory&nbsp;Unit:&nbsp;</h4>
                    <select onchange="factoryChange()" id="FactorySelect">
                      <%--  <option value="1">Factory 1</option>
                        <option value="2">Factory 2</option>
                        <option value="3">Factory 3</option>--%>
                    </select>
                </div>
            </div>
            <div class="precision_section table-responsive table_maintenance">
                <table class="table table-bordered m-0" id="Prd_Sp_TwTable">
                    <thead>
                        <tr>
                            <th title="Item Name" class="header text-center">Item</th>
                            <th title="Export Type" class="header text-center ">Exp.Type</th>
                            <th title="Machin RPM" class="header text-center ">RPM</th>
                            <th title="Machin TPI/DIA" class="header text-center ">TPI/DIA</th>

                            <th title="	A Shift Hour" class="header text-center ">Hour&nbsp;A</th>
                            <th title="	A Shift MC" class="header text-center">MC&nbsp;A</th>
                            <th title="	A Shift Spandle" class="header text-center">SPL&nbsp;A</th>
                            <th title="	A Shift Production" class="header text-center">PRD&nbsp;A</th>

                            <th title="	B Shift Hour" class="header text-center ">Hour&nbsp;B</th>
                            <th title="	B Shift MC" class="header text-center">MC&nbsp;B</th>
                            <th title="	B Shift Spandle" class="header text-center">SPL&nbsp;B</th>
                            <th title="	B Shift Production" class="header text-center">PRD&nbsp;B</th>

                            <th title="	C Shift Hour" class="header text-center ">Hour&nbsp;C</th>
                            <th title="	C Shift MC" class="header text-center">MC&nbsp;C</th>
                            <th title="	C Shift Spandle" class="header text-center">SPL&nbsp;C</th>
                            <th title="	C Shift Production" class="header text-center">PRD&nbsp;C</th>

                            <th title="Total Production (in kg)" class="header text-center">T.P(kg)</th>
                            <th title="Target Efficiency Percent at %" class="header text-center">Tr.Ef.Per&nbsp;%</th>
                            <th title="Target Efficiencyat at %" class="header text-center">Tr.Ef&nbsp;%</th>
                            <th title="Efficiency Achieved Percent %" class="header text-center">Ef.Ac&nbsp;%</th>
                            <th title="100% Efficiency Production" class="header text-center">Ef.Prd&nbsp;%</th>
                        </tr>
                    </thead>
                    <tbody id="TopMainTableBody">
                    </tbody>
                </table>
            </div>

            <div class="pagination">
                    <div class="breadcrumbs">
                        <ul>
                            <li>Precision</li>
                        </ul>
                    </div>
                </div>

             <div class="precision_section table-responsive table_maintenance">
                <table class="table table-bordered m-0" id="Pre_Table">
                    <thead>
                        <tr>
                            <th title="Item Name" class="header text-center">Item</th>
                            <th title="Export Type" class="header text-center hidden">Exp.Type</th>
                            <th title="Machin RPM" class="header text-center hidden">RPM</th>
                            <th title="Machin TPI/DIA" class="header text-center hidden">TPI/DIA</th>

                            <th title="	A Shift Hour" class="header text-center hidden">Hour&nbsp;A</th>
                            <th title="	A Shift MC" class="header text-center">MC&nbsp;A</th>
                            <th title="	A Shift Spandle" class="header text-center">Size&nbsp;A</th>
                            <th title="	A Shift Production" class="header text-center">PRD&nbsp;A</th>

                            <th title="	B Shift Hour" class="header text-center hidden">Hour&nbsp;B</th>
                            <th title="	B Shift MC" class="header text-center">MC&nbsp;B</th>
                            <th title="	B Shift Spandle" class="header text-center">Size&nbsp;B</th>
                            <th title="	B Shift Production" class="header text-center">PRD&nbsp;B</th>

                            <th title="	C Shift Hour" class="header text-center hidden">Hour&nbsp;C</th>
                            <th title="	C Shift MC" class="header text-center">MC&nbsp;C</th>
                            <th title="	C Shift Spandle" class="header text-center">Size&nbsp;C</th>
                            <th title="	C Shift Production" class="header text-center">PRD&nbsp;C</th>

                            <th title="Total Production (in kg)" class="header text-center">T.P(kg)</th>
                            <th title="" class="header text-center">Total&nbsp;MC</th>
                            <th title="Average Size" class="header text-center">Av&nbsp;Size</th>
                            <th title="" class="header text-center">Remarks</th>
                        </tr>
                    </thead>
                    <tbody id="Top_Pre_TableBody">
                    </tbody>
                </table>
            </div>





            <div class="packing_loom_section">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-11">
                                <h4>Packing</h4>
                                <div class="packing_section table_maintenance">
                                    <table class="table table-bordered m-0" id="PackingTabl">
                                        <thead>
                                            <tr>
                                                <th class="header text-center">Item</th>
                                                <th class="header text-center">MC&nbsp;A</th>
                                                <th class="header text-center">Production&nbsp;A</th>
                                                <th class="header text-center">MC&nbsp;B</th>
                                                <th class="header text-center">Production&nbsp;B</th>

                                                <th class="header text-center">TotalP(kg)</th>
                                            </tr>
                                        </thead>
                                        <tbody id="PackingTableBody">
                                            <%--------------------------------------------------------------------------------------%>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-md-1">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">

                            <div class="col-md-1">
                            </div>
                            <div class="col-md-11">
                                <h4>Loom</h4>
                                <div class="loam_section table_maintenance">
                                    <table class="table table-bordered m-0" id="LoomTable">
                                        <thead>
                                            <tr>
                                                <th class="header text-center">Yearn</th>
                                                <th class="header text-center">Item</th>
                                                <th class="header text-center">Weight</th>
                                                <th class="header text-center">Qty&nbsp;Pcs</th>
                                            </tr>
                                        </thead>
                                        <tbody id="LoomTableBody">
                                            <%------------------------------------------------------%>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="total_section">
                <div class="row">
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-md-6 col-xs-6">
                                <h3>T.&nbsp;Spinning:&nbsp</h3>
                                <input id="T_Spinning" type="text" name="name" value="" disabled />
                            </div>
                            <div class="col-md-6 col-xs-6">
                                <h3>T.&nbsp;Twisting:&nbsp</h3>
                                <input id="T_Twisting" type="text" name="name" value="" disabled />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="row">
                            <div class="col-md-6 col-xs-6">
                                <h3>T.&nbsp;Precision:&nbsp</h3>
                                <input id="T_Precision" type="text" name="name" value="" disabled />
                            </div>
                            <div class="col-md-6 col-xs-6">
                                <h3>T.&nbsp;Packaging:&nbsp</h3>
                                <input id="T_Packaging" type="text" name="name" value="" disabled />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2 col-xs-6">
                        <h3>T.&nbsp;Loom:&nbsp</h3>
                        <input id="T_Loom" type="text" name="name" value="" disabled />
                    </div>
                </div>
            </div>

            <div class="summary_section">
                <div class="row">
                    <div class="col-md-5">
                        <h4>Summary Spining:</h4>
                        <div class="summary_spining table-responsive table_maintenance tableStopScroll">
                            <table class="table table-bordered m-0">
                                <thead>
                                    <tr>
                                        <th class="header text-center">Section</th>
                                        <th class="header text-center">A-Hands</th>
                                        <th class="header text-center">B-Hands</th>
                                        <th class="header text-center">C-Hands</th>
                                        <th class="header text-center">Total-Hands</th>
                                    </tr>
                                </thead>
                                <tbody id="summary_spining_tbody">
                                   

                                </tbody>
                                <tfoot id="summary_spining_tfoot">
                                    
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="hands_par parborder">
                            <h3>Hands Per Ton Spinning:&nbsp;</h3>
                            <input id="HandsPerTonSpinning" type="text" name="name" value="" disabled />
                            <h3>Pr.</h3>
                        </div>
                        <div class="qty_par parborder">
                            <h3>Qty Per Person Loom/Bags:&nbsp;</h3>
                            <input id="QtyPerPersonLoomBags" type="text" name="name" value="" disabled />
                            <h3>Pr.</h3>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <h4>Summary Loom:</h4>
                        <div class="summary_loom table-responsive table_maintenance tableStopScroll">
                            <table class="table table-bordered m-0">
                                <thead>
                                    <tr>
                                        <th class="header text-center">Section</th>
                                        <th class="header text-center">A-Hands</th>
                                        <th class="header text-center">B-Hands</th>
                                        <th class="header text-center">C-Hands</th>
                                        <th class="header text-center">Total-Hands</th>
                                    </tr>
                                </thead>
                                <tbody id="summary_loom_tbody">
                                   
                                </tbody>
                                <tfoot id="summary_loom_tfoot">
                                 
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <%------------------------------%>
            <div class="power_section">
                <div class="row">
                    <div class="col-md-5">
                        <h4>Power History:</h4>
                        <div class="power_history table-responsive table_maintenance tableStopScroll">
                            <table class="table table-bordered m-0">
                                <thead>
                                    <tr>
                                        <th class="header text-center">Shift</th>
                                        <th class="header text-center">Power&nbsp;Lose(T)</th>
                                        <th class="header text-center">Power&nbsp;Fail(M)</th>
                                        <th class="header text-center">G.&nbsp;Running</th>
                                    </tr>
                                </thead>
                                <tbody id="power_history_tbody">
                                    <tr>
                                        <td class="text-left">A-Shift</td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">B-Shift</td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">C-Shift</td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                    </tr>
                                    
                                </tbody>
                                <tfoot id="power_history_tfoot">
                                    <tr>
                                        <td class="text-left text-bold">Total:</td>
                                        <td class="text-right">
                                            <input class="text-bold" type="text" value="0.0" disabled/>
                                        </td>
                                        <td class="text-right">
                                            <input class="text-bold" type="text" value="0.0" disabled/>
                                        </td>
                                        <td class="text-right">
                                            <input class="text-bold" type="text" value="0.0" disabled/>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-2">
                    </div>
                    <div class="col-md-5">
                        <h4>Power History(Loom):</h4>
                        <div class="power_loom table-responsive table_maintenance tableStopScroll">
                            <table class="table table-bordered m-0">
                                <thead>
                                    <tr>
                                        <th class="header text-center">Shift</th>
                                        <th class="header text-center">Power&nbsp;Lose(T)</th>
                                        <th class="header text-center">Power&nbsp;Fail(M)</th>
                                        <th class="header text-center">G.&nbsp;Running</th>
                                    </tr>
                                </thead>
                                <tbody id="power_history_loom_tbody">
                                    <tr>
                                        <td class="text-left">A-Shift</td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">B-Shift</td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="text-left">C-Shift</td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                        <td class="text-right">
                                            <input type="text" value="0" />
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot id="power_history_loom_tfoot">
                                    <tr>
                                        <td class="text-left text-bold">Total:</td>
                                        <td class="text-right">
                                            <input class="text-bold" type="text" value="0.0" disabled/>
                                        </td>
                                        <td class="text-right">
                                            <input class="text-bold" type="text" value="0.0" disabled/>
                                        </td>
                                        <td class="text-right">
                                            <input class="text-bold" type="text" value="0.0" disabled/>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="finalige_foot">
                <button onclick="finalig();" type="button" class=""><u>F</u>inalize</button>
                <button class=""><u>R</u>eport</button>
            </div>
        </div>
    </div>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Footer" runat="server">
    <script src="../My%20Script/CommonForAll.v-1.0.0.8.js"></script>
    <script src="../My%20Script/DailyPrecision_And_WindingProduction2.js"></script>


</asp:Content>
