<template>
  <span>
    {{ value }}
  </span>
</template>

<script>
export default {
  name: "NumberBadge",
  props: {
    bind: String,
    label: String
  },
  computed: {
    value() {
      if (this.$store.getters[this.bind]) {
        return this.$store.getters[this.bind].length
      } else {
        return '-'
      }
    }
  }
}
</script>

<style scoped>

</style>