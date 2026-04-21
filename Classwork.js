const express = require('express');
const path = require('path');

const app = express();

app.get(['/', '/home'], (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'About.html'));
});
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Dashboard.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Contact.html'));
});
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Profile.html'));
});
app.use((req, res) => {
    res.status(404).send('404 Page Not Found');
});
app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
});