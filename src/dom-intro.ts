console.log(document);
// komma åt element via id
const heading = document.getElementById("heading");
console.log(heading?.textContent);
// kikar om heading finns 
if (heading) {
    // då kan vi ju komma åt nnehållet å ändra
    heading.innerText = "<img /><p>HEJ</p>";
}

// type assertion (as ...)
const textInput = document.querySelector("#text-input") as HTMLInputElement;
console.log(textInput?.value);

// hitta befintligt element att förankra vårt nygjorda element i
const welcomeSectionEl = document.querySelector(".welcome-section");
if (welcomeSectionEl) {
    // skapa nytt HTML-element:
    const myEl = document.createElement("p");
    // lägg till nytt element i HTML från TS
    welcomeSectionEl.appendChild(myEl);
    myEl.innerText = "HEJ";
    myEl.style.backgroundColor = "teal";
}

// ---------- Dynamiskt fylla på en lista -------------
// queryselector, <ul>
const listEl = document.querySelector(".myList")
console.log(listEl);
// querySelectorAll - hämtar alla element som matchar det vi sätter in i parentesen
const allListItems = document.querySelectorAll("li");
console.log(allListItems);

interface Plant {
    id: number;
    name: string;
    price: number;
}

const products: Plant[] = [
    {id: 1, name: "Cactus", price: 190},
    {id: 2, name: "Monstera", price: 260},
    {id: 3, name: "Rose", price: 50}
]

if (listEl) {
    const listItems = products.map(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - ${product.price}kr`;
        return listItem;
    });
    console.log(listItems);
    // lägga in elementen vi skapat i ul-listan
    listItems.forEach(item => {
        listEl.appendChild(item);
    });
}