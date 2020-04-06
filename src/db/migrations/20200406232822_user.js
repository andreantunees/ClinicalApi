
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('lastname').notNullable();
    table.string('document').notNullable();
    table.string('mail').notNullable();
    table.string('phone').notNullable();
    table.date('dateBorn').notNullable();
    table.datetime('dateReg').notNullable().default(knex.fn.now());
    table.string('estReg', 1).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
