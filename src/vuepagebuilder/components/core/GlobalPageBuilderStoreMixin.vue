<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "PageBuilderMutationsMixin",
  computed: {
    ...mapState('pageBuilderGlobals', [
      "editPage",
      "pageName"
    ]),
    ...mapGetters('pageBuilderGlobals', [
      "componentStructure",
      "componentTypes",
    ])
  },

  methods: {
    ...mapActions('pageBuilderGlobals', [
      'saveGuis',
      "getGuis"
    ]),
    ...mapMutations('pageBuilderGlobals', [
      "toggleEditPage",
      "cancelEditPage",
      "moveComponentUp",
      "moveComponentDown",
      "removeComponent",
      "removeComponentChildGuis",
      "initGui"
    ])
  }
}
</script>

<style scoped>

</style>