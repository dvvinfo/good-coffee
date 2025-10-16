<template>
  <v-container fluid class="home-page">
    <div class="hero-section mb-8">
      <v-row align="center">
        <v-col cols="12" md="6">
          <h1 class="display-1 font-weight-bold mb-4">
            Добро пожаловать в
            <span class="accent-text">Добрый кофе</span>
          </h1>
          <p class="subtitle-1 mb-6">
            Система управления кофейнями. Контролируйте продажи, 
            управляйте пользователями и отслеживайте работу торговых точек.
          </p>
          <v-btn 
            x-large 
            color="primary" 
            elevation="2"
            to="/users"
            class="mr-4"
          >
            <v-icon left>mdi-account-group</v-icon>
            Пользователи
          </v-btn>
          <v-btn 
            x-large 
            outlined 
            color="primary"
            to="/points"
          >
            <v-icon left>mdi-store</v-icon>
            Торговые точки
          </v-btn>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <v-icon size="300" color="primary" class="hero-icon">
            mdi-coffee
          </v-icon>
        </v-col>
      </v-row>
    </div>

    <v-divider class="my-8" />

    <h2 class="section-title mb-6">Быстрый доступ</h2>
    <v-row>
      <v-col cols="12" sm="6" md="4" lg="3" v-for="item in menuItems" :key="item.title">
        <v-card 
          :to="item.to" 
          class="menu-card" 
          hover
          elevation="2"
        >
          <v-card-text class="text-center pa-6">
            <v-avatar size="80" :color="item.color" class="mb-4">
              <v-icon size="40" dark>{{ item.icon }}</v-icon>
            </v-avatar>
            <h3 class="mb-2">{{ item.title }}</h3>
            <p class="caption mb-0">{{ item.description }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider class="my-8" />

    <h2 class="section-title mb-6">Статистика</h2>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="stat in stats" :key="stat.title">
        <v-card class="stat-card" elevation="2">
          <v-card-text class="text-center pa-6">
            <v-icon :color="stat.color" size="48" class="mb-3">
              {{ stat.icon }}
            </v-icon>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label caption">{{ stat.title }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      menuItems: [
        {
          title: 'Пользователи',
          icon: 'mdi-account-multiple',
          color: 'success',
          to: '/users',
          description: 'Управление клиентами'
        },
        {
          title: 'Торговые точки',
          icon: 'mdi-store',
          color: 'info',
          to: '/points',
          description: 'Магазины и кафе'
        },
        {
          title: 'Кофемашины',
          icon: 'mdi-cog',
          color: 'warning',
          to: '/machines',
          description: 'Оборудование'
        },
        {
          title: 'Партнеры',
          icon: 'mdi-handshake',
          color: 'primary',
          to: '/partners',
          description: 'Деловые партнеры'
        },
        {
          title: 'Сотрудники',
          icon: 'mdi-account-group',
          color: 'secondary',
          to: '/employees',
          description: 'Персонал'
        },
        {
          title: 'Напитки',
          icon: 'mdi-coffee',
          color: 'error',
          to: '/drinks',
          description: 'Меню напитков'
        },
        {
          title: 'Абонементы',
          icon: 'mdi-card-account-details',
          color: 'purple',
          to: '/subscriptions',
          description: 'Тарифы и планы'
        },
        {
          title: 'Активные абонементы',
          icon: 'mdi-card-account-details-star',
          color: 'teal',
          to: '/active-subscriptions',
          description: 'Действующие подписки'
        }
      ],
      stats: [
        {
          title: 'Всего пользователей',
          value: '8,000',
          icon: 'mdi-account-multiple',
          color: 'success'
        },
        {
          title: 'Торговых точек',
          value: '24',
          icon: 'mdi-store',
          color: 'info'
        },
        {
          title: 'Продаж за месяц',
          value: '15,234',
          icon: 'mdi-chart-line',
          color: 'warning'
        },
        {
          title: 'Активных абонементов',
          value: '1,523',
          icon: 'mdi-card-account-details-star',
          color: 'error'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.home-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 24px;
}

.hero-section {
  min-height: 400px;
  display: flex;
  align-items: center;
}

.accent-text {
  color: $color-accent;
}

.hero-icon {
  opacity: 0.2;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.section-title {
  font-size: 28px;
  font-weight: 700;
}

.menu-card {
  height: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    border-color: rgba($color-accent, 0.3);
  }
}

.stat-card {
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
}

.stat-value {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 8px;
}

.stat-label {
  text-transform: uppercase;
  letter-spacing: 0.5px;
  opacity: 0.7;
}

@media (max-width: 960px) {
  .hero-icon {
    font-size: 200px !important;
  }
  
  .home-page {
    padding: 24px 16px;
  }
}
</style>
