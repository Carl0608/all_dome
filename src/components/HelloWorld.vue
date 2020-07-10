<template>
  <div class="home">
    <el-button v-print="printObj">打印</el-button>
    <div class="table_class">
      <div id="print">
        <div style="page-break-after:always;">
          <h2 style="color:#ccc;text-align:center"><span style="font-size:50px;padding-right:50px">迪迪英语</span> 学生注册登记表</h2>
          <table border>
            <tr>
              <td
                colspan='5'
                style="font-size:20px;height:50px;line-height:50px"
              >学生资料</td>
            </tr>
            <tr>
              <td>中文名</td>
              <td>宋超</td>
              <td>英文名</td>
              <td></td>
              <td rowspan='7'></td>
            </tr>
            <tr>
              <td>性别</td>
              <td>男</td>
              <td>学号</td>
              <td>A18000954</td>
            </tr>
            <tr>
              <td>工作单位</td>
              <td></td>
              <td>合同号</td>
              <td></td>
            </tr>
            <tr>
              <td>电话</td>
              <td>15268641757</td>
              <td>家庭住址</td>
              <td></td>
            </tr>
            <tr>
              <td>省 / 市</td>
              <td></td>
              <td>手机</td>
              <td>15268641757</td>
            </tr>
            <tr>
              <td>课程顾问</td>
              <td>刘群英.Sophie.lqy</td>
              <td>区县</td>
              <td></td>
            </tr>
            <tr>
              <td>OC课时间</td>
              <td></td>
              <td>Tutor</td>
              <td></td>
            </tr>
            <tr style="font-size:20px;height:50px;line-height:50px">
              <td colspan='2'>课程信息</td>
              <td colspan='3'>身份证信息</td>
            </tr>
            <tr>
              <td>注册课程</td>
              <td></td>
              <td>身份证姓名</td>
              <td colspan='2'></td>
            </tr>
            <tr>
              <td>学费</td>
              <td></td>
              <td>身份证出生日期</td>
              <td colspan='2'></td>
            </tr>
            <tr>
              <td>实收学费</td>
              <td></td>
              <td>身份证号码</td>
              <td colspan='2'></td>
            </tr>
            <tr>
              <td>课程固定级别</td>
              <td></td>
              <td></td>
              <td colspan='2'></td>
            </tr>
            <tr>
              <td>开始级别</td>
              <td></td>
              <td></td>
              <td
                colspan='2'
                style="font-size :18px"
              >
                注意：以身份证信息为准
              </td>
            </tr>
            <tr>
              <td colspan="5">
                Business Advanced和Advanced级别仅提供云中心网络课程。
              </td>
            </tr>
            <tr>
              <td
                colspan="5"
                style="font-size :18px"
              >
                赠送
              </td>
            </tr>
            <tr>
              <td>赠送级别数量</td>
              <td></td>
              <td>有价赠送礼品</td>
              <td colspan='2'></td>
            </tr>
            <tr>
              <td>合同期限</td>
              <td></td>
              <td>免费延期</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>学习地点</td>
              <td colspan="4"></td>
            </tr>
            <tr>
              <td colspan="5">
                签名
              </td>
            </tr>
            <tr>
              <td rowspan="6"></td>
              <td colspan="4">请认真阅读注册登记表正反的相关条款，如果无疑问，请在下面的空白片签名。</td>
            </tr>
            <tr>
              <td colspan="4">注册生效日期为交费的日期。注册后，本学校将向学生提供必要的学习设备及教学人员。</td>
            </tr>
            <tr>
              <td colspan="2">学生正楷签名</td>
              <td colspan="2">学生顾问正楷签名</td>
            </tr>
            <tr>
              <td colspan="2">学生手写签名</td>
              <td colspan="2">学生顾问手写签名</td>
            </tr>
            <tr>
              <td colspan="2"><span style="padding-left:30px">日</span><span style="padding-left:30px">期</span></td>
              <td colspan="2"><span style="padding-left:30px">日</span><span style="padding-left:30px">期</span></td>
            </tr>
            <tr>
              <td colspan="4"></td>
            </tr>
          </table>
        </div>

        <div>
          <div class="top_box">
            <h2 style="font-size:20px;width:40%">义乌迪迪英语培训部有限公司</h2>
            <div style=" border-left: 1px dashed #ccc;border-right: 1px dashed #ccc;width:35%">学生入学注册合同</div>
            <div style="width:25%">
              <div style="height:49px;line-height:49px;"></div>
              <div style="height:49px;line-height:49px; border-top: 1px dashed #ccc;width:100%">（固定时间 固定级别）</div>
            </div>
          </div>
          <div class="p_cont">
            <p>Part I 总则 </p>
            <p>1、义乌迪迪英语培训部有限公司（以下简称“迪迪”），为学员提供英语教学服务。 </p>
            <p>2、经咨询沟通，学员已充分知悉并认可迪迪英语课程的特点、师资、教学方法、课件、教学软件及平台等教学服务。迪迪提供的课程类型、课程排期、课程数量以课程表形式公布，学员按照课程表安排学习并认可课程表是迪迪提供教学培训服务的重要依据。 </p>
            <p>3、学员同意并授权迪迪在保证学员隐私不受侵犯的情况下，可将学员信息用于内部数据存档、备案等目的。</p>
            <p>4、为确保教学效果，每个级别的课程应在3个月内完成。考虑到学员学习能力差异及工作加班、出差等情况，迪迪给予每个级别3个月的免费延期，但每个级别最长不超过6个月；该免费延期计入学习期限，不计入合同期限。</p>
            <p>5、《学生注册登记表》是本合同重要组成部分，合同期限及课程信息以《学生注册登记表》记载为准。本合同为附期限合同，学习期限届满本合同自行终止，迪迪将不再按照本合同规定提供相关课程之教学服务。学员如在学习期限届满后，仍然要求学习的，应另行签订合同重新注册并支付相应学费。</p>
            <p>Part II 双方的权利及义务 </p>
            <p>1、依据课程表及课程类型，迪迪通过线上或线下的方式向学员提供培训服务并提供相应学习设施。迪迪通过手机端或电脑端向学员提供下载、使用多媒体课件的服务。</p>
            <p>2、迪迪有义务将学员订课及课程学习情况等信息录入学员档案，双方认可将上述信息作为考查学员学习进度的依据。</p>
            <p>3、自学习开始之日起两周内，学员可以向迪迪申请级别调整，学员填写《级别调整申请表》并得到迪迪批准后，迪迪为学员调整级别。学习开始之日起两周后，迪迪将不再提供上述服务。 </p>
            <p>4、学员完成当前级别课程后需要学习下一个级别的，应填写《升级调整申请表》向迪迪申请开放新级别的多媒体课件。新级别多媒体课件开放后，原级别多媒体课件将被系统自动关闭；如学员需要重新开放已学级别的多媒体课件，需要重新向迪迪提交申请并支付每级别每六个月1800元的课件使用费。 </p>
            <p>5、迪迪提供的多媒体课件仅限学员本人使用，学员将账号、密码告知他人使用或使用他人账号与密码的，迪迪有权关闭学员课件并终止本合同。</p>
            <p>6、学员可通过以下方式向迪迪支付费用：1）现金2）微信 3）支付宝4）银行卡刷卡。。</p>
            <p>7、学员知悉并认同迪迪的教学模式，亦认可迪迪具备本合同项下英语培训服务的资质和能力。双方认同，教学成绩的体现在于双方的共同努力，学员承诺按照迪迪公布的课程表控制学习进度，在学习期限内每周不少于5个小时在迪迪学习，并在学习期限内完成各项课程。因学员缺席、不至迪迪学习等原因致使在学习期限内未完成课程的，由学员自行负责。</p>
            <p>8、迪迪在发生下述情形时为学员办理退学，但迪迪仍希望学员能够克服学习困难完成注册课程： </p>
            <p>◆本合同签订之日起15天以内（含15天），学员提交《退学申请单》并经迪迪认可的，迪迪在扣除刷卡手续费（如有）、学员个人账号使用费用后将余款退还给学员，账号使用费总计200元； </p>
            <p>◆本合同签订之日起超过15天至合同期限的50%，学员无法定理由而单方解约的，则学员应按照退费申请对应级别承担学费，并承担教学管理服务费人民币贰仟元整（含课件版权使用费、平台管理费、材料费等）、剩余学费10%的违约金、刷卡手续费</p>
            <p>（如有）； </p>
            <p>◆合同期限超过50%，学员无法定理由而单方解约的，不予退费。 </p>
            <p>注： “合同期限”是以学员首次签署《入学注册合同》中记载的期限为准；如有续费、延期(无论付费或免费)，该续费或延期时间不计入合同期限。</p>
            <p>注：赠送课程（如有）不计算在内，不适用本条款。</p>
            <p>学员办理退学，应当提供迪迪向其开具的发票，否则迪迪无法受理。因学员未提供发票造成损失的，应由学员自行承担。</p>
            <p>9、学员在合同约定的学习期限内未完成相应课程的，有权在学习期限届满前填写《延期补款注册申请表》并提交迪迪审核同意后，按照下方规则申请付费延期：</p>
            <p>◆每个级别课程享受二个月延期，延期费为每月人民币伍佰元整（￥500.00）； </p>
            <p>◆如超过上述期限，则超出部分的延期费为每月人民币壹仟元整（￥1000.00）。但每级别延期时间不超过六个月。</p>
            <p>10、学员应遵循正常的教学秩序，对于扰乱教学秩序、干扰迪迪运营的学员（如吵闹、蹭课、酗酒、打架斗殴、故意伤害、盗窃等），迪迪将给予书面警告。 如学员经两次书面警告仍未纠正的，迪迪有权解除本合同，剩余学费将作为违约金不予退还学员。</p>
            <p>Part III 其他 </p>
            <p>1、为保障学员权益，迪迪在此特别提醒，任何私自交易的收费项目，迪迪不承担任何责任。</p>
            <p>2、赠品（若有）不兑换现金。赠品涉及费用抵扣的，不得抵扣退学时学员应承担的费用；享受有价赠品的学员退学时，应当按赠品赠送时市价向迪迪返还赠品费用。</p>
            <p>3、双方的权利及义务以本合同打印内容为准，任何以手写、口头或其他形式对本合同进行的修改或补充均视为无效</p>
            <p>4、本合同经双方签署后生效，本合同全部或部分转让无效。 </p>
            <p>5、本合同一式两份，双方各执一份，经双方签署并迪迪盖章后生效，具有同等法律效力。 </p>
            <p>6、 为了维护学员的权益，请学员（监护人）仔细阅读本合同并抄写如下语句，谢谢配合！</p>
            <p>“本人已查阅该合同及公示的收费标准，理解并同意本合同项下各项条款及迪迪的收退费规则、课程特点、教学制度等方案。”</p>
            <div style="border:2px solid #000;margin-bottom:10px"></div>
            <div style="border:1px dashed #ccc">
              <div style="height:50px;line-height:50px">
                <div style=" display: inline-block;width:60%;border-right:1px dashed #ccc">学员阅读并签名：</div>
                <div style="display: inline-block;">迪迪代表：</div>
              </div>
              <div style="border-top:1px dashed #ccc;border-bottom:1px dashed #ccc;height:50px;line-height:50px">法定监护人阅读并签名（学员未满18周岁）：</div>
              <div style="height:50px;line-height:50px">
                <div style=" display: inline-block;width:60%;border-right:1px dashed #ccc">日期：</div>
                <div style="display: inline-block;">日期：</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div>

    </div>
  </div>
