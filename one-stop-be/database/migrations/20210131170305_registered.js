exports.up = function (knex) {
  return knex.schema.createTable("registered", (registered) => {
    registered.increments();

    registered.string("email", 128).notNullable().unique();
    registered.string("password", 128).notNullable();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("registered");
};
