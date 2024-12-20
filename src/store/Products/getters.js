const getFeatureds = state => state.items.filter(el => el.isFeatured)
const getProducts = state => state.items
const getCategories = state => state.categories
const getFilter = state => state.filter

export default {
  getProducts,
  getFeatureds,
  getCategories,
  getFilter
}
