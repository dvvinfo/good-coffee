<template>
  <v-container fluid class="users-page">
    <h1 class="page-title mb-6">Пользователи</h1>

    <v-card class="mb-4" elevation="0">
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="searchQuery"
              label="Поиск по имени или телефону"
              prepend-icon="mdi-magnify"
              clearable
              outlined
              dense
              hide-details
            />
          </v-col>
          <v-col cols="12" md="6">
            <v-select
              v-model="selectedCities"
              :items="availableCities"
              item-text="title"
              item-value="id"
              label="Фильтр по городам"
              prepend-icon="mdi-filter"
              multiple
              outlined
              dense
              hide-details
              clearable
            >
              <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < 2" small>
                  {{ item.title }}
                </v-chip>
                <span v-if="index === 2" class="caption grey--text">
                  (+{{ selectedCities.length - 2 }} еще)
                </span>
              </template>
            </v-select>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <div v-if="$fetchState.pending" class="skeleton-wrapper">
      <v-skeleton-loader
        v-for="i in 10"
        :key="i"
        type="list-item-three-line"
        class="mb-3"
      />
    </div>

    <div v-else-if="$fetchState.error" class="error-message">
      <v-alert type="error">
        Ошибка загрузки данных: {{ $fetchState.error.message }}
      </v-alert>
    </div>

    <div v-else>
      <div class="results-info mb-2 caption">
        Показано {{ paginatedUsers.length }} из {{ filteredUsers.length }} пользователей
      </div>

      <UserItem
        v-for="user in paginatedUsers"
        :key="user.id"
        :user="user"
        @city-click="filterByCity"
        @view-details="viewUserDetails"
      />

      <v-pagination
        v-if="totalPages > 1"
        v-model="currentPage"
        :length="totalPages"
        :total-visible="7"
        class="mt-4"
      />
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'UsersPage',
  data() {
    return {
      users: [],
      searchQuery: '',
      selectedCities: [],
      currentPage: 1,
      itemsPerPage: 50
    }
  },
  async fetch() {
    this.users = this.$api.users.getAll()
  },
  computed: {
    availableCities() {
      const citiesMap = new Map()
      this.users.forEach(user => {
        if (!citiesMap.has(user.city.id)) {
          citiesMap.set(user.city.id, user.city)
        }
      })
      return Array.from(citiesMap.values()).sort((a, b) => 
        a.title.localeCompare(b.title)
      )
    },
    filteredUsers() {
      let filtered = this.users

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase().trim()
        filtered = filtered.filter(user => {
          const nameMatch = user.name.toLowerCase().includes(query)
          const phoneMatch = user.phone.includes(query)
          return nameMatch || phoneMatch
        })
      }

      if (this.selectedCities.length > 0) {
        filtered = filtered.filter(user => 
          this.selectedCities.includes(user.city.id)
        )
      }

      return filtered
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredUsers.slice(start, end)
    },
    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.itemsPerPage)
    }
  },
  watch: {
    searchQuery() {
      this.currentPage = 1
    },
    selectedCities() {
      this.currentPage = 1
    }
  },
  methods: {
    filterByCity(city) {
      if (!this.selectedCities.includes(city.id)) {
        this.selectedCities.push(city.id)
      }
    },
    viewUserDetails(user) {
      this.$router.push(`/users/${user.id}`)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.users-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
}

.page-title {
  font-size: $font-size-h1;
  line-height: $line-height-h1;
  font-weight: $font-weight-h1;
  color: $color-text-primary;
}

.skeleton-wrapper {
  margin-top: 20px;
}

.error-message {
  margin-top: 20px;
}

.results-info {
  color: $color-text-caption;
}
</style>
