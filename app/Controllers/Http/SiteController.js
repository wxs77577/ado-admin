'use strict'

class SiteController {
  async index() {
    return {
      name: 'Adonis Admin',
      logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      menu: [
        {
          "name": "Home",
          "url": "/",
          "icon": "fa fa-home",
          // for home page
        },
        {
          "name": "Content",
          "title": true,
          // display as a delimiter
        },
        {
          "name": "Users",
          "url": "/rest/users",
          "icon": "fa fa-users",
        },
        {
          "name": "Posts",
          "url": "/rest/posts",
          "icon": "fa fa-list",
        },
        {
          "name": "Logout",
          "url": "/login",
          "icon": "fa fa-lock",
        },
      ]
    }
  }

  async login({ request, auth }) {
    const { username, password } = request.all()
    const token = await auth.attempt(username, password)
    token.user = await use('App/Models/User').findBy({ username })
    return token
  }

  async home(){
    return {}
  }
}

module.exports = SiteController
