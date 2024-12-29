const container = document.querySelector(".container");

const searchIcons = document.querySelectorAll(".search-bar i"); // Corrected selector

searchIcons.forEach(searchIcon => {
    searchIcon.addEventListener("click", () => {
        container.classList.toggle("change");
    });
});
