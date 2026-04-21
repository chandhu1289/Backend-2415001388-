const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    let student = {
        name: 'CHANDHU',
        roll: "2415001388",
        age: "21",
        email: "chandhuchandhu1289@gmail.com",
        hobbies: ["cricket", "kabbadi", "playing video games"]
    };
    res.render('home', { stu: student });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});