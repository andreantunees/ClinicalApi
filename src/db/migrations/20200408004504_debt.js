
exports.up = function(knex) {
    return knex.schema.createTable('debt', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('consult_id').notNullable();
        table.string('value').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('user_id').references('id').inTable('user');
        table.foreign('consult_id').references('id').inTable('consult');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('debt');
};
