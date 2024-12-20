const setLoggedIn = ({ commit }, obj) => {
  commit('SETLOGGEDIN', obj)
}

const setLogout = ({ commit }) => {
  commit('SETLOGOUT')
}

export default {
  setLoggedIn,
  setLogout
}
