<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12"
        class="pa-2"
        >
        <v-sheet
          class="overflow-auto overflow-y-hidden pa-2"
          height="160">
          <v-row
            class="d-flex flex-no-wrap"
            justify="space-around">
            <v-col md="3" cols="6">
              <v-card
                :rounded="rounded"
                class="px-3 py-4 m-2 cardOne"
                width="250"
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
            <v-col md="3" cols="6">
              <v-card
                :rounded="rounded"
                class="px-3 py-4 m-2 cardTwo"
                width="250"
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
            <v-col md="3" cols="6">
              <v-card
                :rounded="rounded"
                class="px-3 py-4 m-2 cardThree"
                width="250"
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

          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
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
