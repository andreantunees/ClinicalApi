
exports.up = function(knex) {
    return knex.schema.createTable('doctor', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('specialization_id').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('user_id').references('id').inTable('user');
        table.foreign('specialization_id').references('id').inTable('specialization');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('doctor');
};
