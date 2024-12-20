const SETINTERSECTITEM = (state, payload) => {
  state.intersectItem = payload
}

const PUSHITEMS = (state, payload) => {
  state.items.push(payload)
}

export default {
  SETINTERSECTITEM,
  PUSHITEMS
}
