
exports.up = function(knex) {
  return knex.schema.createTable('cars', cars => {
    cars.increments();

    cars.string('make', 128)
      .notNullable();
  
    cars.string('model', 128)
      .notNullable();

    cars.string('odometer', 128);

    cars.integer('price', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
