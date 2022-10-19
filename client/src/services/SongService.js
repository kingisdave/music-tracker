import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  post (credentials) {
    return Api().post('songs', credentials)
  },
  show (credentials) {
    return Api().get('song', credentials)
  }
}
