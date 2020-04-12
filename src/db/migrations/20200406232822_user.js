
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('lastname').notNullable();
    table.string('document').notNullable();
    table.string('mail').notNullable();
    table.string('phone').notNullable();
    table.date('dateBorn').notNullable();
    table.datetime('dateReg').notNullable().default(knex.fn.now());
    table.boolean('estReg').notNullable().default(true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
