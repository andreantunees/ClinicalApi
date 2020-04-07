
exports.up = function(knex) {
    return knex.schema.createTable('payment', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.string('valor').notNullable();
        table.string('method').notNullable();
        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('user_id').references('id').inTable('user');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('payment');
};
