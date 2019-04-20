import {HTTP} from './common'

export const Users = {
  create (config) {
    return HTTP.post('/auth/rest/users/', config).then(response => {
      return response.data
    })
  },
  delete (user) {
    return HTTP.delete(`/auth/rest/users/${user.id}/`)
  },
  list () {
    return HTTP.get('/auth/rest/users/').then(response => {
      return response.data
    })
  }
}
