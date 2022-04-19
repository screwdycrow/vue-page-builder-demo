<template>
<page-builder v-if="!loadingGuis" gui="Second"></page-builder>
</template>

<script>
import {store} from "@/store";
import PageBuilder from "@/vuepagebuilder/components/core/PageBuilder";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "Second",
  components: {PageBuilder},
  created() {
    this.setPageName('Second')
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