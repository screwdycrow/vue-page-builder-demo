<template>
  <div style="display: flex; align-content: center">
    <button v-if="!editPage" > <img :src="editIcon" @click="toggleEditPage()"> </button>
    <button  v-if="editPage" > <img :src="saveIcon" @click="saveGuis()"> </button>
    <button v-if="editPage" > <img :src="cancelIcon" @click="cancelEditPage()"> </button>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import saveIcon from '../../assets/icons/save_black_24dp.svg'
import cancelIcon from '../../assets/icons/clear_black_24dp.svg'
import editIcon from '../../assets/icons/edit_black_24dp.svg'
import pageBuilderStoreMixin from "@/vuepagebuilder/components/core/PageBuilderStoreMixin";

export default {
  name: "ToggleEditPage",
  data:()=>({
    editIcon: editIcon,
    saveIcon: saveIcon,
    cancelIcon: cancelIcon
  }),
  mixins:[pageBuilderStoreMixin]
}
</script>

<style scoped>

</style>