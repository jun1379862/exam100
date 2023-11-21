<script>

export default {
  components: {
  },
  props:{
    currentStepProp: Number
  },
  data() {
    return {
      options:  [
        { value: 'value1', text: 'Loose skin on thights', imgClass:'panel pic1' },
        { value: 'value2', text: 'Thinning skin on arms', imgClass:'panel pic2' },
        { value: 'value3', text: 'Loose neck/jaw', imgClass:'panel pic3' },
        { value: 'value4', text: 'Saggy belly', imgClass:'panel pic4' },
      ],
      selectedOptions: [], // Array to hold selected checkbox values
    };
  },
  computed: {
  },
  watch:{
    selectedOptions(newValue, oldValue) {
      this.$emit('step2Secleted', newValue);
    },
  },
  methods: {
    isSelected(optionValue) {
      return this.selectedOptions.includes(optionValue);
    },
  },
};
</script>

<template>
  <Transition>
    <section v-if="currentStepProp == 1" class="main-step2">
      <div class="margin-auto">
        <h2>Select problem areas</h2>
        <div class="step2-choices">
          <label v-for="(option, index) in options" :key="index" :for="`option${index}`" :class="[{ 'selected': isSelected(option.value) }, option.imgClass]">
            <input class="chkbx-choices" type="checkbox" :id="`option${index}`" :value="option.value" v-model="selectedOptions" /> 
            <h3 class="panel-txt">{{ option.text }} </h3>
          </label>
        </div>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
label.panel{
  padding-left: 20px;
}
input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  position: relative;
  background-image: url('@/assets/images/checkbox/uncheck.png'); /* Image for unchecked state */
  background-size: cover;
}

/* Change background image when the checkbox is checked */
input[type="checkbox"]:checked {
  background-image: url('@/assets/images/checkbox/checked.png'); /* Image for checked state */
}

.panel.pic1{
  background-image: url('@/assets/images/step2/Asset 1-1.png');
}
.panel.pic2{
  background-image: url('@/assets/images/step2/Asset 1-2.png');
}
.panel.pic3{
  background-image: url('@/assets/images/step2/Asset 1-3.png');
}
.panel.pic4{
  background-image: url('@/assets/images/step2/Asset 1-4.png');
}


.v-leave-active {
  transition: opacity 0.1s ease;
}
.v-enter-active{
  transition: opacity 3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.panel{
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: right;
}

.panel-txt{
  max-width: 215px;
  padding-left: 20px;
  margin: 0; 
}
.panel{
  display: flex;
  align-items: center; /* Vertically center items */
  height: 135px;
  width: 100%;
  margin-bottom: 16px;
  border: 2px solid #556479;
  background-color: #556479;
}

.panel.selected
{
  border: 2px solid #E2C47C;
  background-color: #556479;
  cursor: grab;

}
.panel:hover{
  background-color: #394A62;
}
.intro-choices,
.step2-choices{
  margin-top: 34px;
}


@media (min-width: 1025px) {
  .main-step2{
    align-items: center;
  }
  .margin-auto{
    margin: auto;
    max-width: 517px;
  }
  .panel{ 
    height: 135px;
    width: 517px;
  }
}
</style>
