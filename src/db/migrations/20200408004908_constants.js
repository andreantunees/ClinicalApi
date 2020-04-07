
exports.up = function(knex) {
    return knex.schema.createTable('constants', function (table) {
        table.increments();
        table.string('register');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('constants');
};
