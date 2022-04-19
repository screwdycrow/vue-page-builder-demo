<template>
  <div class="card">
    <header class="card-header">
      <span class="card-header-title"> Προσθήκη Σελίδας </span>
    </header>
    <div class="card-content">
      <form>
        <div class="control">
          <label class="label">
            Slug
          </label>
          <div class="field">
            <input class="input" type="text" v-model="page.name"/>
          </div>
        </div>
        <div class="control">
          <label class="label">
            Path
          </label>
          <div class="field">
            <input class="input" type="text" v-model="page.path"/>
          </div>

        </div>
        <div class="control">
          <label class="label">
            Group
          </label>
          <div class="field">
            <input class="input" type="text" v-model="page.group"/>
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button class="button card-footer-item"
              @click="addPageClick()"> ΠΡΟΣΘΗΚΗ
      </button>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations} from "vuex";

export default {
  name: "PageForm",
  data: () => ({
    page: {
      name: null,
      path: null,
      group: null,
    }
  }),
  computed: {},
  methods: {
    ...mapActions('pageBuilderPages', [
      "savePages",
      "getPages",
    ]),
    ...mapMutations('pageBuilderPages', [
      "addPage",
      "updatePage"
    ]),
    addPageClick() {
      this.addPage(this.page);
      this.savePages();
    }
  }
}
</script>

<style scoped>

</style>