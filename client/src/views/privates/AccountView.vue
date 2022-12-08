<template>
  <div>
    <v-select
      v-model="country"
      :items="countries"
      item-text="mobilecode"
      item-value="name"
      return-object
      :rules="[v => !!v || 'Item is required']"
      label="Country"
      prepend-inner-icon="mdi-earth"
      required
    >
  </v-select>
  </div>
</template>

<script>
import countries from '../../utilities/countries'

export default {
  data: () => ({
    tab: null,
    country: null,
    // country: {abbr: "GB", name: "United Kingdom",mobilecode: "+44"},
    countries: countries
  }),
}
</script>

<style scoped>

</style>
