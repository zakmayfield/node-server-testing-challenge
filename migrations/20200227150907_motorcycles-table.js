
exports.up = function(knex) {
  return knex.schema.createTable('motorcycles', motorcycles => {
    motorcycles.increments();

    motorcycles.string('make', 128)
      .notNullable();
  
    motorcycles.string('model', 128)
      .notNullable();

    motorcycles.string('odometer', 128);

    motorcycles.string('price', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('motorcycles');
};
