/*
const contatos = [
    { idcontato: 1, nomecontato: "will" , telefone: "123456"},
    { idcontato: 2, nomecontato: "Mike" , telefone: "456789"},
    { idcontato: 3, nomecontato: "Fox" , telefone: "987654"}
   
] */
  
  exports.up = knex => knex.schema.alterTable("contato", tb => {
      tb.string("telefone", 14)
  })
  
  exports.down = knex => knex.schema.table("contato" , tb => {
      tb.dropColumn("telefone")
  })

