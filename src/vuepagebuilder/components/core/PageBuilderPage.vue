<template>
  <page-builder :key="hardReset" v-if="!loadingGuis" :gui="'main'"></page-builder>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import PageBuilder from "@/vuepagebuilder/components/core/PageBuilder";

export default {
  name: "PageBuilderPage",
  components: {PageBuilder},
  data:()=>({
    hardReset:0,
  }),
  props: {
    page: String
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.setPageName(to.path)
      vm.getGuis()
      vm.resetPageBuilders();
    })
  },
  computed: {
    ...mapState('pageBuilder', [
      "pageName",
      "loadingGuis"
    ])
  },
  methods: {
    resetPageBuilders(){
      this.hardReset++
    },
    ...mapActions('pageBuilder', [
      'getGuis'
    ]),
    ...mapMutations('pageBuilder', [
      "initGui",
      'setPageName'
    ])
  }
}
</script>

<style scoped>

</style>