const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'vue');
app.use(express.static('public'));

app.get(('/'), (req,res) => {
    res.render('app')
    // res.sendFile(path.join(__dirname, '/views/index.html'));
})
app.listen(8080, () => {
    console.log("The app is running on port 8080")
})