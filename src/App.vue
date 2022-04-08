<template>
  <v-app>
    <v-main>
      <Home></Home>
    </v-main>
  </v-app>
</template>

<script>

import Home from "@/views/Home";
import {mapActions} from "vuex";
export default {
  name: 'App',

  components: {
    Home
  },
  data: () => ({
    //
  }),
  created() {
  },
  methods:{
    ...mapActions('pageBuilder',[
        "getGuis"
    ])
  }
}
</script>
