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
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-box"
        title="Account"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-gavel"
        title="Admin"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-email"
        title="Inbox" value="inbox"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-supervisor-circle"
        title="Supervisors"
        value="supervisors"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-clock-start"
        title="Clock-in" value="clockin"
      ></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>
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
