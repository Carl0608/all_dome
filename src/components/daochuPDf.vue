<template>
  <div class="mod-config">
    <div style="padding: 10px;">
      <el-button
        type="primary"
        @click="handleDown"
      >PDF下载-离职申请表</el-button>
      <el-button
        type="primary"
        @click="handleWindowPrint( '#demo', '离职申请表' )"
      >浏览器方式下载</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-back"
        @click="goBack"
      >返回
      </el-button>
    </div>
    <div style="width: 100%">
      <div id="demo">
        <table
          border="1"
          class="table_style"
        >
          <thead>
            <th
              colspan="5"
              style="font-size: 30px"
            >离职申请表</th>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">申请人</td>
              <td>工号</td>
              <td>{{111}}</td>
              <td>职位</td>
              <td>{{222}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{333}}</td>
              <td>离职原因</td>
              <td>{{444}}</td>
            </tr>
            <tr>
              <td>部门</td>
              <td>{{5555}}</td>
              <td>离岗日期</td>
              <td>{{6666}}</td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size: 20px"
              >各级审批信息</td>
            </tr>
            <tr>
              <td>审批人姓名</td>
              <td colspan="3">审批意见</td>
              <td>审批时间</td>
            </tr>
            <!-- <tr v-for="item in approvalLogs">
              <td>{{item.approveName}}</td>
              <td colspan="3">{{item.approveMsg}}</td>
              <td>{{item.approveDate.substr(0,10)}}</td>
            </tr> -->
          </tbody>
        </table>
 <table
          border="1"
          class="table_style"
        >
          <thead>
            <th
              colspan="5"
              style="font-size: 30px"
            >离职申请表</th>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">申请人</td>
              <td>工号</td>
              <td>{{111}}</td>
              <td>职位</td>
              <td>{{222}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{333}}</td>
              <td>离职原因</td>
              <td>{{444}}</td>
            </tr>
            <tr>
              <td>部门</td>
              <td>{{5555}}</td>
              <td>离岗日期</td>
              <td>{{6666}}</td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size: 20px"
              >各级审批信息</td>
            </tr>
            <tr>
              <td>审批人姓名</td>
              <td colspan="3">审批意见</td>
              <td>审批时间</td>
            </tr>
            <!-- <tr v-for="item in approvalLogs">
              <td>{{item.approveName}}</td>
              <td colspan="3">{{item.approveMsg}}</td>
              <td>{{item.approveDate.substr(0,10)}}</td>
            </tr> -->
          </tbody>
        </table>
         <table
          border="1"
          class="table_style"
        >
          <thead>
            <th
              colspan="5"
              style="font-size: 30px"
            >离职申请表</th>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">申请人</td>
              <td>工号</td>
              <td>{{111}}</td>
              <td>职位</td>
              <td>{{222}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{333}}</td>
              <td>离职原因</td>
              <td>{{444}}</td>
            </tr>
            <tr>
              <td>部门</td>
              <td>{{5555}}</td>
              <td>离岗日期</td>
              <td>{{6666}}</td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size: 20px"
              >各级审批信息</td>
            </tr>
            <tr>
              <td>审批人姓名</td>
              <td colspan="3">审批意见</td>
              <td>审批时间</td>
            </tr>
            <!-- <tr v-for="item in approvalLogs">
              <td>{{item.approveName}}</td>
              <td colspan="3">{{item.approveMsg}}</td>
              <td>{{item.approveDate.substr(0,10)}}</td>
            </tr> -->
          </tbody>
        </table>
         <table
          border="1"
          class="table_style"
        >
          <thead>
            <th
              colspan="5"
              style="font-size: 30px"
            >离职申请表</th>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">申请人</td>
              <td>工号</td>
              <td>{{111}}</td>
              <td>职位</td>
              <td>{{222}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{333}}</td>
              <td>离职原因</td>
              <td>{{444}}</td>
            </tr>
            <tr>
              <td>部门</td>
              <td>{{5555}}</td>
              <td>离岗日期</td>
              <td>{{6666}}</td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size: 20px"
              >各级审批信息</td>
            </tr>
            <tr>
              <td>审批人姓名</td>
              <td colspan="3">审批意见</td>
              <td>审批时间</td>
            </tr>
            <!-- <tr v-for="item in approvalLogs">
              <td>{{item.approveName}}</td>
              <td colspan="3">{{item.approveMsg}}</td>
              <td>{{item.approveDate.substr(0,10)}}</td>
            </tr> -->
          </tbody>
        </table>
         <table
          border="1"
          class="table_style"
        >
          <thead>
            <th
              colspan="5"
              style="font-size: 30px"
            >离职申请表</th>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">申请人</td>
              <td>工号</td>
              <td>{{111}}</td>
              <td>职位</td>
              <td>{{222}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{333}}</td>
              <td>离职原因</td>
              <td>{{444}}</td>
            </tr>
            <tr>
              <td>部门</td>
              <td>{{5555}}</td>
              <td>离岗日期</td>
              <td>{{6666}}</td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size: 20px"
              >各级审批信息</td>
            </tr>
            <tr>
              <td>审批人姓名</td>
              <td colspan="3">审批意见</td>
              <td>审批时间</td>
            </tr>
            <!-- <tr v-for="item in approvalLogs">
              <td>{{item.approveName}}</td>
              <td colspan="3">{{item.approveMsg}}</td>
              <td>{{item.approveDate.substr(0,10)}}</td>
            </tr> -->
          </tbody>
        </table>
         <table
          border="1"
          class="table_style"
        >
          <thead>
            <th
              colspan="5"
              style="font-size: 30px"
            >离职申请表</th>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">申请人</td>
              <td>工号</td>
              <td>{{111}}</td>
              <td>职位</td>
              <td>{{222}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{333}}</td>
              <td>离职原因</td>
              <td>{{444}}</td>
            </tr>
            <tr>
              <td>部门</td>
              <td>{{5555}}</td>
              <td>离岗日期</td>
              <td>{{6666}}</td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size: 20px"
              >各级审批信息</td>
            </tr>
            <tr>
              <td>审批人姓名</td>
              <td colspan="3">审批意见</td>
              <td>审批时间</td>
            </tr>
            <!-- <tr v-for="item in approvalLogs">
              <td>{{item.approveName}}</td>
              <td colspan="3">{{item.approveMsg}}</td>
              <td>{{item.approveDate.substr(0,10)}}</td>
            </tr> -->
          </tbody>
        </table>
         <table
          border="1"
          class="table_style"
        >
          <thead>
            <th
              colspan="5"
              style="font-size: 30px"
            >离职申请表</th>
          </thead>
          <tbody>
            <tr>
              <td rowspan="3">申请人</td>
              <td>工号</td>
              <td>{{111}}</td>
              <td>职位</td>
              <td>{{222}}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{333}}</td>
              <td>离职原因</td>
              <td>{{444}}</td>
            </tr>
            <tr>
              <td>部门</td>
              <td>{{5555}}</td>
              <td>离岗日期</td>
              <td>{{6666}}</td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size: 20px"
              >各级审批信息</td>
            </tr>
            <tr>
              <td>审批人姓名</td>
              <td colspan="3">审批意见</td>
              <td>审批时间</td>
            </tr>
            <!-- <tr v-for="item in approvalLogs">
              <td>{{item.approveName}}</td>
              <td colspan="3">{{item.approveMsg}}</td>
              <td>{{item.approveDate.substr(0,10)}}</td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import htmlToPdf from "../utils/htmlToPdf";
