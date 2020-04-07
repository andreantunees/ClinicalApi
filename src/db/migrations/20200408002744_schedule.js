
exports.up = function(knex) {
    return knex.schema.createTable('schedule', function (table) {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('doctor_id').notNullable();
        table.datetime('dateSchedule').notNullable().default(knex.fn.now());
        table.string('notes');

        table.datetime('dateReg').notNullable().default(knex.fn.now());
        table.boolean('estReg').notNullable();

        table.foreign('user_id').references('id').inTable('user');
        table.foreign('doctor_id').references('id').inTable('doctor');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('schedule');
};
