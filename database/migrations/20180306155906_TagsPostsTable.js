
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tagspost', function(tbl) {
      tbl.increments();
      tbl.integer('postId').notNullabe().references('id').inTable(posts);
      tbl.integer(tagID).notNullabe().refernces('id').inTable('tags');
      tbl.timestamp('createdAt').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tagspost');
};
