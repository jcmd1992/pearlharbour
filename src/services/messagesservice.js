import Api from '@/services/api'

export default {
  fetchMessages () {
    return Api().get('/messages')
  },
  postMessage (message) {
    return Api().post('/message', message,
      { headers: {'Content-type': 'application/json'} })
  },
  deleteMessage (id) {
    return Api().delete(`/message/${id}`)
  },
  fetchMessage (id) {
    return Api().get(`/messages/${id}`)
  },
  putMessage (id, message) {
    console.log('REQUESTING ' + message._id + ' ' +
      JSON.stringify(message, null, 5))
    return Api().put(`/messages/${id}`, message,
      { headers: {'Content-type': 'application/json'} })
  }
}
