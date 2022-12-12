<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->




<!-- ABOUT THE PROJECT -->
## Unity School


Penyedia informasi sekolah yang berkualitas, karena masa depan pembelajaran yang lebih baik dimulai di sini!



### Built With

Unity School dibuat dengan 

* [HTML](https://www.w3schools.com/html/)
* [CSS](https://www.w3schools.com/css/)
* [Javascript](https://www.w3schools.com/js/)
* [Node Js](https://nodejs.org)
* [Express Js](https://expressjs.com)
* [Mysql](https://mysql.com/)


<p align="right">(<a href="#top">back to top</a>)</p>

## Cloning Repository
Silahkan cloning repository terlebih dahulu dengan cara buka terminal git lalu ketikan perintah berikut
```bash
  git clone https://github.com/CROWNIX/Peduli-Gizi.git
```

## Installasi Backend

Setelah proses cloning selesai silahkan masukan dua perintah berikut untuk masuk ke folder yang sudah di cloning tadi

```bash
  cd Unity-School
  cd Unity-School-API
```
Setelah itu install package dengan mengetikan perintah berikut
```bash
  npm install
```
Pastikan sudah mengintall nodemon secara global, jika belum ketikan perintah berikut di terminal
```bash
  npm install -g nodemon
```
Setelah proses installasi package selesai, Silahkan nyalakan xampp nya dan buat database di phpmyadmin dengan nama `School` Setelah dibuat, kembali lagi ke terminal dan ketikan dua perintah berikut
```bash
  npm run migrate
  npm run seed
```
Setelah itu jalankan server dengan mengetikan perintah :
```bash
  npm run dev
```

## Installasi Frontend
Setelah proses instalasi backend selesai, install terlebih dahulu package yang dibutuhkan frontend. Caranya buat lagi terminal baru dan masuk ke dalam folder `Unity-School` seperti diatas dan masuk ke directory frontend dengan cara `cd Unity-School-Frontend`. Setelah itu jalankan perintah berikut untuk mengintall package: 
```bash
  npm install
```
Setelah install package selesai, silahkan jalankan server dengan mengetikan :
```bash
  npm run start-dev
```
<p align="right">(<a href="#top">back to top</a>)</p>

