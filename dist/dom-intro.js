"use strict";
console.log(document);
// komma åt element via id
const heading = document.getElementById("heading");
console.log(heading === null || heading === void 0 ? void 0 : heading.textContent);
// kikar om heading finns 
if (heading) {
    // då kan vi ju komma åt nnehållet å ändra
    heading.innerText = "<img /><p>HEJ</p>";
}
// type assertion (as ...)
const textInput = document.querySelector("#text-input");
console.log(textInput === null || textInput === void 0 ? void 0 : textInput.value);
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
const listEl = document.querySelector(".myList");
console.log(listEl);
// querySelectorAll - hämtar alla element som matchar det vi sätter in i parentesen
const allListItems = document.querySelectorAll("li");
console.log(allListItems);
const products = [
    { id: 1, name: "Cactus", price: 190 },
    { id: 2, name: "Monstera", price: 260 },
    { id: 3, name: "Rose", price: 50 }
];
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
//# sourceMappingURL=dom-intro.js.map