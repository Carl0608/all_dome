<template>
  <div class="daochu">
    <div id="tablesDiv">
      <table
        id="tabDiv1"
        border
        style="margin-bottom:10px"
      >
        <tr>
          <td colspan="3">
            2020-02-02
          </td>
        </tr>
        <tr>
          <td>ID</td>
          <td>姓名</td>
          <td>年龄</td>
        </tr>
        <tr>
          <td>0001</td>
          <td>张三</td>
          <td>24</td>
        </tr>
      </table>
      <table
        id="tabDiv2"
        border
        style="margin-bottom:10px"
      >
        <tr>
          <td colspan="3">
            2020-02-02
          </td>
        </tr>
        <tr>
          <td v-for="item in list" :key="item">ID</td>
        </tr>
        <tr>
          <td>0002</td>
          <td>李四</td>
          <td>24</td>
        </tr>
      </table>
      <table
        id="tabDiv3"
        border
        style="margin-bottom:10px"
      >
        <tr>
          <td colspan="3">
            2020-02-02
          </td>
        </tr>
        <tr>
          <td>ID</td>
          <td>姓名</td>
          <td>年龄</td>
        </tr>
        <tr>
          <td>0003</td>
          <td>王五</td>
          <td>24</td>
        </tr>
      </table>
      <button @click="exp()">export to excel...</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    exp() {
      this.tablesToExcel(
        ["tabDiv1", "tabDiv2", "tabDiv3"],
        ["sheet1", "sheet2", "sheet3"],
        "testExport.xls",
        "Excel"
      );
    },
    //导出excel包含多个sheet
    //tables:tableId的数组;wsbames:sheet的名字数组;wbname:工作簿名字;appname:Excel
    tablesToExcel(tables, wsnames, wbname, appname) {
      var uri = "data:application/vnd.ms-excel;base64,",
        tmplWorkbookXML =
          '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">' +
          '<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office"><Author>Axel Richter</Author><Created>{created}</Created></DocumentProperties>' +
          "<Styles>" +
          '<Style ss:ID="Currency"><NumberFormat ss:Format="Currency"></NumberFormat></Style>' +
          '<Style ss:ID="Date"><NumberFormat ss:Format="Medium Date"></NumberFormat></Style>' +
          "</Styles>" +
          "{worksheets}</Workbook>",
        tmplWorksheetXML =
          '<Worksheet ss:Name="{nameWS}"><Table>{rows}</Table></Worksheet>',
        tmplCellXML =
          '<Cell{attributeStyleID}{attributeFormula}><Data ss:Type="{nameType}">{data}</Data></Cell>',
        base64 = function(s) {
          return window.btoa(unescape(encodeURIComponent(s)));
        },
        format = function(s, c) {
          return s.replace(/{(\w+)}/g, function(m, p) {
            return c[p];
          });
        };

      var ctx = "";
      var workbookXML = "";
      var worksheetsXML = "";
      var rowsXML = "";

      for (var i = 0; i < tables.length; i++) {
        if (!tables[i].nodeType) tables[i] = document.getElementById(tables[i]);

        //           控制要导出的行数
        for (var j = 0; j < tables[i].rows.length; j++) {
          rowsXML += "<Row>";

          for (var k = 0; k < tables[i].rows[j].cells.length; k++) {
            var dataType = tables[i].rows[j].cells[k].getAttribute("data-type");
            var dataStyle = tables[i].rows[j].cells[k].getAttribute(
              "data-style"
            );
            var dataValue = tables[i].rows[j].cells[k].getAttribute(
              "data-value"
            );
            dataValue = dataValue
              ? dataValue
              : tables[i].rows[j].cells[k].innerHTML;
            var dataFormula = tables[i].rows[j].cells[k].getAttribute(
              "data-formula"
            );
            dataFormula = dataFormula
              ? dataFormula
              : appname == "Calc" && dataType == "DateTime"
              ? dataValue
              : null;
            ctx = {
              attributeStyleID:
                dataStyle == "Currency" || dataStyle == "Date"
                  ? ' ss:StyleID="' + dataStyle + '"'
                  : "",
              nameType:
                dataType == "Number" ||
                dataType == "DateTime" ||
                dataType == "Boolean" ||
                dataType == "Error"
                  ? dataType
                  : "String",
              data: dataFormula ? "" : dataValue,
              attributeFormula: dataFormula
                ? ' ss:Formula="' + dataFormula + '"'
                : ""
            };
            rowsXML += format(tmplCellXML, ctx);
          }
          rowsXML += "</Row>";
        }
        ctx = { rows: rowsXML, nameWS: wsnames[i] || "Sheet" + i };
        worksheetsXML += format(tmplWorksheetXML, ctx);
        rowsXML = "";
      }

      ctx = { created: new Date().getTime(), worksheets: worksheetsXML };
      workbookXML = format(tmplWorkbookXML, ctx);

      //       查看后台的打印输出
      //console.log(workbookXML);

      var link = document.createElement("A");
      link.href = uri + base64(workbookXML);
      link.download = wbname || "Workbook.xls";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
