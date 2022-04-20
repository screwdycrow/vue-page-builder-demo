<template>
  <div>
    <div class="card m-3" v-for="p in pages" :key="p.path">
      <header class="card-header">
        <p class="card-header-title">
          {{p.name}}
        </p>
        <button class="card-header-icon" @click="edit = edit===p.name? null : p.name">
          <img :src="editIcon">
        </button>
        <button class="card-header-icon" @click="this.removePageClick(p)">
          <img :src="deleteIcon">
        </button>
      </header>
      <page-form v-if="edit === p.name" :page-model="p"></page-form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import deleteIcon from "../../assets/icons/delete_outline_black_24dp.svg";
import editIcon from "../../assets/icons/edit_black_24dp.svg";
import PageForm from "@/vuepagebuilder/components/core/PageForm";

export default {
  name: "PageListEditor",
  components: {PageForm},
  data:()=>({
    edit:null,
    deleteIcon:deleteIcon,
    editIcon:editIcon
  }),
  computed:{
    ...mapState('pageBuilderPages',[
        "pages"
    ]),
  },
  methods:{
      removePageClick(p){
        this.removePage(p.name)
        this.savePages();
      },
    ...mapActions('pageBuilderPages',[
        'savePages',
    ]),
    ...mapMutations('pageBuilderPages',[
        'removePage',
    ])
  }
}
</script>

<style scoped>

</style>