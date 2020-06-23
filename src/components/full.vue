<template>
  <div class="full">
    <full-calendar
      ref="calendar"
      :config='config'
      :events="events"
    ></full-calendar>
  </div>
</template>

<script>
import { FullCalendar } from "vue-full-calendar";
import "fullcalendar/dist/fullcalendar.css";
export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      config: {
        firstDay: "0",
        locale: "zh-cn",
        defaultView: "month",
        height: "auto",
        allDayslot: false,
        header: {
          left: "prev,next,today",
          center: "title",
          right: "month,agendWeek,agendaDay,"
        },
        views: {
          basicWeek: {
            // name of the view
            columnFormat: "ddd DD" //这个上方修改自己想要的格式
          }
        }
      },
      events: []
    };
  }
};
</script>

<style lang="scss" scoped>
</style>
