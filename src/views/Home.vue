<template>
<page-builder v-if="!loadingGuis" gui="Home"></page-builder>
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
  computed:{
    ...mapState("pageBuilder",[
        "loadingGuis"
    ])
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