const libraryOption = [
  { id: 0, name: "家庭原因" },
  { id: 1, name: "个人发展" },
  { id: 2, name: "薪资福利" },
  { id: 3, name: "工作环境" },
  { id: 4, name: "工作时间" },
  { id: 5, name: "身体健康" }
];
const calendarTypeKeyValue = libraryOption.reduce((acc, cur) => {
  acc[cur.id] = cur.name;
  return acc;
}, {});
export default {
  name: "PdfDemo",
  data() {
    // 和导出pdf没关系
    return {
      leaveData: {
        dimId: ""
      },
      approvalLogs: []
    };
  },
  filters: {
    typeFilter(type) {
      return calendarTypeKeyValue[type];
    }
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.leaveData = this.$route.query.obj;
      if (!this.leaveData.dimId) {
        this.$message.error("id不能为空，请从下下载！");
        this.goBack();
      } else {
        this.$http({
          url: this.$http.adornUrl(`/sys/sysapprovelog/list`),
          method: "post",
          data: {
            approve_type: 6,
            approve_id: this.leaveData.dimId
          }
        }).then(({ data }) => {
          console.log(data);
          if (data && data.code === 0) {
            this.approvalLogs = data.sysApproveLogs;
            console.log("------------2------------", this.approvalLogs);
          }
        });
      }
      console.log("------------1------------", this.leaveData);
    },
    handleWindowPrint(ele, fileName) {
      // 留存原来的 html
      // let bdHtml = window.document.body.innerHTML;
      // let bdHtml = document.querySelector('#app').innerHTML;

      // 要打印的 内容 html
      // document.body.innerHTML =  document.querySelector('#demo').innerHTML;
      // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
      // document.querySelector('#app').innerHTML =  document.querySelector('#demo').outerHTML;
      // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
      console.log(666);
      // 去除页面不必要的 head 标签内  内容， 避免影响打印页 ， title 为保存为 pdf 的文件时的 文件名
      document.head.innerHTML =
        '<meta charset="utf-8">\n' +
        " <title> " +
        fileName +
        "</title>\n" +
        ' <meta name="format-detection" content="telephone=no">\n' +
        ' <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
        ' <meta name="viewport" content="width=device-width,initial-scale=1.0">\n' +
        ' <link rel="stylesheet" href="../../static/css/contract.css"/>'; // 生成pdf的外部css样式
      document.body.innerHTML =  document.querySelector('#demo').outerHTML;
      // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
      // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
    //   document.body.innerHTML = document.querySelector(ele).outerHTML;

      // window.print();

      // 转异步 等待dom元素渲染（样式）完毕在打印
      setTimeout(() => {
        // 打印
        window.print();
        // 刷新页面
        window.location.reload();
      }, 20);

      // 重新设会当前页面
      // window.document.body.innerHTML = bdHtml;
      // document.querySelector('#app').innerHTML =  bdHtml;
      // 刷新页面
      // window.location.reload();
    },
    goBack() {
      this.$router.go(-1);
    },
    handleDown() {
      htmlToPdf.downloadPDF(document.querySelector("#demo"), "离职申请表");
    }
  }
};
</script>

<style scoped>
#demo {
  background-color: #fff;
  width: 1000px;
  /* height: 400px; */
  margin: auto;
  padding: 40px;
  box-sizing: border-box;
}

.table_style td,
th {
  padding: 10px;
  font-size: 15px;
}

.table_style {
  border-collapse: collapse;
  width: 100%;
  text-align: center;
}
</style>

