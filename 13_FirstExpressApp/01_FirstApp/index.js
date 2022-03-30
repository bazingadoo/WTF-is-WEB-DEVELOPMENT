const express = require('express');
const app = express();
// console.dir(app);
//request response

// app.use((req, res) => {
//     console.log("we got a new request");
//     // console.dir(req);
//     // res.send("HELLO, WE GOT YOUR REQUEST");
//     // res.send({ color: 'red' });
//     res.send('<h1>This is my webpage</h1>');
// })

//routing

app.get('/', (req, res) => {
    res.send('WELCOME TO THE HOMEPAGE OF JUGAAAD.COM!')
})


//req params

app.get('/r/:subreddit', (req, res) => {
    // console.log(req.params);
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
    // res.send('THIS IS THE SUBREDDIT')
})

app.get('/r/:subreddit/:postId', (req, res) => {
    // console.log(req.params);
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post ID: ${postId} on the ${subreddit} subreddit</h1>`);
    // res.send('THIS IS THE SUBREDDIT')
})


app.post('/cats', (req, res) => {
    res.send('THIS IS THE POST REQUEST')
})

app.get('/cats', (req, res) => {
    // console.log('CAT REQUEST');
    res.send('MEOW!!!')
})

app.get('/dogs', (req, res) => {
    // console.log('DOG REQUEST');
    res.send('WOOF!')
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED')
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
    // console.log(req.query);
    // res.send('Heyo');
})

//by default
app.get('*', (req, res) => {
    res.send(`I don't know`);
})



// /cats => 'meow'
// /dogs => 'woof'
// '/' welcome to our homepage 

app.listen(8080, function () {
    console.log('listening on port 8080');
})