
exports.up = function(knex) {
    return knex.schema.createTable('allergic', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('medicine_id').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable().default(true);

        table.foreign('user_id').references('id').inTable('user');
        table.foreign('medicine_id').references('id').inTable('medicine');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('allergic');
};
