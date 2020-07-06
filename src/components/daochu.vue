<template>
  <div class="test">
    <button @click="handleDownClick">导出xlsx</button>
    <button @click="handleDown">导出pdf</button>
    <div id='demo'>
      <!-- <table border style="margin-bottom:30%">
        <tr>
          <td
            :colspan="14"
            style="text-align:center"
          >2020年5月28日 星期四</td>
        </tr>
        <tr class="header">
          <th></th>
          <th>room1</th>
          <th>room2</th>
          <th>room3</th>
          <th>room4</th>
          <th>room5</th>
          <th>room6</th>
          <th>room7</th>
          <th>room8</th>
          <th>room9</th>
          <th>room10</th>
          <th>room11</th>
          <th>room12</th>
          <th>room13</th>
        </tr>
        <tr>
          <td>9点</td>
          <td>9:00-10:00
            B-S4-Families
            老师待定
            已订人数：20人</td>
          <td></td>
          <td></td>
          <td>9:00-10:00
            B-S4-Families
            老师待定
            已订人数：无</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>10点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>11点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>12点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>13点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>15点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>16点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>17点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>18点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>19点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>20点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>21点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>22点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
        <tr>
          <td>23点</td>
          <td>room1</td>
          <td>room2</td>
          <td>room3</td>
          <td>room4</td>
          <td>room5</td>
          <td>room6</td>
          <td>room7</td>
          <td>room8</td>
          <td>room9</td>
          <td>room10</td>
          <td>room11</td>
          <td>room12</td>
          <td>room13</td>
        </tr>
      </table> -->
      <el-table
        border
        :data="tableData"
        style="margin-bottom:5%"
      >
        <el-table-column
          v-for="item in tableOption"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
        ></el-table-column>
      </el-table>
      <el-table
        border
        :data="tableData"
        style="margin-bottom:5%"
      >
        <el-table-column
          v-for="item in tableOption"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
        ></el-table-column>
      </el-table>
      <el-table
        border
        :data="tableData"
        style="margin-bottom:5%"
      >
        <el-table-column
          v-for="item in tableOption"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
        ></el-table-column>
      </el-table>
      <el-table
        border
        :data="tableData"
        style="margin-bottom:5%"
      >
        <el-table-column
          v-for="item in tableOption"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
        ></el-table-column>
      </el-table>
      <el-table
        border
        :data="tableData"
        style="margin-bottom:5%"
      >
        <el-table-column
          v-for="item in tableOption"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
        ></el-table-column>
      </el-table>
      <el-table
        border
        :data="tableData"
        style="margin-bottom:5%"
      >
        <el-table-column
          v-for="item in tableOption"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
        ></el-table-column>
      </el-table>
      <el-table
        border
        :data="tableData"
        style="margin-bottom:5%"
      >
        <el-table-column
          v-for="item in tableOption"
          :key="item.value"
          :label="item.label"
          :prop="item.value"
        ></el-table-column>
      </el-table>
    </div>

  </div>
</template>

