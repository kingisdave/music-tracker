<template>

  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <custom-stepper/>
      </v-col>
      <v-col cols="7">
        <h3>Select your payment method</h3>
        <v-card
          variant="plain"
        >
          <v-expansion-panels variant="popout">
            <v-expansion-panel>
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
              >
                <v-avatar icon="mdi-credit-card"></v-avatar>
                Credit Card
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-form
                  ref="creditform"
                  v-model="valid"
                  lazy-validation
                >
                  <div>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="fullName"
                          :counter="30"
                          :rules="nameRules"
                          label="Full name"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="cardNumber"
                          :counter="20"
                          :rules="nameRules"
                          label="Card Number"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="8">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          prepend-inner-icon="mdi-email"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="4"
                        class="d-flex">
                        <v-select
                          v-model="country"
                          :items="countries"
                          item-title="name"
                          item-value="mobilecode"
                          return-object
                          :rules="[v => !!v || 'Item is required']"
                          label="Country"
                          prepend-inner-icon="mdi-earth"
                          required
                        >
                        </v-select>
                        <v-text-field
                          v-model="zipCode"
                          :rules="zipRules"
                          label="Zip"
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </div>
                  <div class="d-flex justify-center">
                    <v-btn dark
                      color="#009933"
                      class="px-3 login-btn-color"
                      :disabled="!valid"
                      @click="login('account')"
                    >
                    Continue to Review
                    </v-btn>
                  </div>
                </v-form>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
              >
                <v-avatar
                  size="30"
                  :image="require('../../assets/svgs/paypal.svg')"
                  class="mr-2"
                ></v-avatar>
                Paypal
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <div class="d-flex justify-center">
                  <v-btn dark
                    color="#009933"
                    class="px-5 py-3 login-btn-color"
                    :disabled="!valid"
                    @click="login('account')"
                  >
                  Continue to Review
                  </v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
              >
                <v-avatar
                  size="30"
                  :image="require('../../assets/svgs/paystack.svg')"
                  class="mr-2"
                ></v-avatar>
                Paystack
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Some content
                <div class="d-flex justify-center">
                  <v-btn dark
                    color="#009933"
                    class="px-5 py-3 login-btn-color"
                    :disabled="!valid"
                    @click="login('account')"
                  >
                  Continue to Review
                  </v-btn>
                </div>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <!-- <v-expansion-panel
            >
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
              >
                <v-icon icon="mdi-account_balance"></v-icon>
                Account Balance
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                Some content
              </v-expansion-panel-text>
            </v-expansion-panel> -->
          </v-expansion-panels>


        </v-card>

      </v-col>
      <v-col cols="5">
        <v-card
          class="mx-auto"
          variant="outlined"
        >
          <v-card-text>
            <p class="text-h5 text--primary">
              Product Information
            </p>
            <v-divider></v-divider>
            <div class="text--primary py-2">
              <p class="text-h6 my-2">Cafe Badilico</p>
              <p class="my-2">Local Favorite</p>
              <div class="d-flex justify-space-between my-2">
                <span>$</span>
                <span> Italian, Cafe</span>
                <!-- <v-chip color="primary"> Italian, Cafe</v-chip> -->
              </div>
              <div class="my-2">Small plates, salads & sandwiches - an
                intimate setting with 12 indoor seats
                plus patio seating.
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import countries from '@/utilities/countries.js'
import CustomStepper from '@/components/CustomStepper.vue'

export default {
  data: () => ({
    tab: null,
    country: null,
    // country: {abbr: "GB", name: "United Kingdom",mobilecode: "+44"},
    countries: countries
  }),
  methods: {

  }
}
</script>

<style scoped>

</style>
