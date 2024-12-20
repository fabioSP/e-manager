<template>
  <v-card
    color="blue-grey darken-3"
    dark
    @click="showModal(item)"
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          :class="'headline' + `text-${model}`"
          v-text="item.title"
        ></v-card-title>

        <v-card-subtitle v-text="item.shortDesc"></v-card-subtitle>

        <v-card-text>
          R$ {{ item.price.toFixed(2).replace('.', ',') }}
        </v-card-text>
      </div>

      <v-avatar
        class="ma-3"
        size="125"
        tile
      >
        <v-img :src="item.img"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
import { bus } from '../../event-bus'

export default {
  props: ['item'],
  name: 'ProductItemList',
  data: () => ({
    model: 'caption',
    sizes: [
      ['mdi-devices', 'all', 'caption'],
      ['mdi-cellphone-iphone', 'sm', 'body-2'],
      ['mdi-laptop', 'md', 'body-1'],
      ['mdi-monitor', 'lg', 'h6'],
      ['mdi-television', 'xl', 'h4']
    ]
  }),
  computed: {
    typeClass() {
      const type = ['text', this.model]
      const [, breakpoint] = this.current

      if (breakpoint !== 'all') {
        type.splice(1, 0, breakpoint)
      }

      return `.${type.join('-')}`
    },
    current() {
      return this.sizes.find(size => size[2] === this.model)
    }
  },
  methods: {
    showModal(obj) {
      const val = ({ ...obj, show: true })
      bus.$emit('dialog', val)
    }
  }
}
</script>

<style lang="scss">
</style>
