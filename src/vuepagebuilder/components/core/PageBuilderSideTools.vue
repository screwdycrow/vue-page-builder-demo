<template>
  <aside :class="{ active: editPage}">
  </aside>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "PageBuilderTools",
  computed:{
    ...mapState('pageBuilder',[
        "editPage"
    ])
  }
}
</script>

<style scoped>

</style>