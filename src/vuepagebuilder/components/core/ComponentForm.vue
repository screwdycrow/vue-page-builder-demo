<template xmlns="http://www.w3.org/1999/html">
  <div>
    <button
        @click="dialog=!dialog;"
    >
      <img v-if="isEditMode" :src="editIcon">
      <img v-else :src="addIcon">

    </button>
    <div class="modal" style="z-index: 5000" :class="{'is-active':dialog}" @click.self="dialog=false" v-if="dialog">
      <div class="modal-background" @click="dialog=false"></div>
      <div class="modal-content">
        <div class="card">
          <header class="card-header">
            <span class="card-header-title" v-if="!isEditMode"> Προσθήκη Κάρτας </span>
            <span class="card-header-title" v-else> Επεξεργασία Κάρτας </span>
          </header>
          <div class="card-content">
            <form>
              <div class="control" v-if="!isEditMode">
                <label class="label">
                  Επιλέξτε Κάρτα
                </label>
                <div class="field">
                  <div class="select">
                    <select v-model="component.type">
                      <option v-for="item in componentTypesKeys" :value="item">
                        {{ types[item].label }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div v-if="component.props !== null"
                   class="control"
                   v-for="(item, key ) in selectedComponentProps">
                <label class="label">
                  {{ item.label }}
                </label>
                <div class="field">
                  <input class="input"
                         v-if="item.type!== 'select'"
                         :type="item.type"
                         v-model="component.props[key]"
                  />
                  <div class="select" v-if="item.type === 'select'">
                    <select v-model="component.props[key]">
                      <option v-for="option in item.items" v-bind:value="option.value">
                        {{ option.text }}
                      </option>
                    </select>
                  </div>
                </div>

              </div>

            </form>
          </div>
          <div class="card-footer">
            <button class="button card-footer-item" v-if="!isEditMode" :disabled="!valid || !component.type"
                    @click="addComponentClick()"> ΠΡΟΣΘΗΚΗ
            </button>
            <button class="button card-footer-item" v-else :disabled="!valid || !component.type"
                    @click="updateComponentClick()"> ΑΠΟΘΗΚΕΥΣΗ
            </button>
          </div>
        </div>
      </div>
      <button class="modal-close is-large" @click="dialog" aria-label="close"></button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import editIcon from '../../assets/icons/edit_black_24dp.svg'
import addIcon from '../../assets/icons/add_black_24dp.svg'

export default {
  name: "ComponentForm",
  data: () => ({
    dialog: false,
    valid: true,
    editIcon: editIcon,
    addIcon: addIcon,
    component: {
      type: null,
      props: null,
    }
  }),
  created() {
    if (this.isEditMode) {
      this.component.type = this.componentModel.type;
    }
  },
  props: {
    isGlobal: Boolean,
    gui: {type: String, required: true, default: null},
    componentModel: {type: Object, required: false, default: null}
  },
  watch: {
    'component.type': function (val) {
      this.componentSelectionChange(val)
    },
    componentModel() {
      this.component.type = this.componentModel.type
    }
  },
  computed: {
    isEditMode() {
      return this.componentModel !== null
    },
    selectedComponentProps() {
      if (!this.component.type) return []
      return this.types[this.component.type].props
    },
    componentTypesKeys() {
      if(this.isGlobal){
        return Object.keys(this.componentTypesGlobals)
      }else{
        return Object.keys(this.componentTypes)
      }
    },
    types(){
      if(this.isGlobal){
        return this.componentTypesGlobals
      }else{
        return this.componentTypes
      }
    },
    ...mapGetters('pageBuilder', [
      'componentTypes'
    ]),
    ...mapGetters('pageBuilderGlobals',
        {componentTypesGlobals: 'componentTypes'}
    )
  },
  methods: {
    ...mapMutations('pageBuilder', [
      'addComponent',
      "updateComponent"
    ]),
    ...mapMutations('pageBuilderGlobals', {
          addComponentGlobal: 'addComponent',
          updateComponentGlobal: "updateComponent"
        }
    ),
    validate() {
      if (this.$refs.componentForm) {
        this.$refs.componentForm.validate();
      }
    },
    updateComponentClick() {
      if (this.isGlobal){
        this.updateComponentGlobal({gui: this.gui, props: this.component.props, id: this.componentModel.id})
      }else{
        this.updateComponent({gui: this.gui, props: this.component.props, id: this.componentModel.id})
      }
    },
    addComponentClick() {
      if (this.isGlobal){
        this.addComponentGlobal({gui: this.gui, type: this.component.type, props: this.component.props})
      }else{
        this.addComponent({gui: this.gui, type: this.component.type, props: this.component.props})

      }
      this.resetDialog()
    },
    resetDialog() {
      this.dialog = false;
      this.component.props = null;
      this.component.type = null;
    },
    componentSelectionChange(value) {
      this.component.props = null
      for (const [key, value] of Object.entries(this.selectedComponentProps)) {
        if (this.component.props === null) {
          this.component.props = {}
          this.component.props[key] = this.isEditMode ? this.componentModel.props[key] : value.default;
        } else {
          this.component.props[key] = this.isEditMode ? this.componentModel.props[key] : value.default;
        }
      }
    }
  }

}
</script>

<style scoped>

</style>