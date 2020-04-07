
exports.up = function(knex) {
    return knex.schema.createTable('medicineSymptom', function (table) {
        table.increments();
        table.integer('symptom_id').notNullable();
        table.integer('medicine_id').notNullable();

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('symptom_id').references('id').inTable('symptom');
        table.foreign('medicine_id').references('id').inTable('medicine');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('medicineSymptom');
};
