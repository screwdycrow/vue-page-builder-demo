<template>
  <div :class="classes" :style="styles">
    <div class="card-content" >
      <form>
        <div class="control" v-if="!isEditMode">
          <label class="label">
            Διαδρομή
          </label>
          <div class="field">
            <input class="input" type="text" v-model="page.path"/>
          </div>

        </div>
        <div class="control">
          <label class="label">
            Όνομα
          </label>
          <div class="field">
            <input class="input" type="text" v-model="page.name"/>
          </div>
        </div>
        <div class="control">
          <label class="label">
            Περιγραφή
          </label>
          <div class="field">
            <input class="input" type="text" v-model="page.description"/>
          </div>
        </div>
        <div class="control">
          <label class="label">
            Ομάδα
          </label>
          <div class="field">
            <input class="input" type="text" v-model="page.group"/>
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button class="button card-footer-item"
              v-if="!isEditMode"
              @click="addPageClick()"> ΠΡΟΣΘΗΚΗ
      </button>
      <button v-else class="button card-footer-item"
              @click="updatePageClick()"> ΑΠΟΘΗΚΕΥΣΗ
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";
import baseStyleMixin from "@/vuepagebuilder/components/BaseStyleMixin";

export default {
  name: "PageForm",
  data: () => ({
    page: {
      description:null,
      name: null,
      path: null,
      group: null,
    }
  }),
  mixins:[baseStyleMixin],
  props:{
    pageModel:{type:Object, default:null}
  },
  computed: {
    isEditMode(){
      return this.pageModel !== null
    }
  },
  created() {
    this.page  = Object.assign({},this.pageModel)
  },
  methods: {
    ...mapActions('pageBuilderPages', [
      "savePages",
      "getPages",
    ]),
    ...mapMutations('pageBuilderPages', [
      "addPage",
      "updatePage"
    ]),
    updatePageClick(){
      this.updatePage(this.page)
      this.savePages();
    },
    addPageClick() {
      this.addPage(this.page);
      this.savePages();
    }
  }
}
</script>

<style scoped>

</style>