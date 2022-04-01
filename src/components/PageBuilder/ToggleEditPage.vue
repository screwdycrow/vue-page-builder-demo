<template>
  <div>
    <v-btn v-if="!editPage" icon="mdi-pencil" text @click="toggleEditPage()"></v-btn>
    <v-btn v-if="editPage" color="success" icon="mdi-content-save" text @click="saveGuis()"></v-btn>
    <v-btn v-if="editPage" icon="mdi-cancel" text @click="cancelEditPage()"></v-btn>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "ToggleEditPage",

  computed: {
    ...mapState('pageBuilder', [
      "editPage"
    ])
  },
  methods: {
    ...mapActions('pageBuilder', [
      'saveGuis'
    ]),
    ...mapMutations('pageBuilder', [
      "toggleEditPage",
      "cancelEditPage"
    ])
  }
}
</script>

<style scoped>

</style>