const setIntersectItem = ({ commit }, obj) => {
  if (obj.is !== undefined) {
    if (obj.is[0].isIntersecting) {
      commit('SETINTERSECTITEM', obj.is[0])
    }
  }
}

const setPushItems = ({ commit }, item) => {
  if (item) {
    commit('PUSHITEMS', item[0])
  }
}

export default {
  setIntersectItem,
  setPushItems
}
