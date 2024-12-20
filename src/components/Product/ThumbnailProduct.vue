<template>
  <div>
    <v-flex xs12>
      <v-card>
        <v-img
          :src="item.img"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
          @click="showModal(item)"
        >
          <v-card-title v-text="item.title"></v-card-title>
        </v-img>

        <v-card-actions>
          R$ {{ item.price.toFixed(2).replace('.', ',') }}
          <v-spacer></v-spacer>
            <v-btn icon>
              <v-badge
                dot
                color="#DD4B39"
                overlap
              >
                <v-icon>mdi-comment</v-icon>
              </v-badge>
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </div>
</template>

<script>
import { bus } from '../../event-bus'

export default {
  props: ['item'],
  name: 'ThumbnailProduct',
  methods: {
    showModal(obj) {
      const val = ({ ...obj, show: true })
      bus.$emit('dialog', val)
    }
  }
}
</script>

<style lang="scss">
$badge-font-size: 8px !important;
</style>
