const args = process.argv.slice(2);   //by deafault 2, we will slice them 
for (let arg of args) {
    console.log(`Hi there ${arg}`);
}
