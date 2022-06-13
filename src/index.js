import GanttElastic from "@/GanttElastic.vue"
import GanttElasticHeader2 from "@/components/GanttElasticHeader2.vue"
export default {
    install: (app, options) => {
        app.component("GanttElastic",GanttElastic)
        app.component("GanttElasticHeader2",GanttElasticHeader2)
    }
}