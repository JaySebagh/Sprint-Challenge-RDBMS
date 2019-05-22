exports.up = function(knex, Promise) {
    return knex.schema.createTable("project", (tbl) => {
        tbl.increments();
        tbl.string("name", 128).notNullable().unique();
        tbl.string("description").notNullable();
        tbl.boolean("false");
        tbl.string("action");
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("project")
  };