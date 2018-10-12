
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('publishers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('publishers').insert([
        {name:'hfsdf', address: 'ha nio', phone: '112312341'},
        {name:'hfsdf1', address: 'ha nio', phone: '212312341'},
        {name:'hfsdf2', address: 'ha nio', phone: '312312341'},
        {name:'hfsdf3', address: 'ha nio', phone: '412312341'},
        {name:'hfsdf4', address: 'ha nio', phone: '512312341'}
      ]);
    });
};
