<template>
  <div>
    <v-container id="featured">
      <v-row>
        <v-col>
          <h1>Destaques</h1>
        </v-col>
      </v-row>
      <v-row>
        <swiper class="swiper" :options="swiperOption">
          <swiper-slide v-for="item in getFeatureds"
          :key="item.id">
            <thumbnail-product
              :item="item"
              style="max-width: 100%; cursor: pointer;"
            />
          </swiper-slide>
        </swiper>
      </v-row>
      <v-skeleton-loader
        v-if="loading"
        v-bind="attrs"
        type="heading"
      ></v-skeleton-loader>
      <v-skeleton-loader
        v-if="loading"
        v-bind="attrs"
        type="card"
      ></v-skeleton-loader>
      <div v-else v-for="item in categories" :key="item.id">
        <v-row class="headers" :id="`cat-${item.id}`" v-intersect="onIntersect">
          <v-col><h1>{{ item.description }}</h1></v-col>
        </v-row>
        <div v-for="prod in search.filter(el => el.categoryId === item.id)" :key="prod.id">
          <v-row>
            <v-col cols="12">
              <product-item-list
              :item="prod"
              style="cursor: pointer;" />
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import ThumbnailProduct from '@/components/Product/ThumbnailProduct.vue'
import ProductItemList from '@/components/Product/ProductItemList.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { mapGetters, mapActions } from 'vuex'
import 'swiper/css/swiper.css'

export default {
  name: 'ProductList',
  components: {
    Swiper,
    SwiperSlide,
    ThumbnailProduct,
    ProductItemList
  },
  data: () => ({
    attrs: {
      class: 'mb-6',
      boilerplate: true,
      elevation: 2
    },
    items: null,
    loading: false,
    swiperOption: {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: false,
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        350: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }
    }
  }),
  mounted() {
    this.loading = true
    this.fetchData().then(() => {
      this.loading = false
    })
  },
  computed: {
    ...mapGetters('Products', ['getProducts', 'getFeatureds', 'getCategories', 'getFilter']),
    search() {
      if (!this.items) {
        return []
      }

      if (!this.getFilter) {
        return this.items
      }

      return this.items.filter(item => item.title
        .toLowerCase().includes(this.getFilter.toLowerCase())
        || item.shortDesc.toLowerCase().includes(this.getFilter.toLowerCase())
        || item.shortDesc.toLowerCase().includes(this.getFilter.toLowerCase()))
    },
    categories() {
      if (this.search.lenght < 1) {
        return []
      }
      return this.getCategories.filter(el => this.search.map(a => a.categoryId).includes(el.id))
    }
  },
  methods: {
    ...mapActions('Home', ['setIntersectItem', 'setPushItems']),
    onIntersect(entries, observer) {
      this.setPushItems(entries)
      this.setIntersectItem({ is: entries, ob: observer })
    },
    async fetchData() {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.items = this.getProducts
          resolve()
        }, 3000)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size-huge: 10;
$white: "#00000";

.swiper {
  height: 300px;
  width: 100%;

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: $font-size-huge * 2;
    background-color: $white;
  }
}

.swiper-slide {
  width: 60%;
}
.swiper-slide:nth-child(2n) {
    width: 40%;
}
.swiper-slide:nth-child(3n) {
    width: 20%;
}
</style>
