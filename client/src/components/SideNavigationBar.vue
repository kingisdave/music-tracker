<template>
  <v-navigation-drawer
    v-model="drawer"
    class="bg-deep-purple"
    theme="dark"
    bottom
    style="background: #1F1F1F"
  >
    <v-list nav>
      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
        :to="{name: 'dashboard'}"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-box"
        title="Account"
        :to="{name: 'account'}"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-gavel"
        title="Admin"
        :to="{name: 'admin'}"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-email"
        title="Inbox"
        value="inbox"
        :to="{name: 'inbox'}"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-shape"
        title="My Categories"
        value="categories"
        :to="{name: 'categories'}"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-wallet"
        title="Wallet"
        value="Wallet"
        :to="{name: 'wallet'}"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-clock-start"
        title="Timeline"
        value="timeline"
        :to="{name: 'timeline'}"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block
          @click="logout">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer']
}
</script>

<style scoped>

</style>
