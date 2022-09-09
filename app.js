// mengimport module express
const express = require('express');
// mengimport module express-ejs-layouts
const expressLayouts = require('express-ejs-layouts');
// memasukkan sebuah fungsi express ke variabel app
const app = express();

// menyimpan port
const port = 3000;

// information using ejs
app.set('view engine', 'ejs');
// information using express-ejs-layouts
app.use(expressLayouts);

// membuat route /
app.get('/', (req, res) => {
  // merender file index dan mengirimkan data dengan layout main-layout
  res.render('index', {
    isActive: 'home',
    layout: 'layouts/main-layout',
    title: 'WebServer EJS',
    nama: 'Iwan Plamboyan',
  });
});

// membuat route /about
app.get('/about', (req, res) => {
  // memanggil file about dan mengirimkan data dengan layout main-layout
  res.render('about', {
    isActive: 'about',
    layout: 'layouts/main-layout',
    title: 'about page',
  });
});

// membuat route /contact
app.get('/contact', (req, res) => {
  const cont = [
    {
      name: 'Iwan Plamboyan',
      email: 'wann@gmail.com',
    },
    {
      name: 'coba',
      email: 'coba@gmail.com',
    },
    {
      name: 'coba2',
      email: 'coba2@gmail.com',
    },
  ];
  // memanggil file contact dan mengirimkan data dengan layout main-layout
  res.render('contact', {
    isActive: 'contact',
    layout: 'layouts/main-layout',
    title: 'contact page',
    cont,
  });
});

// membuat route /product dengan menyertakan id
app.get('/product/:id', (req, res) => {
  // menampilkan pesan beserta id yang dikirimkan di url
  res.send(`product id : ${req.params.id} <br/> category id: ${req.query.category}`);
});

// membuat middleware jika mengakses route selain route yang diatas maka page not found
app.use('/', (req, res) => {
  // menetapkan status code untuk page not found
  res.status(404);
  // mengirim pesan
  res.send('Page not found : 404');
});

// menjalankan express di port 3000
app.listen(port, () => {
  // mengirim pesan jika server sudah siap digunakan
  console.log(`Example app listening on port ${port}`);
});
