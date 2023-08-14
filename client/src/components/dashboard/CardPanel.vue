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
            <v-col cols="6" md="3">
              <single-card
                :rounded="rounded"
                card-class="cardTwo"
                icon-size="xx-large"
                icon="mdi-chart-areaspline-variant"
                title="48.59%"
                subtitle="Growth"
              />
            </v-col>
            <v-col cols="6" md="3">
              <single-card
                :rounded="rounded"
                card-class="cardThree"
                icon-size="xx-large"
                icon="mdi-chart-areaspline-variant"
                title="1.5M"
                subtitle="Downloads"
              />
            </v-col>
            <v-col cols="6" md="3">
              <single-card
                :rounded="rounded"
                card-class="cardFour"
                icon-size="xx-large"
                icon="mdi-chart-areaspline-variant"
                title="500k"
                subtitle="Stores"
              />
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
  data() {
    return {
      rounded: true,
    };
  },
  components: {
    SingleCard
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
