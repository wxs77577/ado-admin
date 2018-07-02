'use strict'

const Model = use('Model')

class Post extends Model {
  static get fields() {
    return {
      _id: {},
      title: {},
      body: { type: 'html', listable: false,}
    }
  }
}

module.exports = Post
