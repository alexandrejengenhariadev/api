'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OngsSchema extends Schema {
  up () {
    this.create('ongs', (table) => {
      table.increments()
      table.string('nome',50)
      table.integer('cep',11)
      table.string('endereco')
      table.timestamps()
    })
  }

  down () {
    this.drop('ongs')
  }
}

module.exports = OngsSchema
