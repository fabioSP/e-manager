const SETLOGGEDIN = (state, payload) => {
  state.loginData = payload
}

const SETLOGOUT = () => {
  console.log('logout')
}

export default {
  SETLOGGEDIN,
  SETLOGOUT
}
