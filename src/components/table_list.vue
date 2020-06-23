<template>
  <div>
    <el-date-picker
      v-model="value"
      type="date"
      value-format="yyyy-MM-dd"
      placeholder="选择日期"
      @change="dataChange"
    >
    </el-date-picker>
    <FullCalendar
      ref="fullCalendar"
      defaultView="timeGridWeek"
      locale="zh-cn"
      firstDay="1"
      :buttonText="buttonText"
      weekNumberCalculation="ISO"
      :eventTimeFormat="evnetTime"
      :businessHours="businessHours"
      :header="header"
      :custom-buttons="customButtons"
      @dateClick="handleDateClick"
      :plugins="calendarPlugins"
      :events="calendarEvents"
      minTime='08:00'
      maxTime="22:00"
      @eventClick="handleEventClick"
    />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlulgin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/core/main.css";
var that = this
export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      value: new Date(),
      calendarPlugins: [dayGridPlugin, interactionPlugin, timeGridPlulgin],
      header: {
        left: "prev,next today",
        center: "title",
        right: "timeGridWeek,timeGridDay"
      },
      customButtons: {
        prev: {
          // this overrides the prev button
          text: "PREV",
          click: e => {
            let calendarApi = this.$refs.fullCalendar.getApi();
            // calendarApi.prev();

            console.log(that.$refs.fullCalendar.getView());
            console.log(calendarApi.view.title);
            // console.log(this.$refs.fullCalendar.getView() );
            // let n = this.$(".fc-center h2")
            // console.log(n);
            // console.log(calendarApi);
            console.log("eventPrev", e);
          },
          next: {
            // this overrides the next button
            text: "PREV",
            click: () => {
              console.log("eventNext");
              let calendarApi = this.$refs.fullCalendar.getApi();
              calendarApi.next();
            }
          }
        }
      },
      buttonText: {
        today: "今天",
        month: "月",
        week: "周",
        day: "天"
      },
      evnetTime: {
        hour: "numeric",
        minute: "2-digit",
        omitZeroMinute: true,
        meridiem: "short",
        hour12: false,
        firstHour: 0
      },
      businessHours: {
        dow: [1, 2, 3, 4], // 周一 - 周四

        start: "10:00", // 上午10点开始
        end: "18:00" // 下午18点结束
      },
      calendarEvents: [
        {
          title: "部门会议",
          start: new Date("2020-6-3 19:30"),
          end: new Date("2020-6-3 20:00")
        },
        {
          title: "部门会议2",
          start: new Date("2020-6-3 19:30"),
          end: new Date("2020-6-3 20:30")
        }
      ]
    };
  },

  methods: {
    dataChange(val) {
      console.log(val);
      let calendarApi = this.$refs.fullCalendar.getApi();
      calendarApi.view.title = val;
      calendarApi.render();
    },
    handleDateClick(arg) {
      if (confirm("您是否要在" + arg.dateStr + "添加一个新的事件?")) {
        this.calendarEvents.push({
          // add new event data
          title: "新的事件",
          start: arg.date,
          allDay: arg.allDay
        });
      }
    },
    handleEventClick(info) {
      alert("Event: " + info.event.title);
      info.el.style.borderColor = "red";
    }
  }
};
</script>

<style lang="scss" scope>
@import "~@fullcalendar/core/main.css";
@import "~@fullcalendar/daygrid/main.css";
@import "~@fullcalendar/timegrid/main.css";
.fc-day-grid,
.fc-divider {
  display: none;
}
.fc-time-grid-container {
  height: 72vh !important;
}
</style>
