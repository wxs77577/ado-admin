'use strict'

const Hash = use('Hash')
const Model = use('Model')

class User extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany('App/Models/Token')
  }

  static get fields() {
    return {
      _id: { label: 'ID' },
      username: { label: 'Username' },
      password: { label: 'Password', type: 'password', listable: false },
      is_active: { label: 'Is Active', type: 'switch' },
    }
  }
}

module.exports = User
