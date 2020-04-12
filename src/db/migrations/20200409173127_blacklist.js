
exports.up = function(knex) {
    return knex.schema.createTable('blacklist', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('token').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable().default(true);

        table.foreign('user_id').references('id').inTable('user');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('blacklist');
};
