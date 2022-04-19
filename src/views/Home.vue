<template>
<page-builder gui="Home"></page-builder>
</template>

<script>
import PageBuilder from "@/vuepagebuilder/components/core/PageBuilder";
import {mapActions, mapMutations, mapState} from "vuex";
export default {
  name: "Home",
  components: {PageBuilder},
  created() {
    this.setPageName('Home')
    this.getGuis()
  },
  methods:{
    ...mapActions('pageBuilder',[
      'getGuis'
    ]),
    ...mapMutations('pageBuilder',[
      "setPageName",
    ])
  }

}
</script>

<style scoped>

</style>