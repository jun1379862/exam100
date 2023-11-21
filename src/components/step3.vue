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
        { value: 'value1', text: 'Niacinamide ', 
          subTxt:`This is a form of vitamin B that supports protein and 
          collagen to promoite optimal skin health. ` },
        { value: 'value2', text: 'Lipid Compind ', 
          subTxt:`This improves moisture retention in the skin's barrier 
          for long-lasting hydration. ` },
        { value: 'value3', text: 'Ribose ', 
          subTxt:`This reduces the appearance of thinning, wrinkled skin` },
        { value: 'value4', text: 'Jojoba Leaf Extract ', 
          subTxt:`This is rich in antioxidants and helps stimulate the
            production of collage` },
        { value: 'value5', text: 'Glycerin ', 
          subTxt: `This helps keep skin hydrated` },
        { value: 'value6', text: 'Unsure what my skin needs ', 
          subTxt: `` },
      ],
      selectedOptions: [], // Array to hold selected checkbox values
    };
  },
  computed: {
  },
  watch:{
    selectedOptions(newValue, oldValue) {
      this.$emit('step3Secleted', newValue);
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
    <section v-if="currentStepProp == 2" class="main-step3">
      <div class="margin-auto">
        <h2>What hydrating ingredients are you interested in?</h2>
        <div class="step3-choices">
          <label v-for="(option, index) in options" :key="index" :for="`option${index}`" :class="[{ 'selected': isSelected(option.value) }, 'panel']">
            <input class="chkbx-choices" type="checkbox" :id="`option${index}`" :value="option.value" v-model="selectedOptions" /> 
            <!-- <h3 class="panel-txt">{{ option.text }} 
              <span class="subtxt">{{option.subTxt}}</span>
            </h3> -->
            <div class="content">
              <h3 class="panel-txt">{{ option.text }}</h3>
              <div class="subtxt">{{ option.subTxt }}</div>
            </div>
          </label>
        </div>
      </div>
    </section>
  </Transition>
</template>

<style scoped>
.content {
  min-width: 150px;
  display: flex;
  flex-direction: column; /* Set content as column */
  justify-content: center; /* Center text vertically */
}
.subtxt{
  font-family: workSansLight;
  font-size: 16px;
  line-height: 18px;
  display: block;
  font-weight: 600;
  padding-top: 10px;
  max-width: 300px;
  padding-left: 20px;
}
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
  margin: 0; 
  margin-left: 20px;
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
.step3-choices{
  margin-top: 34px;
}


@media (min-width: 1025px) {
  .main-step3{
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
