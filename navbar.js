function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    var imageContainer = document.querySelector(".image-container");

    if (navbar.style.left === "-250px") {
        navbar.style.left = "0";
        imageContainer.classList.add("shifted"); // Ajoute la classe pour décaler l'image
    } else {
        navbar.style.left = "-250px";
        imageContainer.classList.remove("shifted"); // Supprime la classe pour réinitialiser la position de l'image
    }
}
