<template>
  <v-footer
    dark
    padless
    class="mt-4"
  >
    <v-card
      flat
      tile
      class="grey darken-3 text-center"
    >
      <v-card-text class="white--text pt-0 mt-4" style="width: 100vw;">
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vempedindo</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>

</style>
