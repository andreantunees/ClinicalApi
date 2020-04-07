
exports.up = function(knex) {
    return knex.schema.createTable('specialization', function (table) {
        table.increments();
        table.string('description').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('specialization');
};
