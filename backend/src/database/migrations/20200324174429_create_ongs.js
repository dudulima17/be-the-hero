
exports.up = function(knex) {  //Método UP é sempre responsável pela criacao da tabela e pelo que vai acontecer quando a mesma for executada
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

exports.down = function(knex) { //Método DOWN seria a excepition, ou seja, o que teria que ser feito caso houvesse algum erro durante a execução
    return knex.schema.dropTable('ongs');
};
