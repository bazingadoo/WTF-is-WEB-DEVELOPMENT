const express = require('express');
const { parseCIDR } = require('ipaddr.js');
const app = express();
const path = require('path');
//npm i methodover...
const methodOverride = require('method-override')
const { v4: uuid } = require('uuid');


//req.body
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.json())  //json

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: 'Rawwr',
        comment: 'lol this is so funny!'
    },
    {
        id: uuid(),
        username: 'denny',
        comment: 'I like to go skywatching with my doggo'
    },
    {
        id: uuid(),
        username: 'scaar',
        comment: 'plz delete your account'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})
app.get('/tacos', (req, res) => {
    res.send("Get  /tacos response")
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
})

app.post('/comments', (req, res) => {
    // console.log(req.body);
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    // res.send('Hey there! It worked')
    // redirecting to comments
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    // console.log(req.body.comment);
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})


app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')

})


app.post('/tacos', (req, res) => {
    console.log(req.body);
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
})


app.listen(3000, () => {
    console.log('ON PORT #3000')
})