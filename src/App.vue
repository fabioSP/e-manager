<template>
  <div id="app">
    <v-app app>
      <v-card v-if="!getLoginData.isLoggedIn && !loginRoute">
        <div id="nav">
          <nav-bar app/>
        </div>
        <v-sheet>
          <v-main>
            <v-container fluid>
              <router-view />
            </v-container>
          </v-main>
        </v-sheet>
        <modal-product />
        <Footer class="mt-4"/>
      </v-card>
      <router-view v-else />
    </v-app>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/Utils/NavBar.vue'
import Footer from './components/Utils/Footer.vue'
import ModalProduct from './components/Product/ModalProduct.vue'

export default {
  components: {
    NavBar,
    Footer,
    ModalProduct
  },
  data: () => ({
  }),
  watch: {
    $route: {
      immediate: true,
      // eslint-disable-next-line
      handler(to, from) {
        document.title = to.meta.title || 'Delivinho'
      }
    }
  },
  computed: {
    ...mapGetters('Global', ['getLoginData']),
    loginRoute() {
      const areas = ['Login', 'Unauthorized', 'Register', 'ForgotPassword']
      return areas.includes(this.$route.name)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
