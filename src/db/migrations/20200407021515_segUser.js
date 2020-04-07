
exports.up = function (knex) {
    return knex.schema.createTable('segUser', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.string('status');
        table.string('login').notNullable();
        table.string('pass').notNullable();
        table.string('tkn').notNullable();
        table.datetime('dateLastLogin');

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('user_id').references('id').inTable('user');
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('segUser');
};
