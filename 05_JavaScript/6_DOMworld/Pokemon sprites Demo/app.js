

const container = document.querySelector('#container');
//assigning the base url to the variable url                   
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// label.innerText can be used in place of label.append
for (let i = 1; i < 899; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');              //adding a class to div

    const label = document.createElement('span');
    label.innerText = `#${i}`;

    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}${i}.png`;


    pokemon.append(newImg);
    pokemon.append(label);
    container.append(pokemon);
}

//UNDERLYING IDEA

/* <section id ='container'>
    <div>
        <img>
            <span>imgtext</span>
    </div>
</section> */