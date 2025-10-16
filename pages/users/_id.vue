<template>
  <v-container fluid class="user-detail-page">
    <v-btn text @click="$router.back()" class="mb-4">
      <v-icon left>mdi-arrow-left</v-icon>
      Назад к списку
    </v-btn>

    <h1 class="page-title mb-6">Детальная информация о пользователе</h1>
    
    <v-card class="pa-8 text-center">
      <v-icon size="80" color="grey lighten-1">mdi-account-circle</v-icon>
      <h2 class="mt-4 mb-2">Страница в разработке</h2>
      <p class="grey--text mb-4">Детальная информация о пользователе ID: {{ userId }}</p>
      <v-chip color="primary" class="mt-2">
        {{ userId }}
      </v-chip>
    </v-card>

    <v-row class="mt-6">
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Основная информация</h3>
          <p class="grey--text">Имя, телефон, email, адрес</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Статистика</h3>
          <p class="grey--text">История покупок, баланс, активность</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Абонементы</h3>
          <p class="grey--text">Активные и завершенные абонементы</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Транзакции</h3>
          <p class="grey--text">История транзакций и начислений</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'UserDetailPage',
  computed: {
    userId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped lang="scss">
.user-detail-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
}
</style>
