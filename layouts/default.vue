<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="miniVariant"
      app
      dark
      class="sidebar"
      color="#1a1a1a"
      width="280"
    >
      <v-list-item class="px-2 profile-item">
        <v-list-item-avatar>
          <v-icon large color="white">mdi-account-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="profile-name">Михаил Макеев</v-list-item-title>
        </v-list-item-content>
        <v-btn icon @click.stop="miniVariant = !miniVariant">
          <v-icon>{{ miniVariant ? 'mdi-chevron-right' : 'mdi-chevron-left' }}</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider class="my-2" />

      <v-list dense nav class="py-0">
        <v-list-item to="/points" link>
          <v-list-item-icon>
            <v-icon>mdi-store</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Торговые точки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/machines" link>
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Кофемашины</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/partners" link>
          <v-list-item-icon>
            <v-icon>mdi-handshake</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Партнеры</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/employees" link>
          <v-list-item-icon>
            <v-icon>mdi-account-group</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Сотрудники</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/drinks" link>
          <v-list-item-icon>
            <v-icon>mdi-coffee</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Напитки</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/subscriptions" link>
          <v-list-item-icon>
            <v-icon>mdi-card-account-details</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Абонементы</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/active-subscriptions" link>
          <v-list-item-icon>
            <v-icon>mdi-card-account-details-star</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Активные абонементы</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/users" link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Пользователи</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn icon @click="toggleTheme" :title="miniVariant ? 'Переключить тему' : ''">
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
      drawer: true,
      miniVariant: true
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
    
    const savedMiniVariant = localStorage.getItem('miniVariant')
    if (savedMiniVariant !== null) {
      this.miniVariant = savedMiniVariant === 'true'
    }
  },
  watch: {
    miniVariant(val) {
      localStorage.setItem('miniVariant', val.toString())
    }
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  background-color: #1a1a1a !important;
}

.profile-item {
  min-height: 64px;
}

.profile-name {
  font-weight: 600;
  font-size: 16px;
  color: white;
}

::v-deep .v-list-item--active {
  background-color: rgba(255, 255, 255, 0.1) !important;
  
  &:before {
    opacity: 0;
  }
}

::v-deep .v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.05) !important;
}

::v-deep .v-navigation-drawer--mini-variant {
  .profile-item {
    .v-btn {
      display: none;
    }
  }
}
</style>
