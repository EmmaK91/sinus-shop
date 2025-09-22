// Code here!

//change ash to potato
document.querySelector(".art-1 h3").innerText = "Potato";
//change home to X
document.querySelector("header nav a").innerText="Start"
//change contact to mail
document.querySelector("header nav a:nth-of-type(3)").innerText="Mail us"
//change information about Fire
document.querySelector(".art-2 p").innerText="Im a hoodie and you are ugly"
//change color and name of button
document.querySelector(".art-1 button").style.backgroundColor = "green"
document.querySelector(".art-1 button").innerText = "Korvspad"
//change background color
document.querySelector(".art-2").style.backgroundColor = "yellow"
//change adress
document.querySelector("footer section article p").innerHTML="Halv åtta hos mig <br> Hemma hos Emma <br> Kinna"
//change color on every <p>
let allPColor = document.querySelectorAll("p")
allPColor.forEach(p => p.style.color = "red")
// Ändra text på samtliga knappar till add to cart.
let allText = document.querySelectorAll("button");
allText.forEach(button => button.textContent = "Add to cart");
// Lägg till classen active på menyalternativet home.
document.querySelector("header nav a").classList.add("active");
//Ta bort classen logo på logotypen.
//let removeClassLogo = document.querySelector("header img")
//removeClassLogo.classList.remove("logo")
//lägg till nyprodukt
let main = document.querySelector("main");
main.insertAdjacentHTML("beforeend", `
  <article class="art-4">
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
    <button>buy</button>
  </article>
`);
// Lägg till klickfunktion och console.log
document.querySelector(".logo").addEventListener("click", function() {
    console.log("Found you!");
});

//Lägg till klickfunktion på alla article som loggar ut H3 på varje produkt
let allArticles = document.querySelectorAll("main article");
allArticles.forEach(article => {
    article.addEventListener("click", function() {
        console.log("Hi I'm article: " + article.querySelector("h3").innerText);
    });
});