</template>
<script>
//富文本
// import { VueEditor } from "vue2-editor";
//直播
// import "video.js/dist/video-js.css";
// import { videoPlayer } from "vue-video-player";
// import "videojs-flash";
import { regionDataPlus } from "element-china-area-data";
export default {
  components: {
    // videoPlayer
    // VueEditor
  },

  data() {
    return {
      value: "",
      playerOptions: {
        notSupportedMessage: "此视频暂无法播放，请稍后再试",
        height: "300",
        language: "zh-CN",
        aspectRatio: "16:9",
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          currentTimeDisplay: false, // 当前时间
          volumeControl: false, // 声音控制键
          playToggle: false, // 暂停和播放键
          progressControl: false, // 进度条
          fullscreenToggle: false // 全屏按钮
        },
        sources: [
          {
            type: "rtmp/mp4",
            src:
              "rtmp://rtmp01open.ys7.com/openlive/933b365272af4240aeed5ef125f0aaf6.hd"
          }
        ],
        techOrder: ["flash"],
        autoplay: true,
        controls: true
      },
      center: { lng: 109.45744048529967, lat: 36.49771311230842 },
      zoom: 13,
      options: regionDataPlus,
      selectedOptions: [],
      printObj: {
        id: "print",
        popTitle: "good print",
        extraCss: "",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      }
    };
  },
  mounted() {
    // var map = new BMap.Map("container");
    // var point = new BMap.Point(116.404, 39.915);
    // map.centerAndZoom(point, 15);
    // let player;
    // setTimeout(() => {
    //   player = new EZUIKit.EZUIPlayer("myPlayer");
    // }, 2);
    // player.play();
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handler({ BMap, map }) {
      var point = new BMap.Point(120.219375416, 30.2592444615);
      map.centerAndZoom(point, 13);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中

      var circle = new BMap.Circle(point, 6, {
        strokeColor: "Red",
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: "Red",
        fillColor: "#f03"
      });
      map.addOverlay(circle);
    },
    getClickInfo(e) {
      this.center.lng = e.point.lng;
      this.center.lat = e.point.lat;
    }
  }
};
</script>

<style >
.home {
  padding: 0 auto;
}
.table_class {
  display: flex;
  justify-content: center;
  align-items: center;
}
table {
  border-collapse: collapse;
  border: 1px solid #000;
  color: #000;
  font-size: 14px;
  font-family: "微软雅黑";
  border-spacing: 0;
}

td,
th {
  padding: 0;
  width: 150px;
  border: 1px dashed #ccc;
  padding: 0 10px;
  height: 32px;
  line-height: 32px;
}
.p_cont > p {
  line-height: 20px;
}
.top_box {
  height: 80px;
  line-height: 80px;
  display: flex;
  align-items: center;
  border: 1px dashed #ccc;
}
@media print {
  .top_box {
    height: 80px;
    line-height: 80px;
    display: flex;
    align-items: center;
    border: 1px dashed #ccc;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #000;
    color: #000;
    font-size: 14px;
    font-family: "微软雅黑";
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    width: 10%;
    border: 1px dashed #ccc;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
  }
}
</style>
