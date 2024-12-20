<template>
  <div>
    <v-app-bar
      app
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-row class="toolbaritems">

        <span class="toolbartitle text-wrap">
          Bella Roma Restaurante
          <p class="text-caption">
            <v-icon icon size="15">mdi-clock-time-two</v-icon>
             30 à 50 minutos - <strong>Grátis</strong></p>
        </span>

        <v-spacer></v-spacer>

        <v-dialog
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="sizeBtn" icon>
              <v-badge
                dot
                color="#DD4B39"
                overlap
                v-if="getFilter"
              >
                <v-icon
                  v-bind="[sizeIcon, attrs]"
                  v-on="on"
                >mdi-magnify</v-icon>
              </v-badge>
              <v-icon
                v-else
                v-bind="[sizeIcon, attrs]"
                v-on="on"
              >mdi-magnify</v-icon>
            </v-btn>
          </template>
          <template v-slot:default="dialog">
            <v-card>
              <v-card-title>
                <span class="headline">Procurar</span>
              </v-card-title>
              <v-card-text>
                <v-text-field
                  label="Procure por um item aqui"
                  hint="Exemplo: Hamburger Angus"
                  v-model="filterBox"
                  clearable
                  @click:clear="search('')"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  @click="dialog.value = false"
                >Fechar</v-btn>
                <v-btn
                  text
                  color="green darken-4"
                  @click="dialog.value = search(filterBox)"
                  :disabled="!filterBox"
                >Procurar</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>

        <v-btn v-bind="sizeBtn" icon>
          <v-icon v-bind="sizeIcon">mdi-information</v-icon>
        </v-btn>

        <v-btn v-bind="sizeBtn" icon>
          <v-icon v-bind="sizeIcon">mdi-share-variant</v-icon>
        </v-btn>
      </v-row>

      <template v-slot:extension>
        <v-tabs fixed-tabs v-model="tab">
          <v-tab
            v-for="item in getCategories" :key="item.id"
            :href="`#cat-${item.id}`"
             @click="goTo(`cat-${item.id}`)"
            >
            {{ item.description }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'NavBar',
  data: () => ({
    filterBox: ''
  }),
  computed: {
    ...mapGetters('Products', ['getCategories', 'getFilter']),
    ...mapGetters('Home', ['getIntersectItem', 'getItems']),
    tab: {
      get() {
        return this.getIntersectItem.target ? this.getIntersectItem.target.id : ''
      },
      set(value) {
        this.pubg(value)
      }
    },
    sizeIcon() {
      const size = {
        xs: 'medium', sm: 'medium', md: 'medium', lg: 'medium', xl: 'medium'
      }[
        this.$vuetify.breakpoint.name
      ]
      return size ? { [size]: true } : {}
    },
    sizeBtn() {
      const size = {
        xs: 'small', sm: 'small', md: 'medium', lg: 'medium', xl: 'medium'
      }[
        this.$vuetify.breakpoint.name
      ]
      return size ? { [size]: true } : {}
    },
    positionMenu() {
      const position = {
        xs: 'centered', sm: 'centered', md: 'centered', lg: 'left', xl: 'left'
      }[
        this.$vuetify.breakpoint.name
      ]
      return position ? { [position]: true } : {}
    }
  },
  methods: {
    ...mapActions('Home', ['setIntersectItem']),
    ...mapActions('Products', ['setFilter']),
    goTo(item) {
      const val = this.getItems.find(el => el.target.id === item)
      window.scrollTo(0, (val.boundingClientRect.y - 210))
    },
    pubg(val) {
      return val
    },
    search(value) {
      this.setFilter(value)
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.toolbaritems {
  padding: 15px;
}
.toolbartitle {
  font-size: 1.5vw;
  .text-caption {
    text-align: center;
  }
}

@media screen and (max-width : 990px){
  .toolbaritems {
    padding: 10px;
  }
  .toolbartitle {
    font-size: 5vw;
  }
}
</style>
