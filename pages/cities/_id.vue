<template>
  <v-container fluid class="city-detail-page">
    <v-btn text @click="$router.back()" class="mb-4">
      <v-icon left>mdi-arrow-left</v-icon>
      Назад
    </v-btn>

    <h1 class="page-title mb-6">Информация о городе</h1>
    
    <v-card class="pa-8 text-center">
      <v-icon size="80" color="grey lighten-1">mdi-map-marker</v-icon>
      <h2 class="mt-4 mb-2">Страница в разработке</h2>
      <p class="grey--text mb-4">Информация о городе ID: {{ cityId }}</p>
      <v-chip color="primary" class="mt-2">
        {{ cityId }}
      </v-chip>
    </v-card>

    <v-row class="mt-6">
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Торговые точки</h3>
          <p class="grey--text">Список торговых точек в городе</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Статистика</h3>
          <p class="grey--text">Статистика продаж и активности</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Пользователи</h3>
          <p class="grey--text">Пользователи в этом городе</p>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="pa-4">
          <h3 class="mb-3">Кофемашины</h3>
          <p class="grey--text">Кофемашины в городе</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CityDetailPage',
  computed: {
    cityId() {
      return this.$route.params.id
    }
  }
}
</script>

<style scoped lang="scss">
.city-detail-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
}
</style>
