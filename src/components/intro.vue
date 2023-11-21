<script>

import arrowRight from '@/components/arrowRight.vue';
import stepTwoComp from '@/components/step2.vue';
import stepThreeComp from '@/components/step3.vue';

// import Panel from '@/components/Panel.vue'; // Import the Panel component

export default {
  components: {
    stepTwoComp,
    arrowRight,
    stepThreeComp
  },
  data() {
    return {
      values:{
        intro: null,
        step2: null,
        step3: null,
      },
      stages: 6, // Total number of stages
      currentStage: 0, // Current stage (initially set to 0)
      hideBtnProcess: true,
      disableContinuebtn: true
    };
  },
  computed: {
    stageWidth() {
      let stage = (this.currentStage / this.stages) * 100;
      return stage; // Calculate width based on current stage
    },
  },
  watch:{
    currentStage(newValue, oldValue) {
      switch (newValue) {
        case 0:
          this.hideBtnProcess = true;
          break;
        case 1:
          this.hideBtnProcess = false;
          break;
        case 2:
          this.hideBtnProcess = false;
          this.enableNextWHenHasValue(this.values.step3)
          break;
      
        default:
          if (newValue === this.stages){
            this.disableContinuebtn = true;
          }
          break;
      }
    },
  },
  methods: {
    enableNextWHenHasValue(hasVal){
      this.disableContinuebtn = true;
      if(hasVal >= 1){
        this.disableContinuebtn = false;
      }
    },
    step2SecletedComp(updatedOptions) {
      this.values.step2 = updatedOptions;
      this.enableNextWHenHasValue(updatedOptions.length)
    },
    step3SecletedComp(updatedOptions) {
      this.values.step3 = updatedOptions;
      this.enableNextWHenHasValue(updatedOptions.length)
    },
    selectPanel(panelValue) {
      this.values.intro = panelValue;
      window.scrollTo(0,0);
      this.nextStage();
    },
    selectItemInStep2(panelValue) {
      this.values.intro = panelValue;
    },
    nextStage() {
      // Update the current stage to move forward
      this.currentStage = Math.min(this.currentStage + 1, this.stages);
    },
    backStage() {
      // Update the current stage to go back
      this.currentStage = Math.max(this.currentStage - 1, 0);
      var currentStg = this.currentStage; 

      if(currentStg == 0){ // step 2 -> intro
        this.values.intro = null;
      }
    },
  },
};
</script>

<template>
  <Transition>
    <section v-if="values.intro == null" class="main-intro">
      <div class="intro-a">
        <h1>Achieve Perfectly <span class="h1-i">Smooth, Youthful</span> Skin</h1>
        <p class="body-txt">Get a personalized skin care treatment</p>
      </div>
      <div class="intro-b">
        <h2>Choose Your Goal</h2>
        <div class="intro-choices">
          <div class="panel pic1" @click="selectPanel(1)">
            <h3 class="panel-txt">Remove Crepey Skin</h3>
          </div>
          <div class="panel pic2" @click="selectPanel(2)">
            <h3 class="panel-txt">Relieve Dry, Flaky Skin</h3>
          </div>
          <div class="panel pic3" @click="selectPanel(3)">
            <h3 class="panel-txt"> Get Firmer, Tigher, Younger Looking Skin</h3>
          </div>
        </div>
      </div>
    </section>
  </Transition>
  <Transition><!-- // PROGRES BAR -->
    <div v-if="values.intro != null" class="progress-main">

      <div class="progress-container">
        <div class="button-container">
          <button class="prog-back-btn" @click="backStage" :disabled="currentStage === 0">&lt;</button>
        </div>
        <div class="progress-bar">
          <div v-for="stage in stages" :key="stage" class="progress-stage" :style="{ width: stageWidth + '%' }"></div>
        </div>
        <div class="progress-label body-txt">{{ currentStage + 1 }} / {{ stages }}</div>
      </div>
    
      
    </div>
  </Transition>
  <stepTwoComp
    :currentStepProp="currentStage" 
    @step2Secleted="step2SecletedComp"
  >
  </stepTwoComp>

  <stepThreeComp
    :currentStepProp="currentStage" 
    @step3Secleted="step3SecletedComp"
  >
  </stepThreeComp>


  <div v-if="hideBtnProcess == false">
    <button class="continue-btn c-btn" @click="nextStage" :disabled="disableContinuebtn"><span>Continue</span> <arrowRight/></button>
    <button class="skip-btn c-btn" @click="nextStage" :disabled="currentStage === stages"><span>Skip</span></button>
  </div>

</template>

<style scoped>
.c-btn{
  margin-left: auto;
  margin-right: auto;
  min-width: 335px;
  height: 83px;
  width: 100%;
  font-family: workSansSemiBold;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 22px;
  cursor: pointer;
}
.continue-btn{
  text-align: left;
  background-color: #e2c47c;
  color: #333333;
  border: 2px solid #e2c47c;
}
.skip-btn{
  margin-top: 17px;
  text-align: center;
  background-color: #0d233f;
  color: #ffffff;
  border: 2px solid #ffffff;
}
.continue-btn span{
  vertical-align: mid;
  padding-left: 24px;
}
/* Styles for the progress bar *//* ====================== BUTON */
/* Styles for the progress bar container */
.progress-label.body-txt{
  padding-left: 15px;
  letter-spacing: -2px;
  padding-top: 0px;
  font-weight: 200;
}

.progress-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Adjust margin as needed */
}

/* Styles for the button container */
.button-container {
  margin-right: 10px; /* Adjust spacing between button and progress bar */
}

/* Styles for the progress bar */
.progress-bar {
  width: 70%;
  height: 12px;
  background-color: #556579;
  overflow: hidden; /* Hide overflowing stages */
  /* Additional styles for the container */
}

.progress-stage {
  height: 100%;
  background-color: #e2c47c; /* Change color to fit your design */
  border-radius: 4px;
  /* Additional styles for each stage */
}

/* Styles for the button */
.prog-back-btn {
  padding: 0px 5px;
  font-size: 26px;
  border: none;
  background-color: #556579; /* Change color to fit your design */
  color: white;
  cursor: pointer;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
/* ====================== BUTON */

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
.panel.pic1{
  background-image: url('@/assets/images/intro/intro-o1.png');
}
.panel.pic2{
  background-image: url('@/assets/images/intro/intro-o2.png');
}
.panel.pic3{
  background-image: url('@/assets/images/intro/intro-o3.png');
}

.panel-txt{
  max-width: 250px;
  padding-left:33px;
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
.panel:hover{
  border: 2px solid #E2C47C;
  cursor: grab;
}
.intro-choices,
.step2-choices{
  margin-top: 34px;
}

.body-txt{
  padding-top: 10px;
  font-weight: 600;
}
.main-intro{
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 22px;
}
.intro-b{
  margin-top: 20px;
}

@media (min-width: 1025px) {
  .progress-bar {
    width: 36%;
  }
  .progress-container {
    display: flex;
    justify-content: center; /* Center content horizontally */
    align-items: center; /* Center content vertically */
    margin: auto 0 20px;
   
  }
  .progress-main{
  }
  .c-btn{
    display: block;
    width: 517px;
    height: 83px;
  }
  .body-txt{
    padding-top: 20px;
  }
  .main-intro{
    padding-top: 40px;
    grid-template-columns: 1fr 1fr;
    padding-top: 40px;
  }
  .panel{
    height: 135px;
    width: 517px;
  }
  .intro-b{
    margin-left: 65px;
    margin-top: 0px;
  }
}
</style>
