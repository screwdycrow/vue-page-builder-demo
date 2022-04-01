<template>

  <div>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{props}">
        <v-btn
            fab
            flat
            small
            v-bind="props"
            icon="mdi-plus"
        >
        </v-btn>
      </template>
      <v-card width="500px" height="auto">
        <v-card-title> Προσθήκη Κάρτας</v-card-title>
        <v-card-text>
          <v-form v-if="dialog" ref="componentForm" v-model="valid" lazy-validation>
            <v-select
                variant="outlined"
                density="comfortable"
                v-model="component.type"
                :items="componentTypesKeys"
                label="Επιλέξτε Κάρτα"
            >
              <template v-slot:item="{item,attrs,on,active}">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ componentTypes[item].title }}
                    </v-list-item-title>
                    {{ componentTypes[item].description }}
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-select>
            <v-text-field v-if="component.props !== null "
                          v-for="(item, key ) in selectedComponentProps"
                          variant="outlined"
                          density="comfortable"
                          :type="item.type"
                          :label="item.label"
                          :rules="item.rules"
                          @focusout="validate()"
                          v-model="component.props[key]">

            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!valid || !component.type" @click="addComponentClick()"> ΠΡΟΣΘΗΚΗ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "AddComponentForm",
  data: () => ({
    dialog: false,
    valid: true,
    component: {
      type: null,
      props: null,
    }
  }),
  created() {
  },
  props: {
    gui: {type: String, required: true, default: null}
  },
  watch: {
    'component.type': function (val) {
      this.componentSelectionChange(val)
    }
  },
  computed: {
    selectedComponentProps() {
      if (!this.component.type) return []
      return this.componentTypes[this.component.type].props
    },
    componentTypesKeys() {
      return Object.keys(this.componentTypes)
    },
    ...mapGetters('pageBuilder', [
      'componentTypes'
    ])
  },
  methods: {
    ...mapMutations('pageBuilder', [
      'addComponent',
    ]),
    validate(){
      if(this.$refs.componentForm){
        this.$refs.componentForm.validate();
      }
    },
    addComponentClick() {
      this.addComponent({gui: this.gui, type: this.component.type, props: this.component.props})
      this.resetDialog()
    },
    resetDialog(){
      this.dialog = false;
      this.component.props = null;
      this.component.type = null;
    },
    componentSelectionChange(value) {
      console.log(value);
      this.component.props = null
      for (const [key, value] of Object.entries(this.selectedComponentProps)) {
        if(this.component.props === null ){
          this.component.props = {}
          this.component.props[key] = value.default;
        }else{
          this.component.props[key] = value.default;
        }
      }
    }
  }

}
</script>

<style scoped>

</style>