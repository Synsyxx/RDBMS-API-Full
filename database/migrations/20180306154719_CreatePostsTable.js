
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(tbl) {
      tbl.increments('id');
      tbl.uuid('userId').references('id').inTable('users').notNullable();
      tbl.text('text', 'longText').notNullable();
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
