
exports.up = function(knex) {
    return knex.schema.createTable('medicine', function (table) {
        table.increments();
        table.string('description').notNullable();
        table.string('segment');
        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable().default(true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicine');
};
