'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  Route.get('/site', 'SiteController.index')
  Route.get('/home', 'SiteController.home')
  Route.post('/login', 'SiteController.login')
}).prefix('/admin/api')

Route.group(() => {
  Route.get('/:resource/grid', 'ResourceController.grid')
  Route.get('/:resource/form', 'ResourceController.form')
  Route.resource('/:resource', 'ResourceController')
}).prefix('/admin/api').middleware(['resource', 'auth'])
