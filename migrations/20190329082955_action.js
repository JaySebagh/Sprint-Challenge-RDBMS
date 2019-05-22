exports.up = function(knex, Promise) {
    return knex.schema.createTable("action", tbl => {
        tbl.increments();
        tbl.string("description").notNullable();
        tbl.string("notes").notNullable();
        tbl.boolean("false");
        tbl
          .integer("project_id")
          .notNullable()
          .unsigned()
          .references("id")
          .inTable("project")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists("action")
  };