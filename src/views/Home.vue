<template>
  <div class="home">
    <product-list />
    <v-speed-dial
      fixed
      v-model="fab"
      :top="false"
      :bottom="true"
      right
      direction="top"
      :open-on-hover="false"
      transition="slide-y-reverse-transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue-grey darken-4"
          dark
          fab
        >
          <v-icon v-if="fab">
            mdi-close
          </v-icon>
          <v-icon v-else>
            mdi-plus
          </v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="white"
      >
        <v-icon style="color: black">mdi-cart</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="white"
      >
        <v-icon style="color: black">mdi-message-text</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
import ProductList from '@/components/Home/ProductList.vue'

export default {
  name: 'Home',
  components: {
    ProductList
  },
  data: () => ({
    fab: false
  })
}
</script>

<style lang="scss" scoped>
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}
</style>
