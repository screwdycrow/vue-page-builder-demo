<template>
  <div style="display: flex; align-content: center">
    <button v-if="!editPage" > <img :src="editIcon" @click="toggleEditPage()"> </button>
    <button  v-if="editPage" > <img :src="saveIcon" @click="saveGuis()"> </button>
    <button v-if="editPage" > <img :src="cancelIcon" @click="cancelEditPage()"> </button>
  </div>
</template>

<script>
import globalPageBuilderStoreMixin from "./GlobalPageBuilderStoreMixin";
import editIcon from "../../assets/icons/edit_black_24dp.svg";
import saveIcon from "../../assets/icons/save_black_24dp.svg";
import cancelIcon from "../../assets/icons/clear_black_24dp.svg";

export default {
  name: "GlobalToggleEditPage",
  data:()=>({
    editIcon: editIcon,
    saveIcon: saveIcon,
    cancelIcon: cancelIcon
  }),
  mixins:[globalPageBuilderStoreMixin]
}
</script>

<style scoped>

</style>