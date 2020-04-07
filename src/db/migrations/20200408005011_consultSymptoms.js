
exports.up = function(knex) {
    return knex.schema.createTable('consultSymptom', function (table) {
        table.increments();
        table.integer('symptom_id').notNullable();
        table.integer('consult_id').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('symptom_id').references('id').inTable('symptom');
        table.foreign('consult_id').references('id').inTable('consult');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('consultSymptom');
};
