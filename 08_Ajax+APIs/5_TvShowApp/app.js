
const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.log('SUMBITTED!!');
    // console.dir(form);
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    // console.log(searchTerm);
    const req = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // const img = document.createElement('IMG');
    // img.src = req.data[0].show.image.medium;
    // document.body.append(img);
    makeImages(req.data);
    form.elements.query.value = '';
})

//iterating over our searches 
const makeImages = (shows) => {
    for (let result of shows) {
        // console.log(result);
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

