<template>

  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-card
          variant="outlined"
        >
        <v-expansion-panels>
          <v-expansion-panel
          >
            <v-expansion-panel-title
              expand-icon="mdi-menu-down"
            >
              <v-icon icon="mdi-credit-card"></v-icon>
              Credit Card
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Some content
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel
          >
          <v-row
          align="center"
          class="spacer"
          no-gutters
        >
          <v-col
            cols="4"
            sm="2"
            md="1"
          >
            <v-avatar
              size="36px"
            >
              <v-img
                v-if="message.avatar"
                alt="Avatar"
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              ></v-img>
              <v-icon
                v-else
                :color="message.color"
                :icon="message.icon"
              ></v-icon>
            </v-avatar>
          </v-col>

          <v-col
            class="hidden-xs-only text-left ml-2"
            sm="5"
            md="3"
          >
            <strong v-html="message.name"></strong>
            <span
              v-if="message.total"
              class="text-grey"
            >
              &nbsp;({{ message.total }})
            </span>
          </v-col>

          <v-col
            class="text-no-wrap text-left"
            cols="5"
            sm="3"
          >
            <v-chip
              v-if="message.new"
              :color="`${message.color}-lighten-1`"
              class="ml-0 mr-2"
              label
              small
            >
              {{ message.new }} new
            </v-chip>
            <strong v-html="message.title"></strong>
          </v-col>

          <v-col
            v-if="message.excerpt"
            class="text-medium-emphasis text-truncate hidden-sm-and-down"
          >
            &mdash;
            {{ message.excerpt }}
          </v-col>
        </v-row>
            <v-expansion-panel-text>
              Some content
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel
          >
            <v-expansion-panel-title
              expand-icon="mdi-menu-down"
            >
              <v-avatar
                size="36px"
              >
                <v-img
                  v-if="message.avatar"
                  alt="Avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                ></v-img>
                <v-icon
                  v-else
                  :color="message.color"
                  :icon="message.icon"
                ></v-icon>
              </v-avatar>
              Paystack
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              Some content
            </v-expansion-panel-text>
          </v-expansion-panel>
          <v-expansion-panel
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
          </v-expansion-panel>
        </v-expansion-panels>
          <!-- <v-tabs
            v-model="tab"
          >
            <v-tab value="creditCard"
              color="primary"
            >Credit Card</v-tab>
            <v-tab value="payPal"
              color="primary"
            >Paypal</v-tab>
            <v-tab value="phonePal"
              color="primary"
            >Phone</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item value="creditCard">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="name"
                  :counter="10"
                  :rules="nameRules"
                  label="Name"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>

                <v-select
                  v-model="select"
                  :items="items"
                  :rules="[v => !!v || 'Item is required']"
                  label="Item"
                  required
                ></v-select>

                <v-checkbox
                  v-model="checkbox"
                  :rules="[v => !!v || 'You must agree to continue!']"
                  label="Do you agree?"
                  required
                ></v-checkbox>

                <v-btn
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Validate
                </v-btn>

              </v-form>
            </v-window-item>

            <v-window-item value="payPal">
              PayPal
            </v-window-item>

            <v-window-item value="phonePal">
              Thr
            </v-window-item>
          </v-window> -->
        </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),

  methods: {

  }
}
</script>

<style scoped>

</style>
