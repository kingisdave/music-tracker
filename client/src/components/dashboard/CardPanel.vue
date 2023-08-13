<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12"
        class="pa-2"
        >
        <v-sheet
          class=" pa-2">
          <v-row
            class="d-flex flex-wrap"
            justify="space-around">
            <v-col cols="6" md="3">
              <single-card
                :rounded="rounded"
                card-class="cardOne"
                icon-size="xx-large"
                icon="mdi-account-group"
                title="300K"
                subtitle="Users"
              />
            </v-col>
            <!-- <v-col cols="6" md="3"> -->
              <!-- <single-card
                :rounded="rounded"
                card-class="cardOne"
                icon-size="xx-large"
                icon="mdi-account-group"
                title="300K"
                subtitle="Users"
              /> -->
              <!-- <v-card
                :rounded="rounded"
                class="px-3 py-4 m-1 cardOne"
                theme="dark"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar
                    class="ma-2"
                    size="40"
                    rounded="0"
                  >
                    <v-icon size="xx-large"
                      icon="mdi-account-group"
                    ></v-icon>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-xs-h6 text-md-h5">
                      300K
                    </v-card-title>
                    <v-card-subtitle>Users</v-card-subtitle>
                  </div>
                </div>
              </v-card> -->
            <!-- </v-col> -->
            <v-col cols="6" md="3">
              <v-card
                :rounded="rounded"
                class="px-3 py-4 m-1 cardTwo"
                theme="dark"
              >
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar
                    class="ma-1"
                    size="40"
                    rounded="0"
                  >
                    <v-icon size="x-large"
                      icon="mdi-chart-areaspline-variant"
                    ></v-icon>
                  </v-avatar>
                  <div>
                    <v-card-title class="text-xs-h6 text-md-h5">
                      48.59%
                    </v-card-title>
                    <v-card-subtitle>Growth</v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col md="3" cols="6">
              <v-card
                :rounded="rounded"
                class="px-4 py-4 m-1 cardThree"
                theme="dark"
              >
                <div
                  class="d-flex flex-no-wrap justify-space-between">
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
                    <v-card-title class="text-xs-h6 text-md-h5">
                      1.5M
                    </v-card-title>
                    <v-card-subtitle class="text-small">Downloads</v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </v-col>
            <v-col md="3" cols="6">
              <v-card
                :rounded="rounded"
                class="px-4 py-4 m-1 cardFour"
                theme="dark"
              >
                <div
                  class="d-flex flex-no-wrap justify-space-between">
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
                    <v-card-title class="text-xs-h6 text-md-h5">
                      500K
                    </v-card-title>
                    <v-card-subtitle>Stores</v-card-subtitle>
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
import SingleCard from './SingleCard.vue';

export default {

  components: {
    SingleCard
  },
  data() {
    return {
      rounded: true,
    };
  }
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
