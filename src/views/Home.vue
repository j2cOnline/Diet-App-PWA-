<template>
  <v-container text-xs-center>
    <!-- diet selector -->
    <h3 class="grey--text my-2">What's Your Diet?</h3>
    <v-btn-toggle mandatory>
      <v-item-group>
        <v-btn v-model="lowCarb" class="accent--text" depressed color="primary"
          >Low Carb</v-btn
        >
        <v-btn v-model="lowFat" class="accent--text" depressed color="primary"
          >Low Fat</v-btn
        >
        <v-btn
          v-model="ketogenic"
          class="accent--text"
          depressed
          color="primary"
          >Ketogenic</v-btn
        >
      </v-item-group>
    </v-btn-toggle>

    <!-- Calorie Range Slider -->
    <h3 class="grey--text my-3">Calorie Range?</h3>

    <v-layout row>
      <v-flex shrink style="width: 60px">
        <v-text-field v-model="calorieRange[0]" type="number"></v-text-field>
      </v-flex>

      <v-flex class="px-3">
        <v-range-slider
          v-model="calorieRange"
          :max="2000"
          :min="20"
          :step="15"
        ></v-range-slider>
      </v-flex>

      <v-flex shrink style="width: 60px">
        <v-text-field v-model="calorieRange[1]" type="number"></v-text-field>
      </v-flex>
    </v-layout>

    <v-card color="rgb(0, 0, 0, 0.0)" flat>
      <div>{{ calculatedCalories }}</div>

      

      <div>{{ test }}</div>
      
      <div >{{ suggest }}</div>
      
      
      <v-img contain=true max-height="15rem" :key="suggest" transition="scale-transition" origin="center center" :src="suggest"></v-img>
      <v-flex shrink style="width: 600px">
       
      <v-item-group >
        <v-scroll-y-reverse-transition group="false" origin="bottom bottom" hide-on-leave="false"> 
        <v-btn small="true" round="true"  v-for="(item, index) in filterList" :key="index" class="accent--text"  depressed color="primary" >
        {{item.name}} 
        </v-btn>
        </v-scroll-y-reverse-transition>
      </v-item-group>
     
    </v-flex>
    </v-card>

    

  </v-container>
  
</template>

<script lang="ts">
//import func from "../../vue-temp/vue-editor-bridge";

const individualItems = [
  {
    name: "buns",
    carbs: 30,
    fat: 5,
    protein: 3,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: false
  },
  {
    name: "onion",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: true
  },
  {
    name: "spread",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: false,
    isLowCarb: true
  },
  {
    name: "lettuce",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 7,
    isKeto: false,
    isLowFat: true,
    isLowCarb: true
  },
  {
    name: "tomato",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 112,
    isKeto: false,
    isLowFat: true,
    isLowCarb: false
  },
  {
    name: "cheese",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: true,
    isLowFat: false,
    isLowCarb: true
  },
  {
    name: "meat patty",
    carbs: 0,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: true,
    isLowFat: false,
    isLowCarb: true
  },
  {
    name: "chilies",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: true
  },
  {
    name: "fries",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: false
  },
  {
    name: "pickles",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: true,
    isLowFat: true,
    isLowCarb: true
  },
  {
    name: "ketchup",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: false
  },
  {
    name: "mustard",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: true,
    isLowFat: true,
    isLowCarb: true
  },
  {
    name: "jalapenos",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: true
  },
  {
    name: "pup patty",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: true,
    isLowFat: false,
    isLowCarb: true
  },
  {
    name: "whole grilled onion",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: true
  },
  {
    name: "grilled onions",
    carbs: 2,
    fat: 10,
    protein: 5,
    calories: 110,
    isKeto: false,
    isLowFat: true,
    isLowCarb: true
  }
];



// function LowCarb(item: { isLowCarb: boolean; }){
//   return item.isLowCarb;
// }
// function LowFat(item: { isLowFat: boolean; }){
//   return item.isLowFat;
// }
// function Keto(item: { isKeto: boolean; }){
//   return item.isKeto;
// }

export default {
  data: function() {
    return {
      firstName: "justin",
      lastName: "crawford",
      lowCarb: true,
      lowFat: false,
      ketogenic: false,
      calorieRange: [500, 1500],
      individualItems: individualItems,
      currentItems: []
    };
  },
  computed: {
    test(): boolean {
      return this.lowCarb;
    },
    calculatedCalories(): number {
      return this.calorieRange[1] - this.calorieRange[0];
    },
    suggest(): string {
      if (this.lowCarb) {
        return "./img/logo.png";
      } else if (this.lowFat) {
        return "./img/logoNotLow.png";
      } else {
        return "./img/ketogenic.png";
      }
    },
    filterList(): any {
     let currentItems = [...individualItems];
     if(this.lowCarb)
      {
        return currentItems.filter(function(item){return item.isLowCarb});
      } else if (this.lowFat) {
        return currentItems.filter(function(item){return item.isLowFat});
      } else {
       return currentItems.filter(function(item){return item.isKeto});
      }
      return currentItems;
    }
  
  }

};
</script>

