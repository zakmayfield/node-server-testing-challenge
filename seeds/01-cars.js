
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Honda',
          model: 'Accord',
          odometer: '125000',
          price: 5000
        },
        {
          make: 'Ford',
          model: 'Explorer',
          odometer: '95000',
          price: 8000
        },
        {
          make: 'Nissan',
          model: 'X-Terra',
          odometer: '142000',
          price: 12000
        },
      ]);
    });
};
