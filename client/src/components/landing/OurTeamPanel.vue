<template @load="showTheme">
  <v-card class="primary pt-5"
    align="center"
    style="min-height:70vh;">
    <v-card-text class="d-block text-center pt-6 pb-8">
      <h1 class="text-sm-h3 font-weight-medium">
        Our Team
      </h1>
      <h3 class="text-subtitle2 text-sm-subtitle mt-3">
        Meet our team members
      </h3>
    </v-card-text>
    <v-card
      flat
      rounded="0"
      style="width: 85%"
    >
      <v-window v-model="onboarding">
        <v-window-item
          v-for="n in (teamlength/length)"
          :key="`group-${n}`"
          :value="n"
        >
          <v-row class="d-flex justify-center">
            <v-col cols="12" sm="4" md="3"
              class="d-none d-md-inline"
              v-for="(team, index) in teams.slice((n - 1) * length, n * length)"
              :key="index"
            >
            <team-card :team="team" />
              <!-- <v-card height="400"
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
              </v-card> -->
            </v-col>
            <v-col cols="6" sm="6" md="4"
              class="d-none d-sm-inline d-md-none"
              v-for="(team, index) in teams.slice((n - 1) * length, n * length)"
              :key="index"
            >
              <!-- <v-card height="400"
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
              </v-card> -->
            </v-col>
            <v-col cols="12" sm="4" md="3"
              class="d-inline d-sm-none"
              v-for="(team, index) in teams.slice((n - 1) * length, n * length)"
              :key="index"
            >
              <!-- <v-card height="400"
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
              </v-card> -->
            </v-col>
          </v-row>
        
        </v-window-item>
      </v-window>

      <v-card-actions class="justify-end px-4">
        <v-btn
          variant="plain"
          icon="mdi-chevron-left"
          @click="prev"
        ></v-btn>
        
        <v-btn
          variant="plain"
          icon="mdi-chevron-right"
          @click="next"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>
<script>
import axios from 'axios';
import TeamCard from '@/components/landing/TeamCard.vue';

export default {
  async mounted() {
    await this.getTeamMembers();
  },
  data () {
    return {
      teamlength: 20,
      onboarding: 0,
      length: 4,
      message: null,
      teams: []
    }
  },
  methods: {
    async getTeamMembers () {
      try {
        const url = `https://randomuser.me/api/?results=${this.teamlength}&inc=gender,name,dob,picture,nat`;
        const response = await axios.get(url);
        this.teams = response.data.results;
        this.teams.sort((a, b) => new Date(a.dob.date) - new Date(b.dob.date));
        console.log(this.teams, " teams ")
      } catch (error) {
        console.error(error);
      }
    },
    next () {
      this.onboarding = this.onboarding + 1 > (this.team/this.length)
        ? 1
        : this.onboarding + 1
    },
    prev () {
      this.onboarding = this.onboarding - 1 <= 0
        ? (this.team/this.length)
        : this.onboarding - 1
    }
  },
  compnents: {
    TeamCard
  }
}
</script>

<style scoped>

</style>
