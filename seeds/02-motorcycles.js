
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('motorcycles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('motorcycles').insert([
        {
          make: 'Indian',
          model: 'Scout Bobber',
          odometer: '4200',
          price: 13000
        },
        {
          make: 'Harley-Davidson',
          model: 'Iron 883',
          odometer: '1200',
          price: 9500
        },
        {
          make: 'Kawasaki',
          model: 'Ninja 650',
          odometer: '7200',
          price: 5000
        },
      ]);
    });
};
