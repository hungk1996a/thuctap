const express = require('express');
const app = express();
const knex = require('./knexDatabase');

app.get('/get', (req,res) => {
   knex.select(`id`, `title`).table('books')
       .then((data) =>{
          console.log(data);
       });
   res.send('success');
});

app.post('/post', (req, res) =>{
   knex('books').insert([{title:"hung4", author:"hungg4", publisher:14, price:231321}])
       .then((data) => {
           console.log(data);
       });
   res.send("success");
});

app.put('/put', (req, res) =>{
   knex('books').where('id', 4).update({title:'hung33', author:'hung3333'})
       .then((data) =>{
          console.log(data);
       });
   res.send('success');
});

app.delete('/delete', (req,res) =>{
   knex('books').where('id',4).del()
       .then((data) =>{
           console.log(data);
       }) ;
   res.send('success');
});

app.get('/count', (req,res) =>{
   knex('books').count(`id `).where('id',1)
       .then((data) => {
           console.log(data);
       });
   res.send('success');
});

app.listen(3000, () => {
   console.log('running server ');
});