<template>
<div :style="styles" :class="classes">
</div>
</template>

<script>
import baseStyleMixin from "@/components/PageBuilder/basic/BaseStyleMixin";

export default {
  name: "BaseWrapper",
  mixins:[baseStyleMixin]
}
</script>

<style scoped>

</style>