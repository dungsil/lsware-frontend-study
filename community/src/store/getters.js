export default {
  isNotLogin ({ accessToken }) {
    return accessToken.length <= 0
  }
}
