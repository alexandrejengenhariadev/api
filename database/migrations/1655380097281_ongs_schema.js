'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OngsSchema extends Schema {
  up () {
    this.create('ongs', (table) => {
      table.increments()
      table.string('nome',50)
      table.string('cep',9)
      table.string('endereco',200)
      table.string('telefone',15)
      table.string('responsavel',50)
      table.string('email',50)
      table.string('imagem')
      table.timestamps()
    })
  }

  down () {
    this.drop('ongs')
  }
}

module.exports = OngsSchema
