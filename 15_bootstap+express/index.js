const express = require('express');
const app = express();
const path = require('path');
const redditdata = require('./data.json');
// console.log(redditdata)

app.use(express.static(path.join(__dirname, 'public')))

// app.use(express.static('public'))

app.set('view engine', 'ejs');
//joining the path
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // res.render('random', { bubbles: num });   or
    res.render('random', { num });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditdata[subreddit];
    if (data) {
        res.render('reddit', { ...data });
    }
    else {
        res.render('notfound', { subreddit: subreddit });
    }
    // console.log(data);

})

app.get('/cats', (req, res) => {
    const cats = ['rawrr', 'maddy', 'audi'];
    res.render('cat', { cats });

})


app.listen(3000, () => {
    console.log('listening on port 3000');
})

