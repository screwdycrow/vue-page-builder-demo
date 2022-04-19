<template>
  <div>
    <v-list color="blue" >
      <v-subheader class="pa-3 font-weight-bold">{{group}}</v-subheader>
        <v-list-item  :active="page.path === $route.path" v-for="page in pageList"  @click="$router.push(page.path)" :key="page.path">
          <v-list-item-content>
            <v-list-item-title> {{page.name}} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    </v-list>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "PageBuilderPagesList",
  props:{
    group:String,
  },
  methods:{
  },
  computed:{
    pageList(){
      if(this.group){
        return this.pages.filter(p=>p.group === this.group);
      }else{
        return this.pages;
      }
    },
    ...mapState('pageBuilderPages',[
        "pages"
    ]),
    ...mapState("pageBuilder",[
        "pageName"
        ])
  }
}
</script>

<style scoped>

</style>