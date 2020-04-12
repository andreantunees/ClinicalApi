
exports.up = function(knex) {
    return knex.schema.createTable('photo', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('consult_id').notNullable();
        table.string('title').notNullable();
        table.string('url').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable().default(true);

        table.foreign('user_id').references('id').inTable('user');
        table.foreign('consult_id').references('id').inTable('consult');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('photo');
};
