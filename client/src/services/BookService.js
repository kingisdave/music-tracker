import Api from '@/services/Api'

export default {
  index () {
    return Api().get('books')
  },
  show (credentials) {
    return Api().get('book', credentials)
  }
}
