// const lis = document.querySelectorAll('li');
// for (let li of lis) {
//     li.addEventListener('click', function () {
//         li.remove();
//     });
// }

const tweetForm = document.querySelector('#tweetForm');
const tweetContainer = document.querySelector('#tweets');
// console.dir(tweetForm);      //has elements property

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(userNameInput.value, tweetInput.value);
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);

    //resetting the values
    usernameInput.value = '';
    tweetInput.value = '';
    // console.log('SUBMIT!!!');


});


const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`);
    tweetContainer.append(newTweet);
};

tweetContainer.addEventListener('click', function (e) {
    // console.log('Clicked On UL');

    // console.log(e);              //target would be li(e.target)
    // console.dir(e.target);      //see node name or specific removal 

    //for li node true && true = true (boolean expressions)
    e.target.nodeName === 'LI' && e.target.remove();     //false && true = false (for other nodes)
})