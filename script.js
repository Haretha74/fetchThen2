fetch("https://pokeapi.co/api/v2/pokemon")
  .then(res => res.json())
  .then(function(data) {
    // console.log(data);
    let template = document.querySelector("#template");
    let pokeList = document.querySelector("#pokeList");
    
    data.results.forEach(function(result) {
        let clone = template.content.cloneNode(true);
        clone.querySelector(".listItem").innerText = result.name;
        pokeList.appendChild(clone);
    });
});