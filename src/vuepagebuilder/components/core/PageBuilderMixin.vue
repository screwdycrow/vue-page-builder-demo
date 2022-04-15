<script>
import deleteIcon from "@/vuepagebuilder/assets/icons/delete_outline_black_24dp.svg";
import down from "@/vuepagebuilder/assets/icons/expand_more_black_24dp.svg";
import up from "@/vuepagebuilder/assets/icons/expand_less_black_24dp.svg";

export default {
  name: "PageBuilderMixin",
  data: () => ({
    deleteIcon: deleteIcon,
    downIcon: down,
    upIcon: up,
  }),
  props: {
    gui: String
  },
  created() {
    this.initGui(this.gui)
  },
  methods: {
    removeComponentClick(id) {
      this.removeComponent({gui: this.gui, id: id})
      this.removeComponentChildGuis(id);
    },
    moveComponentUpClick(id) {
      this.moveComponentUp({gui: this.gui, id: id})
    },
    moveComponentDownClick(id) {
      this.moveComponentDown({gui: this.gui, id: id})

    },
  }
}
</script>

<style scoped>

</style>