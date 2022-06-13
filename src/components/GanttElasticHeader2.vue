<template>
  <div style="margin:16px 0px">
    <div style="display: flex;align-items: center;justify-content: end">
      <button @click.prevent="recenterPosition" class="header-btn-recenter">
        Now
      </button>
      <div style="display: flex;align-items: center">
        <div style="margin:0px 16px">
          X-Scale
        </div>
        <Slider v-model="xScaleValue" :min="2" :max="24" :tooltips="false" style="min-width: 100px"
                @change="onXScaleChange">
        </Slider>
      </div>
      <div style="display: flex;align-items: center">
        <div style="margin:0px 16px">
          Y-Scale
        </div>
        <Slider v-model="yScaleValue" :min="7" :max="100" :tooltips="false" style="min-width: 100px"
                @change="onYScaleChange"></Slider>
      </div>
      <div style="display: flex;align-items: center">
        <div style="margin:0px 16px">
          Task list
        </div>
        <Slider v-model="divider" :min="0" :max="100" :tooltips="false" style="min-width: 100px"
                @change="onDividerChange"></Slider>
      </div>
      <div style="margin-left: 16px">
        <Toggle v-model="root.state.options.taskList.display">

        </Toggle>
        showTaskList
      </div>
    </div>


  </div>
</template>
<script>
import Slider from '@vueform/slider'
import Toggle from "@vueform/toggle";
import "@vueform/slider/themes/default.css"
import "@vueform/toggle/themes/default.css"

export default {
  components: {

    Slider, Toggle
  },
  inject: ["root"],
  data() {
    return {
      xScaleValue: this.root.state.options.times.timeZoom,
      yScaleValue: this.root.state.options.row.height,
      before: this.root.state.options.scope.before,
      divider: this.root.state.options.taskList.percent,

    }
  },
  methods: {
    onXScaleChange(value) {
      this.$root.emitter.emit("times-timeZoom-change", value);
    },
    onYScaleChange(value) {
      this.$root.emitter.emit("row-height-change", value);
    },
    recenterPosition() {
      this.$root.emitter.emit("recenterPosition")
    },
    onBeforeChange(value) {
      this.$root.emitter.emit("scope-change", value);
    },
    onDividerChange(value) {
      this.$root.emitter.emit("taskList-width-change", value);
    }

  }
}
</script>
<style>
.header-btn-recenter {
  background: #95A5A6;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  border-radius: 3px;
  font-size: 16px;
  padding: 8px 12px
}
</style>
