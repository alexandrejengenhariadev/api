'use strict'

const OngController = require('../app/Controllers/Http/OngController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/ongs', 'OngController.list')
Route.get('/ongs/:id', 'OngController.show')
Route.post('/ongs','OngController.store')
Route.put('/ongs/:id','OngController.update' )
Route.delete('/ongs/:id', 'OngController.delete')