<template>
  <div>
    <v-row>
      <v-col cols="12" class="justify-center">
        <v-flex class="pa-10 pb-8">
          <v-expand-transition class="text-center">
            <v-responsive max-width="1000">
              <div class="d-flex justify-space-between caption text-center">
                <p class="font-weight-black title">
                  Ops... Você precisa estar logado para acessar esta área.
                </p>
              </div>
              <div class="d-flex justify-space-between caption">
                <p>Aguarde, em breve você será redirecionado...</p>
              </div>
            </v-responsive>
          </v-expand-transition>
          <v-img
            src="@/assets/images/401-unlock.svg"
            contain
            :aspect-ratio="['xs', 'sm'].some(r => this.$vuetify.breakpoint.name.includes(r))? 1 : 2"
          ></v-img>
        </v-flex>
      </v-col>
    </v-row>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>

export default {
  name: 'Unauthorized',
  data: () => ({
    overlay: false
  }),
  mounted() {
    setTimeout(() => { this.overlay = true }, 3000)
  }
}
</script>

<style lang="scss" scoped>
</style>
