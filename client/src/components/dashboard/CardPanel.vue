<template>
  <div>
    <v-container>
      <v-row 
        class="d-flex flex-no-wrap" 
        justify="space-around">
        <v-col
          md="3"
        >
          <v-card
            class="mx-2 cardOne"
            width="400"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar
                class="ma-2"
                size="40"
                rounded="0"
              >
                <v-icon size="x-large"
                  icon="mdi-chart-areaspline-variant"
                ></v-icon>
              </v-avatar>
              <div>
                <v-card-title class="text-h5">
                  48.59%
                </v-card-title>
                <v-card-subtitle>GROWTH RATE</v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col
          md="3"
        >
          <v-card
            class="mx-2 pa-1 cardTwo"
            width="400"
            prepend-icon="mdi-home"
            theme="dark"
          >
            <template v-slot:title>
              This is a title
            </template>
            <v-card-text>
              This is content
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          md="3"
        >
          <v-card
            class="mx-2 pa-1 cardThree"
            width="400"
            prepend-icon="mdi-home"
            theme="dark"
          >
            <template v-slot:title>
              This is a title
            </template>
            <v-card-text>
              This is content
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          md="3"
        >
          <v-card
            class="mx-2 pa-1 cardFour"
            width="400"
            prepend-icon="mdi-home"
            theme="dark"
          >
            <template v-slot:title>
              This is a title
            </template>
            <v-card-text>
              This is content
            </v-card-text>
          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .cardOne {
    background: #0000e6; /* For browsers that do not support gradients */
    background: radial-gradient(#0000e6, #3700b3);
  }
  .cardTwo {
    background: #0099cc; /* For browsers that do not support gradients */
    background: radial-gradient(#0099cc, #3700b3);
  }
  .cardThree {
    background: #2e2eb8; /* For browsers that do not support gradients */
    background: radial-gradient(#2e2eb8, #3700b3);
  }
  .cardFour {
    background: #3d0099; /* For browsers that do not support gradients */
    background: radial-gradient(#3d0099, #b300b3);
  }

</style>
