<template>
  <v-card class="user-item mb-3" elevation="2">
    <v-card-text class="py-3">
      <v-row align="center" class="user-row">
        <v-col cols="12" sm="6" md="3">
          <div class="user-info">
            <h3 class="user-name">{{ user.name }}</h3>
            <p class="user-phone caption mb-1">{{ maskedPhone }}</p>
            <v-chip
              small
              :color="getCityColor(user.city.title)"
              class="city-chip"
              @click.stop="$emit('city-click', user.city)"
            >
              <v-icon left small>mdi-map-marker</v-icon>
              {{ user.city.title }}
            </v-chip>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Баланс</div>
            <div class="stat-value" :class="balanceClass">
              {{ user.balance >= 0 ? '+' : '' }}{{ user.balance }} ₽
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Накоплено</div>
            <div class="stat-value positive">{{ user.saveTotal }} ₽</div>
            <div class="stat-sub caption">{{ user.saveCount }} раз</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Потрачено</div>
            <div class="stat-value neutral">{{ user.spendTotal }} ₽</div>
            <div class="stat-sub caption">{{ user.spendCount }} раз</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="user-stat">
            <div class="stat-label caption">Последнее посещение</div>
            <div class="stat-value date">{{ formatDate(user.lastVisit) }}</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="1" class="text-right">
          <v-btn
            icon
            color="primary"
            class="detail-btn"
            @click.stop="$emit('view-details', user)"
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
  computed: {
    balanceClass() {
      if (this.user.balance > 0) return 'positive'
      if (this.user.balance < 0) return 'negative'
      return 'neutral'
    },
    maskedPhone() {
      if (!this.user.phone || this.user.phone.length < 10) return this.user.phone
      return `${this.user.phone.slice(0, 3)}***${this.user.phone.slice(-4)}`
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
      const colors = ['success', 'info', 'warning', 'error', 'primary']
      const index = cityName.length % colors.length
      return colors[index]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.user-item {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: rgba($color-accent, 0.3);

    .user-name {
      color: $color-accent;
    }

    .detail-btn {
      transform: translateX(4px);
      background-color: rgba($color-accent, 0.1);
    }
  }
}

.user-row {
  position: relative;
}

.user-info {
  .user-name {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
    transition: color 0.2s ease;
  }

  .user-phone {
    color: $color-text-caption;
  }

  .city-chip {
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 500;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
  }
}

.user-stat {
  .stat-label {
    margin-bottom: 6px;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 0.5px;
    color: $color-text-caption;
  }

  .stat-value {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 2px;
    transition: all 0.2s ease;

    &.positive {
      color: #4caf50;
    }

    &.negative {
      color: #f44336;
    }

    &.neutral {
      color: inherit;
    }

    &.date {
      font-size: 15px;
      font-weight: 600;
    }
  }

  .stat-sub {
    opacity: 0.6;
    font-size: 11px;
  }
}

.detail-btn {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.theme--dark {
  .user-item {
    &:hover {
      border-color: rgba($color-accent, 0.5);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3);
    }
  }

  .stat-value {
    &.positive {
      color: #66bb6a;
    }

    &.negative {
      color: #ef5350;
    }
  }
}

@media (max-width: 960px) {
  .user-stat {
    margin-bottom: 12px;
  }

  .user-item:hover {
    transform: translateY(-2px);
  }
}
</style>