<script>
import htmlToPdf from "../vendor/htmlToPdf";
import downloadfn from "../vendor/downloadfn";
import XLSX from "xlsx-style";
export default {
  data() {
    return {
      fileName: "testExcel",
      xmindJSON: [
        {
          Code: 1,
          Name: "里斯",
          GBPerfix: "ABC-F",
          stop: "测试"
        },
        {
          Code: 2,
          Name: "里斯1",
          GBPerfix: "ABC-B",
          stop: "测试1"
        },
        {
          Code: 3,
          Name: "里斯2",
          GBPerfix: "ABC-D",
          stop: "测试1"
        }
      ],
      tableData: [
        {
          time: "9点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "10点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "11点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "12点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "13点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "14点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "15点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "16点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "17点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "18点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "19点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "20点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "21点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        },
        {
          time: "22点",
          room1: "1",
          room2: "2",
          room3: "3",
          room4: "4",
          room5: "5",
          room6: "6",
          room7: "7"
        }
      ],
      tableOption: [
        { label: "时间", value: "time" },
        { label: "room1", value: "room1" },
        { label: "room2", value: "room2" },
        { label: "room3", value: "room3" },
        { label: "room4", value: "room4" },
        { label: "room5", value: "room5" },
        { label: "room6", value: "room6" },
        { label: "room7", value: "room7" }
      ],
      config: {
        colwidth: [{ wpx: 169 }, { wpx: 63 }, { wpx: 203 }, { wpx: 128 }],
        _this: this
      },
      title: ["功能模块与路径", "用例编号", "前置条件"]
    };
  },
  mounted() {},
  methods: {
    export() {
      downloadfn(this.xmindJSON, this.config);
    }, //ps  需要修改源码：在\node_modules\xlsx-style\dist\cpexcel.js 807行 的 var cpt = require(’./cpt’ + ‘able’); 改成 var cpt = cptable 不然会报错;
    /***导出xlsx */
    handleDownClick() {
      // 模拟数据
      var data = [
        {
          dataTitle: "用户统计1",
          data: [
            {
              时间: "2020-01-12",
              新注册人数: "1",
              在线人数: "1",
              累计用户数: "1"
            }
          ]
        },
        {
          dataTitle: "用户统计2",
          data: [
            {
              时间: "2020-01-12",
              新注册人数: "2",
              在线人数: "2",
              累计用户数: "2"
            }
          ]
        },
        {
          dataTitle: "用户统计3",
          data: [
            {
              时间: "2020-01-12",
              新注册人数: "3",
              在线人数: "3",
              累计用户数: "3"
            }
          ]
        }
      ];
      //表格标题
      var dataTitle = "用户统计2020-01-10-2020-01-12";
      // 配置文件类型
      const wopts = {
        bookType: "xlsx",
        bookSST: true,
        type: "binary",
        cellStyles: true
      };
      this.downloadExl(data, wopts);
    },
    // 下载功能
    saveAs(obj, fileName) {
      var tmpa = document.createElement("a");
      tmpa.download = fileName || "未命名";
      // 兼容ie
      if ("msSaveOrOpenBlob" in navigator) {
        window.navigator.msSaveOrOpenBlob(obj, "下载的文件名" + ".xlsx");
      } else {
        tmpa.href = URL.createObjectURL(obj);
      }
      tmpa.click();
      setTimeout(function() {
        URL.revokeObjectURL(obj);
      }, 100);
    },

    downloadExl(json, type) {
      let SheetNamesByde = [];
      let SheetNamesByvalue = [];
      for (let i = 0; i < json.length; i++) {
        SheetNamesByde.push(json[i].dataTitle);
        var tmpdata = json[i].data[0];
        json[i].data.unshift({});
        var keyMap = []; //获取keys
        for (var k in tmpdata) {
          keyMap.push(k);
          json[i].data[0][k] = k;
        }
        var tmpdata = []; //用来保存转换好的json
        // console.log(keyMap);
        json[i].data
          .map((v, i) => {
            // console.log(v)
            let data = keyMap.map((k, j) => {
              // console.log(k, this.getCharCol(j));
              console.log(v)
              // console.log(k)
              // console.log(v.data)
              // for (let o = 0; o < v.data.length; o++) {
                return Object.assign(
                  {},
                  {
                    v: v[k],
                    position:
                      (j > 25
                        ? this.getCharCol(j)
                        : String.fromCharCode(65 + j)) +
                      (i + 2)
                  }
                );
              // }
            });
            // console.log(data);
            console.log("----------------------");
            return data;
          })
          .reduce((prev, next) => prev.concat(next))
          .forEach((v, i) => {
            // console.log("数据", v);
            tmpdata[v.position] = {
              v: v.v
            };
          });
        var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
        tmpdata["A1"] = { v: SheetNamesByde[i] };
        outputPos = ["A1"].concat(outputPos);
        tmpdata["A1"].s = {
          font: { sz: 14, bold: true, vertAlign: true },
          alignment: { vertical: "center", horizontal: "center" },
          fill: { bgColor: { rgb: "E8E8E8" }, fgColor: { rgb: "E8E8E8" } }
        }; //<====设置xlsx单元格样式
        tmpdata["!merges"] = [
          {
            s: { c: 0, r: 0 },
            e: { c: 3, r: 0 }
          }
        ]; //<====合并单元格
        // return
        tmpdata["!cols"] = [
          { wpx: 100 },
          { wpx: 100 },
          { wpx: 100 },
          { wpx: 100 }
        ];
        //<====设置一列宽度
        tmpdata["!rows"] = [
          { hpx: 100 },
          { hpx: 100 },
          { hpx: 100 },
          { hpx: 100 }
        ];
        // console.log("单独的", tmpdata);
        SheetNamesByvalue.push(tmpdata);
      }
      // console.log(SheetNamesByde, SheetNamesByvalue);
      const tmpWB = {};
      tmpWB["SheetNames"] = SheetNamesByde;
      tmpWB["Sheets"] = {};
      for (k in SheetNamesByde) {
        // console.log(k, SheetNamesByde[k]);
        tmpWB["Sheets"][SheetNamesByde[k]] = Object.assign(
          {},
          SheetNamesByvalue[k],
          {
            "!ref": outputPos[0] + ":" + outputPos[outputPos.length - 1] //设置填充区域
          }
        );
      }
      console.log(tmpWB);
      // var tmpWB = {
      //   SheetNames: ["mySheet"], //保存的表标题
      //   Sheets: {
      //     mySheet: Object.assign(
      //       {},
      //       tmpdata, //内容
      // {
      //   "!ref": outputPos[0] + ":" + outputPos[outputPos.length - 1] //设置填充区域
      // }
      //     )
      //   }
      // };

      // console.log(tmpWB);
      // return;
      var tmpDown = new Blob(
        [
          this.s2ab(
            XLSX.write(
              tmpWB,
              {
                bookType: type == undefined ? "xlsx" : type.bookType,
                bookSST: false,
                type: "binary"
              } //这里的数据是用来定义导出的格式类型
            )
          )
        ],
        {
          type: ""
        }
      );
      // return;
      this.saveAs(
        tmpDown,
        "下载的文件名" +
          "." +
          (type.bookType == "biff2" ? "xls" : type.bookType)
      );
    },
    // 获取26个英文字母用来表示excel的列
    getCharCol(n) {
      let temCol = "",
        s = "",
        m = 0;
      while (n > 0) {
        m = (n % 26) + 1;
        s = String.fromCharCode(m + 64) + s;
        n = (n - m) / 26;
      }
      return s;
    },
    s2ab(s) {
      if (typeof ArrayBuffer !== "undefined") {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
        return buf;
      } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xff;
        return buf;
      }
    },
    /**导出pdf */
    handleDown() {
      htmlToPdf.downloadPDF(document.querySelector("#demo"), "表格");
    }
  }
};
</script>

<style lang="scss" scoped>
.test {
  padding: 10%;
}
.header {
  td {
    height: 30px;
  }
}
td {
  width: 100px;
  height: 100px;
}
</style>
