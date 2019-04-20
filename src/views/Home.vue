<template>
  <v-container text-xs-center>

    <!-- diet selector -->
    <h3 class="grey--text my-2">What's Your Diet?</h3>
     <v-btn-toggle  mandatory>
      <v-item-group  >
        <v-btn v-model="lowCarb"  class="accent--text" depressed color="primary">Low Carb</v-btn>
        <v-btn v-model="lowFat" class="accent--text" depressed color="primary">Low Fat</v-btn>
        <v-btn v-model="ketogenic" class="accent--text" depressed color="primary">Ketogenic</v-btn>
      </v-item-group>
    </v-btn-toggle>
  
  <!-- Calorie Range Slider -->
    <h3  class="grey--text my-3">Calorie Range?</h3>

      <v-layout  row>
        <v-flex shrink style="width: 60px">
          <v-text-field
            v-model="calorieRange[0]"
            
            single-line
            type="number"
          ></v-text-field>
        </v-flex>

        <v-flex class="px-3">
          <v-range-slider
            v-model="calorieRange"
            :max="2000"
            :min="20"
            :step="10"
          ></v-range-slider>
        </v-flex>

        <v-flex shrink style="width: 60px">
          <v-text-field
            v-model="calorieRange[1]"
                        
            type="number"
          ></v-text-field>
        </v-flex>
    </v-layout>
    
    </v-container>
  </template>

<script lang="ts">

export default {
    data () {
      return {
        lowCarb: true,
        lowFat: false,
        ketogenic: false,
        calorieRange: [500, 1500],
        menuItems: [{name: "hamburger", contents: }],
        individualItems: [
                          {
                            name: "buns",
                            carbs: 30,
                            fat: 5,
                            protein: 3,
                            calories: 110
                          },
                          {
                            name: "onion",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "spread",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "lettuce",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "tomato",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "cheese",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "meat patty",
                            carbs: 0,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "chilies",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "fries",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "pickles",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "ketchup",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "mustard",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "jalapenos",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "pup patty",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "whole grilled onion",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          },
                          {
                            name: "grilled onions",
                            carbs: 2,
                            fat: 10,
                            protein: 5,
                            calories: 110
                          }
                        ]
      }
    }
  }
</script>





