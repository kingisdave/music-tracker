<template>
  <v-card
    height="400"
    class="d-flex bg-white justify-center align-center"
  >
    <v-img
      :src="team.picture.large"
      :lazy-src="team.picture.thumbnail"
      class="align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="100%"
      cover
    >
      <v-card-title class="text-white" >
        {{ team.name.first + ' ' + team.name.last }}
      </v-card-title>
      <v-card-text class="text-white">
        Team Member
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: [
    'team'
  ]
}
</script>