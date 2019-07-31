const knexfile = require('../knexfile')
const knex = require('knex') (knexfile)


module.exports =knex

//knex('users').insert({
 //   name:'teste',
  //  email:'teste@teste.com.br',
    //password:''
//}).then(data =>console.log(data))

//OU

//knex('users').select('*').then(resultado =>console.log(resultado))


//knex('users').then(resultado =>console.log(resultado))