<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="true"
      app
      permanent
      class="sidebar"
    >
      <v-list dense nav>
        <v-list-item to="/users" link>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Пользователи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn icon @click="toggleTheme">
            <v-icon>{{ themeIcon }}</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: true
    }
  },
  computed: {
    themeIcon() {
      return this.$vuetify.theme.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent'
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark.toString())
    }
  },
  mounted() {
    const savedTheme = localStorage.getItem('darkTheme')
    if (savedTheme !== null) {
      this.$vuetify.theme.dark = savedTheme === 'true'
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  background-color: var(--v-background-base);
}
</style>
