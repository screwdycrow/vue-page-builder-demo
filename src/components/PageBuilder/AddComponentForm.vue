<template>

  <div>
    <v-dialog v-model="dialog" >
      <template v-slot:activator="{props}">
        <v-btn
            fab
            color="primary"
            dark
            v-bind="props"
            icon="mdi-plus"
        >
        </v-btn>
      </template>
      <v-card width="500px" height="auto">
        <v-card-title> Προσθήκη Κάρτας </v-card-title>
        <v-card-text>
          <v-form ref="componentForm" v-model="valid" lazy-validation>
            <v-select
                variant="outlined"
                density="comfortable"
                v-model="component.type"
                :items="componentTypesKeys"
                label="Επιλέξτε Κάρτα"
            >
              <template v-slot:item="{item,attrs,on,active}">
                <v-list-item v-on="on" v-bind="attrs" #default="{active}">
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
                          @input="$refs.componentForm.validate"
                          v-model="component.props[key]">

            </v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled="!valid"> ΠΡΟΣΘΗΚΗ </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AddComponentForm",
  data: () => ({
    dialog:false,
    valid: true,
    component: {
      type: null,
      props: null,
    }
  }),
  created() {
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
    componentSelectionChange(value) {
      console.log(value);
      this.component.props = {}
      for (const [key, value] of Object.entries(this.selectedComponentProps)) {
        this.component.props[key] = value.default;
      }
    }
  }

}
</script>

<style scoped>

</style>