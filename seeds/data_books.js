
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {title: 'hung', author: 'dsfsdf', publisher:12, price: 12321},
        {title: 'hung1', author: 'asfdq1', publisher:13, price: 5461},
        {title: 'hung2', author: 'asdvq1', publisher:13, price: 55461},
        {title: 'hung3', author: 'aszdq1', publisher:13, price: 6461}
      ]);
    });
};
