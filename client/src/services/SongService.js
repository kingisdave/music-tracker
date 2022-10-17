import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  show (credentials) {
    return Api().get('song', credentials)
  }
}
