<template>
<v-card :color="color" class="mb-2">
  <v-card-title>
    {{name}}
  </v-card-title>
</v-card>
</template>

<script>
export default {
  name: "PersonCard",
  data:()=>({
    types:{
    }
  }),
  props:{
    name:String,
    color:String
  },
  computed:{

  }
}
</script>

<style scoped>

</style>