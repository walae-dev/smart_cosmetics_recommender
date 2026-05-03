
let buttons = document.querySelectorAll(".add-to-cart");
let cart = document.getElementById("cart");

let count = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        count++;
        cart.textContent = "🛒" + count;

        button.textContent = "Ajouté ✅" ;
        button.style.backgroundColor = "#d4af37";
    });
});
let categorySelect = document.getElementById("category");
let skinContainer = document.getElementById("skin-container");

categorySelect.addEventListener("change", () => {
    if (categorySelect.value === "skincare") {
        skinContainer.style.display = "block";
    } else {
        skinContainer.style.display = "none";
    }
});

function recommandProduct(){
    let category = document.getElementById("category").value;
    let skin = document.getElementById("skin").value;
    let budget = Number(document.getElementById("budget").value);

    let result = document.getElementById("result");

    let filtered = products.filter(p => {

    let matchCategory = p.category === category;
    let matchPrice = p.price <= budget;

    let matchSkin = true;

    if (category === "skincare") {
        matchSkin = !p.skin || p.skin === skin;
    }

    return matchCategory && matchPrice && matchSkin;
});

    if (filtered.length === 0) {
    result.textContent = "No product found.";
    return;
    }
    let html = "<strong>Recommended Products:</strong><br>";

    filtered.forEach(p => {
        html += `${p.name} - ${p.price} DH <br>`;
    });

    result.innerHTML = html;

}

