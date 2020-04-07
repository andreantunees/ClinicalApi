
exports.up = function(knex) {
    return knex.schema.createTable('consultMedicine', function (table) {
        table.increments();
        table.integer('consult_id').notNullable();
        table.integer('medicine_id').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('consult_id').references('id').inTable('consult');
        table.foreign('medicine_id').references('id').inTable('medicine');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('consultMedicine');
};
