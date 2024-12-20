<template>
  <div>
    <v-dialog
      v-model="dialog"
    >
      <v-card>
        <v-btn
          icon
          class="float-right"
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="modalProduct">
          <v-row>
            <v-col cols="6">
              <v-img
                :src="img"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                max-height="600"
                contain
              />
            </v-col>
            <v-col cols="6">
              <v-row align="center">
                <v-col>{{ title }}</v-col>
              </v-row>
              <v-row>
                <v-col>R$ {{ price.toFixed(2).replace('.', ',') }}</v-col>
              </v-row>
              <v-row>
                <v-col>{{ description }}</v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-textarea
                    outlined
                    counter="140"
                    name="input-7-4"
                    label="Aguma observação?"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-text-field
                v-model.number="itemCount"
                append-icon="mdi-plus"
                @click:append="increment"
                prepend-inner-icon="mdi-minus"
                @click:prepend-inner="decrement"
                class="centered-input text--darken-3 mt-3 mr-4"
                readonly single-line
                dense
                small
              ></v-text-field>
              <v-btn
                color="deep-orange accent-4"
                text
                @click="reserve"
                outlined
                width="200"
              >
                <v-col cols="4">
                  Adicionar
                </v-col>
                <v-col cols="8" align="right">
                  R$ {{ newPrice.toFixed(2).replace('.', ',') }}
                </v-col>
              </v-btn>
            </v-card-actions>
          </v-row>
        </div>
      </v-card>
    </v-dialog>

    <!-- Mobile version -->

    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar
          dark
          prominent
          extended
          :src="img"
        >
          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle class="mt-1">{{ description }}</v-card-subtitle>
        <v-card-text>
        </v-card-text>
        <v-footer
          padless
          fixed
        >
          <v-row
            justify="center"
            no-gutters
          >
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-text-field
                v-model.number="itemCount"
                append-icon="mdi-plus"
                @click:append="increment"
                prepend-inner-icon="mdi-minus"
                @click:prepend-inner="decrement"
                class="centered-input text--darken-3 mt-3 mr-4"
                readonly single-line
                dense
                small
              ></v-text-field>
              <v-btn
                color="deep-orange accent-4"
                text
                @click="reserve"
                outlined
                width="200"
              >
                <div>
                  Adicionar
                </div>
                <v-spacer></v-spacer>
                <div>
                  R$ {{ newPrice.toFixed(2).replace('.', ',') }}
                </div>
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-footer>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { bus } from '@/event-bus'

export default {
  name: 'ProductItem',
  data: () => ({
    dialog: false,
    dialog1: false,
    notifications: false,
    sound: true,
    widgets: false,
    img: '',
    title: '',
    description: '',
    price: 0,
    id: null,
    itemCount: 1
  }),
  created() {
    const vm = this
    bus.$on('dialog', value => {
      if (this.$vuetify.breakpoint.name === 'sm' || this.$vuetify.breakpoint.name === 'xs') {
        vm.dialog1 = value.show
      } else {
        vm.dialog = value.show
      }
      vm.img = value.img
      vm.title = value.title
      vm.description = value.fullDesc
      vm.price = value.price
      vm.id = value.id
    })
  },
  computed: {
    newPrice() {
      return this.price * this.itemCount
    }
  },
  methods: {
    reserve() {
      console.log('reserve')
    },
    increment() {
      this.itemCount += 1
    },
    decrement() {
      this.itemCount = this.itemCount > 1 ? this.itemCount - 1 : 1
    }
  }
}
</script>

<style lang="scss">
.modalProduct {
  padding: 2%;
}
.centered-input input {
  text-align: center;
  max-width: 100px;
}
</style>
