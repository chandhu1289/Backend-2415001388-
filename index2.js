// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('hello express');
// });

// app.get('/about', (req, res) => {
//     res.send('welcome to about page');
// });

// app.get('/home', (req, res) => {
//     res.send('welcome to home page');
// });

// app.get('/contact', (req, res) => {
//     res.send('welcome to contact page');
// });
// app.get('/search', (req, res) => {
//     console.log(req.query);
//     res.send('result display');
// });
// app.listen(8000, () => {
//     console.log('Server running on port 8000');
// });
// const express = require('express');
// const app = express();
// //request methods
// //1.get  2.post  3.put  4.patch  5.delete
// app.get('/', (req, res) => {
//     res.send("Welcome to Main page..");
// });
// app.get('/home', (req, res) => {
//     res.send("Welcome to home page..");
//     res.send(`<h1>Search result found<h1> ${req.query.name}
//         <a href='/home'>Click here about page <a/>`);
// });

// app.get('/contact', (req, res) => {
//     res.send("Welcome to contact page..");
// });

// app.get('/search', (req, res) => {
//     console.log(req.query);
//     res.send("<h1>Search result found<h1>" + req.query.name);
//     res.send(`<h1>Search result found<h1> ${req.query.name}
//         <a href='/contact'>Click here about page <a/>`);
// });

// app.listen(8000, () => {
//     console.log("successfully http://localhost:8000");
// });
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello Express');
// });
// app.get('/about', (req, res) => {
//     res.send('Hello about');
// });
// app.get('/contact', (req, res) => {
//     res.send('Hello contact');
// });
// app.get('/search', (req, res) => {
//     console.log(req.query);
//     res.send(`<h1>search result found</h1> ${req.query.name}
//     <a href='/about'>Click here about page</a>`);
// });

// app.listen(8000, () => {
//     console.log('Server running on http://localhost:8000');

// });
// const express = require("express");
// const app = express();
// app.get('/', (req, res) => {
//     res.send("Hello Express");
// });
// app.listen(8000, () => {
//     console.log("Server is running at http://localhost:8000");
// });
// app.get('/Home', (req, res) => {
//     res.send("Welcome to homepage");
// });
// app.get('/about', (req, res) => {
//     res.send("welcome to about us  page");
// });
// app.get('/contact', (req, res) => {
//     res.send("You can contact us at xyz@gmail.com");
// });
// app.get('/search', (req, res) => {

//     console.log(req.query);
//     res.send(`<h1>Result display </h1> ${req.query.name})
//   <a href="about">click her about page</a>`)
// });
// app.use((req, res) => {
//     res.status(404).send("page not found");
// })

// const data = req.query.name;
// if (!data) {
//     res.send("Please provide a name in the query parameter");
// } else {
//     res.send('result display' + data);
// }