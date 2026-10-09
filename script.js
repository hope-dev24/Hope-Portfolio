const button = document.getElementById("helloButton");
const heading = document.querySelector("h1");

button.addEventListener("click", function () {
    if (heading.style.display === "none") {
        heading.style.display = "block";
    }else {
        heading.style.display = "none";
    }
});
