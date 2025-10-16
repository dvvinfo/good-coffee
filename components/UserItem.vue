<template>
  <v-card class="user-item mb-3" elevation="1">
    <v-card-text>
      <v-row align="center">
        <v-col cols="12" sm="6" md="3">
          <div class="user-info">
            <h3 class="user-name">{{ user.name }}</h3>
            <p class="user-phone caption">{{ user.phone }}</p>
            <v-chip
              small
              :color="getCityColor(user.city.title)"
              class="mt-1"
              @click="$emit('city-click', user.city)"
            >
              {{ user.city.title }}
            </v-chip>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Баланс</div>
            <div class="stat-value">{{ user.balance }} ₽</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Накоплено</div>
            <div class="stat-value">{{ user.saveTotal }} ₽</div>
            <div class="stat-sub caption">{{ user.saveCount }} раз</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Потрачено</div>
            <div class="stat-value">{{ user.spendTotal }} ₽</div>
            <div class="stat-sub caption">{{ user.spendCount }} раз</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Последнее посещение</div>
            <div class="stat-value">{{ formatDate(user.lastVisit) }}</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="1" class="text-right">
          <v-btn
            icon
            color="primary"
            @click="$emit('view-details', user)"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'UserItem',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(timestamp) {
      const date = new Date(timestamp)
      return date.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    },
    getCityColor(cityName) {
      const colors = ['primary', 'secondary', 'accent', 'info', 'success']
      const index = cityName.length % colors.length
      return colors[index]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.user-item {
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.user-info {
  .user-name {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .user-phone {
    margin-bottom: 4px;
  }
}

.user-stat {
  .stat-label {
    margin-bottom: 4px;
  }

  .stat-value {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 2px;
  }

  .stat-sub {
    opacity: 0.7;
  }
}

@media (max-width: 960px) {
  .user-stat {
    margin-bottom: 12px;
  }
}
</style>
