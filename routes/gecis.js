  const express = require('express');
  const path = require('path');

  const app = express();
  const port = 3000;

  // Statik dosyaların bulunduğu klasörü belirt
  app.use(express.static(path.join(__dirname, '../')));

  app.get('/', (req, res) => {
    res.redirect('/views/anasayfa.html');
  });

  // Login sayfasına yönlendirme
  app.get('/login', (req, res) => {
    res.redirect('/views/login.html');
  });

  app.get('/Şikayet Ekle', (req, res) => {
    res.redirect('/views/sikayet.html');
  });
  app.get('/Profilim', (req, res) => {
    res.redirect('/views/profile.html');
  });
  app.get('/sikayetleri-gor', (req, res) => {
    res.redirect('/views/profile.html')
  });
  app.get('/profilesirketA', (req, res) => {
    res.redirect('/views/profilesirketA.html');
  });
  app.get('/profilesirketB', (req, res) => {
    res.redirect('/views/profilesirketB.html');
  });
  app.get('/profilesirketC', (req, res) => {
    res.redirect('/views/profilesirketC.html');
  });
  app.get('/profilesirketD', (req, res) => {
    res.redirect('/views/profilesirketD.html');
  });
  app.get('/profilesirketE', (req, res) => {
    res.redirect('/views/profilesirketE.html');
  });

  // Express uygulamasını belirtilen portta dinle
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });