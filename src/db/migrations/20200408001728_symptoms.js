
exports.up = function(knex) {
    return knex.schema.createTable('symptom', function (table) {
        table.increments();
        table.string('description').notNullable();
        table.string('segment');
        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('symptom');
};
