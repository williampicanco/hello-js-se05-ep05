
const contatos = [
    { nomecontato: 'Will', telefone: '85991212121' },
    { nomecontato: 'Erick', telefone: '85989898989' },
    { nomecontato: 'Michael', telefone: '85988787878'}
  ]
  
  exports.up = knex => knex('contato').insert(contatos)
  
  exports.down = knex => knex('contato').del()
    .whereIn('telefone', contatos.map(e => e.telefone))
