import XLSX from "xlsx"
// 配置
const wopts = {
  bookType: "xlsx",
  bookSST: true,
  type: "binary",
  cellStyles: true
};

function downloadExl(json, config, type) {
  var tmpdata = json[0];
  json.unshift({
    tableTitle: '2020-06-07'
  });
  var keyMap = []; //获取keys
  for (var k in tmpdata) {
    keyMap.push(k);
    json[0][k] = k;
  }
  var tmpdata = []; //用来保存转换好的json
  console.log(json)
  //   return
  let border = {
    bottom: {
      style: "thin",
      color: {
        rgb: "000000"
      }
    },
    top: {
      style: "thin",
      color: {
        rgb: "000000"
      }
    },
    left: {
      style: "thin",
      color: {
        rgb: "000000"
      }
    },
    right: {
      style: "thin",
      color: {
        rgb: "000000"
      }
    }
  };

  let style0 = {
    border: border,
    alignment: {
      horizontal: "center",
      wrapText: true,
      vertical: "center"
    },
    font: {
      sz: 18,
      bold: true,
      color: {
        rgb: "000000"
      },
      outline: true
    },
    fill: {
      bgColor: {
        indexed: 64
      }
    }
  };
  let style1 = {
    border: border,
    alignment: {
      horizontal: "center",
      wrapText: true,
      vertical: "center"
    },
    font: {
      sz: 12,
      bold: true,
      color: {
        rgb: "000000"
      },
      outline: true
    },
    fill: {
      bgColor: {
        indexed: 64
      }
    }
  };
  json
    .map((v, i) =>
      keyMap.map((k, j) =>
        Object.assign({}, {
          v: v[k],
          position: (j > 25 ? getCharCol(j) : String.fromCharCode(65 + j)) +
            (i + 1)
        })
      )
    )
    .reduce((prev, next) => prev.concat(next))
    .forEach((v, i) => {
      // 在遍历时修改样式
      let s = {
        font: {
          sz: 10,
          name: "微软雅黑"
        },
        alignment: {
          horizontal: "center",
          wrapText: true,
          vertical: "center"
        }
      };
      console.log(config)
    //   return
      // 判断是否是标题
      console.log(v)
    //   return
      if (config._this.title.includes(v.v) && v.position.length == 2 && v.position[1] == "1") {
        s.fill = {
          fgColor: {
            rgb: "008000"
          }
        };
        s.border = {
          right: {
            style: "thin",
            color: {
              rgb: "000000"
            }
          }
        };
        // 判断是否是需要红色字体的标题字段
        if (config._this.redTitle.includes(v.v)) {
          s.font.color = {
            rgb: "ff0000"
          };
        }
      }
      tmpdata[v.position] = {
        v: v.v || "",
        s
      };
    });
  var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
  //设置每列对应的宽度
  tmpdata["!margins"] = [{ //工作表单元格合并配置项 可选
      s: { //s start 开始
        c: 0, //cols 开始列
        r: 2 //rows 开始行
      }, //开始 A1
      e: { //e end  结束
        c: 4, //cols 结束列
        r: 0 //rows 结束行
      }
    },
    {
      s: {
        c: 0,
        r: 2
      }, //开始 A2
      e: {
        c: 1,
        r: 2
      } //结束B2
    },
    {
      s: {
        c: 2,
        r: 2
      }, //开始 C2
      e: {
        c: 3,
        r: 2
      } //结束D2
    },
  ]
  // !cols工作表列宽配置项 可选
  tmpdata["!cols"] = config.colwidth;


  //        第一二行样式
  tmpdata["A1"].s = style0;
  tmpdata["A2"].s = style1;
  tmpdata["C2"].s = style0;
  var tmpWB = {
    SheetNames: ["mySheet"], //工作表名数组
    Sheets: {
      mySheet: Object.assign({},
        tmpdata, //!ref设置工作表的范围 如 必须 否则不显示
        {
          "!ref": outputPos[0] + ":" + outputPos[outputPos.length - 1] //设置填充区域
        }
      )
    }
  };
  const tmpDown = new Blob(
    [
      s2ab(
        XLSX.write(
          tmpWB, {
            bookType: type == undefined ? "xlsx" : type,
            bookSST: false,
            type: "binary"
          } //这里的数据是用来定义导出的格式类型
        )
      )
    ], {
      type: ""
    }
  );
  // 数据处理完后传入下载
  saveAs(
    tmpDown,
    config._this.fileName +
    "." +
    (wopts.bookType == "biff2" ? "xls" : wopts.bookType)
  );
}
// 获取26个英文字母用来表示excel的列
function getCharCol(n) {
  let temCol = "",
    s = "",
    m = 0;
  while (n > 0) {
    m = (n % 26) + 1;
    s = String.fromCharCode(m + 64) + s;
    n = (n - m) / 26;
  }
  return s;
}

function s2ab(s) {
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
}
// 下载功能
function saveAs(obj, fileName) {
  var tmpa = document.createElement("a");
  tmpa.download = fileName || "未命名";
  // 兼容ie 火狐 下载文件
  if ("msSaveOrOpenBlob" in navigator) {
    window.navigator.msSaveOrOpenBlob(obj, fileName);
  } else if (window.navigator.userAgent.includes("Firefox")) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(obj);
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
  } else {
    tmpa.href = URL.createObjectURL(obj);
  }
  tmpa.click();
  setTimeout(function () {
    URL.revokeObjectURL(obj);
  }, 100);
}
export default downloadExl;
